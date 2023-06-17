import {useQuery} from "@tanstack/react-query";
import {getPostsService} from "../services/post.service.ts";

const PostsList1 = () => {

    const postsQuery = useQuery({
        queryKey: ["posts"],
        queryFn: () => getPostsService(),
        // staleTime: 1000
    });

    if (postsQuery.isLoading) return <h1>Loading...</h1>
    if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>

    return (
        <section>
            <h1>Posts List 1</h1>
            <ol>
                {postsQuery.data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ol>
        </section>
    )};

export default PostsList1;
