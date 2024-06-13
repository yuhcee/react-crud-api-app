import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from './Layout';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';

const ENDPOINT = `https://jsonplaceholder.typicode.com/posts/`;

const PostDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`${ENDPOINT}${id}`);
                setPost(response.data);
            } catch (err) {
                console.error(err);
                setError('Failed to load post.');
            }
        };
        fetchPost();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`${ENDPOINT}${id}`);
            navigate('/');
        } catch (err) {
            console.error(err);
            setError('Failed to delete post.');
        }
    };

    const goBack = () => navigate('/');

    if (error) return <div>Error: {error}</div>;
    if (!post) return <div>Loading...</div>;

    return (
        <Layout>
            <h1 className="text-3xl font-bold mb-5">{capitalizeFirstLetter(post.title)}</h1>
            <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
            <p className="mb-5">
                <em>{capitalizeFirstLetter(post.body)}</em>
            </p>
            <div className="space-x-3">
                <Link to={`/edit/${id}`} className="px-4 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-700">
                    Edit
                </Link>
                <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700">
                    Delete
                </button>
                <button onClick={goBack} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700">
                    Go Home
                </button>
            </div>
        </Layout>
    );
};

export default PostDetail;
