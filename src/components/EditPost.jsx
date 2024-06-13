import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from './Layout';
const ENDPOINT = `https://jsonplaceholder.typicode.com/posts/`;

const EditItem = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        axios
            .get(`${ENDPOINT}${id}`)
            .then((response) => {
                setTitle(response.data.title);
                setBody(response.data.body);
            })
            .catch((error) => console.error(error));
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .put(`${ENDPOINT}${id}`, { id, title, body })
            .then(() => {
                navigate(`/post/${id}`);
            })
            .catch((error) => console.error(error));
    };

    return (
        <Layout>
            <h1 className="text-3xl font-bold mb-5">Edit Post</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Body</label>
                    <textarea value={body} onChange={(e) => setBody(e.target.value)} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm" />
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
                    Save
                </button>
            </form>
        </Layout>
    );
};

export default EditItem;
