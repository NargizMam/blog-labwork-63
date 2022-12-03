import { Grid } from '@mui/material';
import React, {useCallback, useEffect, useState} from 'react';
import AllPosts from "../../components/AllPosts/AllPosts";
import {Outlet} from "react-router-dom";
import {Post, PostList} from "../../types";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";

const Home = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchPosts = useCallback(async () => {
        try{
            setLoading(true);
            const postResponse = await axiosApi.get<PostList>('/posts.json');
            const posts = Object.keys(postResponse.data).map(key => {
                const post = postResponse.data[key]
                post.id = key;
                return post;
            })
            setPosts(posts)
        }finally {
            setLoading(false);
        }
    }, []);

    useEffect( () => {
        fetchPosts().catch(console.error);
    }, [posts.length]);

    return (
        <div className='d-flex m-5 '  >
            <Grid item xs={8}>
                {loading ? <Spinner/> :
                    <AllPosts posts={posts}/>}

            </Grid>
            <Grid item xs={4}>
                <Outlet/>
            </Grid>
        </div>
    );
};

export default Home;