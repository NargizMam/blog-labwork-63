import React, {useCallback, useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {PostInfo} from "../../types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Spinner from "../Spinner/Spinner";
import Button from "@mui/material/Button";


const Post = () => {
    const [postInfo, setPostInfo] = useState<PostInfo | null>(null);
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();

    const fetchPosts = useCallback(async () => {
        try{
            setLoading(true);
            const postResponse = await axiosApi.get<PostInfo>('/posts/' + id + '.json');
            setPostInfo(postResponse.data);
        }finally {
            setLoading(false);
        }
    }, []);
    const  deletePost =async () => {
        await axiosApi.delete<PostInfo>('/posts/' + id + '.json');
        navigate('/');
    };

    useEffect(()=> {
        fetchPosts().catch(console.error);
    }, [id]);

    return postInfo && (
        <>
            {loading ? <Spinner/> : null}
            <Card sx={{ width: 650, margin: 5}}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Created on: {postInfo.date}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {postInfo.title}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {postInfo.message}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button>
                        <Link to={'/edit/'+ id }>Edit</Link>
                    </Button>
                    <Button onClick={deletePost}>Delete</Button>
                </CardActions>
            </Card>
        </>

    );
};

export default Post;