import API from "../config/API.ts";

export const getPostsService = () => {
    return API.get<ReadonlyArray<IPost>>("/posts", {params: {_sort: "title"}}).then(res => res.data);
}