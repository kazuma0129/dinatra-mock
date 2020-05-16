import { get, post, del, put, patch } from "https://denopkg.com/syumai/dinatra/mod.ts";
import {userRoutes} from './users.ts'
import {postRoutes} from './posts.ts'

const getIndex = () => {
  return get("/", () => {
    return "get index"
  })
}

const postIndex = () => {
  return post("/", () => {
    return "post index"
  })
}

const putIndex = () => {
  return put("/", () => {
    return "put index"
  })
}

const patchIndex = () => {
  return patch("/", () => {
    return "patch index"
  })
}

const delIndex = () => {
  return del("/", () => {
    return "del index"
  })
}

const indexRoutes = [getIndex(), postIndex(), putIndex(), patchIndex(), delIndex()]

export const routes = [...indexRoutes ,...userRoutes, ...postRoutes]