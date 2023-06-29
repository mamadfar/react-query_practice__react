import {FormEvent, useRef} from 'react';
import {useMutation} from "@tanstack/react-query";
import {createPostService} from "../services/post.service.ts";

const CreatePost = () => {

    const titleRef = useRef<HTMLInputElement | null>(null);
    const bodyRef = useRef<HTMLInputElement | null>(null);

    const createPostMutation = useMutation({
        mutationFn: createPostService
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        createPostMutation.mutate({
            title: titleRef.current?.value as string,
            body: titleRef.current?.value as string,
        })
    }

    return (
        <div>
            {createPostMutation.isError && JSON.stringify(createPostMutation.error)}
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" ref={titleRef}/>
                </div>
                <div>
                    <label htmlFor="body">Body</label>
                    <input type="text" id="body" ref={bodyRef}/>
                </div>
                <button disabled={createPostMutation.isLoading}>
                    {createPostMutation.isLoading ? "Loading..." : "Create"}
                </button>
            </form>
        </div>
    );
};

export default CreatePost;
