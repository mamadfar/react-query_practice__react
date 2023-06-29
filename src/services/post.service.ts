import API from "../config/API.ts";

export const getPostsService = () => {
    return API.get<ReadonlyArray<IPost>>("/posts", {params: {_sort: "title"}}).then(res => res.data);
};

export const getPostService = (id: number): Promise<IPost> => {
    return API.get<ReadonlyArray<IPost>>("/posts", {params: {id}}).then(res => res.data[0]);
};

export const createPostService = ({title, body}: {title: string, body: string}) => {
    return API.post("/posts", {
        title,
        body,
        userId: 1,
        id: Date.now()
    }).then(res => res.data)
};

export const getPostsPaginatedService = (page: number) => {
    return API.get<ReadonlyArray<IPost>>("/posts", {params: {_page: page, _sort: "title", _limit: 2}}).then(res => {
        const hasNext = (page * 2) <= parseInt(res.headers["x-total-count"]);
        return {
            nextPage: hasNext ? page + 1 : undefined,
            previousPage: page > 1 ? page - 1 : undefined,
            posts: res.data
        }
    });
};

