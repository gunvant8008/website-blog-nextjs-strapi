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
        <title>{article.attributes.Title}</title>
        <meta name="description" content="Gunvant Sharma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-12 grid lg:grid-cols-3 gap-12 single-article">
        <div className="col-span-2">
          <h1 className="text-3xl font-bold">{article.attributes.Title}</h1>
          <div className="flex items-center my-4">
            <div>
              <p className="mr-2 font-bold text-gray-600">
                By: {article.attributes.createdBy?.data?.attributes.firstname}{" "}
                {article.attributes.createdBy?.data?.attributes.lastname}{" "}
              </p>
            </div>
            <span className="text-gray-400">
              {formatDate(article.attributes.createdAt)}
            </span>
          </div>
          <div className="text-lg text-gray-600 leading-8">
            <img
              alt="image"
              src={`http://localhost:1337${article?.attributes?.Image?.data.attributes.url}`}
            />

            <MDXRemote
              {...(article?.attributes?.Body as MDXRemoteSerializeResult)}
            />
          </div>
        </div>
        <Signup />
      </div>
    </>
  )
}

export default article

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  console.log(query.slug)
  const queryString = qs.stringify({
    populate: ["Image", "createdBy"],
    filters: {
      Slug: {
        $eq: query.article
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
