import React from 'react';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';

const PostList = ({ posts, status }) => {
    return status === 'error' ? (
        <p>Something went wrong!</p>
    ) : (
        <ul className="space-y-4">
            {posts.map((post) => (
                <li key={post.id} className="bg-white p-5 rounded-lg shadow-md hover:bg-gray-50">
                    <Link to={`/post/${post.id}`} className="text-l font-medium text-blue-600">
                        {capitalizeFirstLetter(post.title)}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default PostList;
