import { get, post, del, put, patch } from "https://denopkg.com/syumai/dinatra/mod.ts";

 const getUsers = () => {
  return get("/users", () => {
    return "get /users"
  })
};

 const postUser = () => {
  return post("/users",  (ctx) => {
    return "post /users";
  })
}

 const putUser = () => {
  return put("/users",  (ctx) => {
    return "put /users";
  })
}

 const patchUser = () => {
  return patch("/users",  (ctx) => {
    return "patch /users";
  })
}

 const delUser = () => {
  return del("/users",  (ctx) => {
    return "del /users";
  })
}

export const userRoutes = [getUsers(), postUser(), patchUser(), putUser(), delUser()]
