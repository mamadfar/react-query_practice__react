import {useQuery} from "@tanstack/react-query";
import {getPostsService} from "../services/post.service.ts";

const PostsList2 = () => {
    const postsQuery = useQuery({
        queryKey: ["posts"],
        queryFn: () => getPostsService(),
        refetchInterval: 1000,
    });

    if (postsQuery.status === "loading") return <h1>Loading...</h1>
    if (postsQuery.status === "error") return <pre>{JSON.stringify(postsQuery.error)}</pre>

    return (
        <section>
            <h1>Posts List 2</h1>
            <ol>
                {postsQuery.data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ol>
        </section>
    )};

export default PostsList2;
