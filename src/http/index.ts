import axios from "axios"

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.BACKEND_API_KEY}`
  }
})

// fetch categories
export const fetchCategories = async () => api.get("/api/categories")
// fetch articles
export const fetchArticles = async (queryString: string) =>
  api.get(`/api/articles?${queryString}`)
// // fetch single article
// export const fetchSingleArticle = async (queryString: string) => api.get(`/api/articles/${queryString}`)
