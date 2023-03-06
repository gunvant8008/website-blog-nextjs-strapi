import React from "react"
import { GetServerSideProps } from "next"

import qs from "qs"
import { IArticle, ICollectionResponse, IQueryOptions } from "@/types"
import { AxiosResponse } from "axios"
import { fetchArticles } from "@/http"
import { formatDate, serializeMarkdown } from "@/utils"
import Head from "next/head"
import Image from "next/image"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import Signup from "@/components/Signup"

interface IPropType {
  article: IArticle
  notFound?: boolean
}

const article = ({ article, notFound }: IPropType) => {
  return (
    <>
      <Head>
        <title>{article.attributes.title}</title>
        <meta name="description" content="Gunvant Sharma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid gap-12 my-12 lg:grid-cols-3 single-article">
        <div className="col-span-2">
          <h1 className="text-3xl font-bold">{article?.attributes?.title}</h1>
          <div className="flex items-center my-4">
            <div>
              <p className="mr-2 font-bold text-gray-600">
                By: {article?.attributes?.author}{" "}
              </p>
            </div>
            <span className="text-gray-400">
              {formatDate(article?.attributes?.createdAt)}
            </span>
          </div>
          <div className="text-lg leading-8 text-gray-600">
            <img
              alt="image"
              src={article?.attributes?.image?.data?.attributes?.url}
            />

            <MDXRemote
              {...(article?.attributes?.body as MDXRemoteSerializeResult)}
            />
          </div>
        </div>
        <Signup />
      </div>
    </>
  )
}

export default article

export const getServerSideProps: GetServerSideProps = async context => {
  context.res.setHeader("Cache-Control", "s-maxage=20, stale-while-revalidate")
  const queryString = qs.stringify({
    populate: ["image", "createdBy"],
    filters: {
      slug: {
        $eq: context.query.article
      }
    }
  })
  // fetch article, array of one article
  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await fetchArticles(queryString)

  return {
    props: {
      article: await serializeMarkdown(articles.data[0]),
      notFound: articles.data.length === 0 ? true : false
    }
  }
}
