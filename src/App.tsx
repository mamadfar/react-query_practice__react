import {useState} from "react";
import {PostsList1, PostsList2} from "./components";

const App = () => {

    const [currentPage, setCurrentPage] = useState(<PostsList1/>);

    return (
        <main>
            <button onClick={() => setCurrentPage(<PostsList1/>)}>Posts List 1</button>
            <button onClick={() => setCurrentPage(<PostsList2/>)}>Posts List 2</button>
            <br/>
            {currentPage}
        </main>
    )
}

export default App
