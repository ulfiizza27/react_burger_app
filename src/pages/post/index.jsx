import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostContainer from './PostContainer';
import FavoritePost from './FavoritePost';
import { useDispatch } from 'react-redux';
import { setListOfFavoritePosts, setListOfPosts } from '../../store/slices/post.slice';
import { useFetch } from '../../utils/useFetch';

export default function Post() {
    const dispatch = useDispatch()

    const { fetcher, isLoading, data } = useFetch();

    useEffect(() => {
        fetcher('/weather?city=sydney');
    }, []);

    console.log(isLoading)
    console.log(data)

    return (
        <main className='container mx-auto'>
            <PostContainer />
            <FavoritePost />
        </main>
    );
}