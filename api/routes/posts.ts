import { get, post, del, put, patch } from "https://denopkg.com/syumai/dinatra/mod.ts";

 const getPosts = () => {
  return get("/posts", () => {
    return "get /posts"
  })
};

 const postPost = () => {
  return post("/posts",  (ctx) => {
    return "post /posts";
  })
}

 const putPost = () => {
  return put("/posts",  (ctx) => {
    return "put /posts";
  })
}

 const patchPost = () => {
  return patch("/posts",  (ctx) => {
    return "patch /posts";
  })
}

 const delPost = () => {
  return del("/posts",  (ctx) => {
    return "del /posts";
  })
}

export const postRoutes = [getPosts(), postPost(), patchPost(), putPost(), delPost()]
