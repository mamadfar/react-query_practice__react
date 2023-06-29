import {FC} from 'react';
import {useQuery} from "@tanstack/react-query";
import {getPostService} from "../services/post.service.ts";
import {getUserService} from "../services/user.service.ts";

const Post:FC<{id: number}> = ({id}) => {

    const postQuery = useQuery({
        queryKey: ["posts", id],
        queryFn: () => getPostService(id),
    });

    const userQuery = useQuery({
        queryKey: ["users", postQuery?.data?.userId],
        queryFn: () => getUserService(postQuery?.data?.userId),
        enabled: postQuery?.data?.userId != null,
    });

    if (postQuery.status === "loading") return <h1>Loading...</h1>;
    if (postQuery.status === "error") return <h1>{JSON.stringify(postQuery.error)}</h1>;

    return (
        <section>
            <h1>{postQuery?.data?.title}</h1>
            <small>{userQuery.isLoading
                ? "Loading User..."
                : userQuery.isError
                    ? "Error Loading User"
                    : userQuery.data.name
            }
            </small>
            <p>{postQuery.data.body}</p>
        </section>
    )};

export default Post;
