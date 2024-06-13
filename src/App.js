import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PaginationButtons from './components/PaginationButtons';
import PostList from './components/PostList';
const ENDPOINT = `https://jsonplaceholder.typicode.com/posts?_page=`;

const App = () => {
    const [Posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [status, setStatus] = React.useState('idle');

    useEffect(() => {
        async function fetchData() {
            setStatus('loading');
            const response = await axios.get(`${ENDPOINT}${page}`);
            const data = await response.data;
            if (data) {
                setStatus('success');
                setPosts(data);
            } else {
                setStatus('error');
            }
        }
        fetchData();
    }, [page]);

    return (
        <div className="min-h-screen bg-gray-100 p-2 w-100">
            <div className=" bg-gray-200 w-2/4 mx-auto p-5 shadow-md">
                <h1 className="text-3xl font-bold mb-5">Posts</h1>
                <PostList posts={Posts} />
                <PaginationButtons setPage={setPage} status={status} page={page} />
            </div>
        </div>
    );
};

export default App;
