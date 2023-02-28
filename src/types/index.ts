export interface ICategory {
  id: number
  attributes: ICategoryAttribute
}

export interface ICategoryAttribute {
  Title: string
  slug: string
}

export interface IPagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export interface IResourceMeta {
  pagination: IPagination
}
export interface ICollectionResponse<T> {
  data: T
  meta: IResourceMeta
}

export interface IImageData {
  data: {
    attributes: {
      url: string
      formats: {
        small: {
          url: string
        }
      }
    }
  }
}

export interface IAuthor {
  data: {
    attributes: {
      firstname: string
      lastname: string
      // avatar: {
      //   data: {
      //     attributes: {
      //       formats: {
      //         thumbnail: {
      //           url: string
      //         }
      //       }
      //     }
      //   }
      // }
    }
  }
}

export interface IArticleAttribute {
  Title: string
  Body: string
  slug: string
  image: IImageData
  createdAt: string
  createdBy: IAuthor
  category: ICategory
}

export interface IArticle {
  id: number
  attributes: IArticleAttribute
}

export type TDirection = 1 | -1

export interface IQueryOptions {
  filters: any
  sort: any
  populate: any
  pagination: {
    page: number
    pageSize: number
  }
}