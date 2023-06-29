import {useState} from "react";
import {CreatePost, Post, PostsList1, PostsList2} from "./components";

const App = () => {

    const [currentPage, setCurrentPage] = useState(<PostsList1/>);

    return (
        <main>
            <button onClick={() => setCurrentPage(<PostsList1/>)}>Posts List 1</button>
            <button onClick={() => setCurrentPage(<PostsList2/>)}>Posts List 2</button>
            <button onClick={() => setCurrentPage(<Post id={1}/>)}>First Post</button>
            <button onClick={() => setCurrentPage(<CreatePost/>)}>New Post</button>
            <br/>
            {currentPage}
        </main>
    )
}

export default App
