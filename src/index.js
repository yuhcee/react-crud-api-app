import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import PostDetail from './components/PostDetail';
import EditPost from './components/EditPost';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/post/:id" element={<PostDetail />} />
                <Route path="/edit/:id" element={<EditPost />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
