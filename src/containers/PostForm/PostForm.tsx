import React, {useEffect, useState} from 'react';
import {NewPost} from "../../types";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";

const PostForm = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [newPost, setNewPost] = useState<NewPost>({
        title: '',
        message: '',
        date: '',
    } );
    useEffect(() => {
        const fetchPost = async () => {
            if(id){
                const editPost = await axiosApi.get('/posts/' + id + '.json');
                await setNewPost(editPost.data);
            }
        }
        fetchPost().catch(console.error);
    }, [id]);

    const [loading, setLoading] = useState(false);

    const createPost =async () => {
        try{
            setLoading(true);
            await axiosApi.post('/posts.json', newPost);
        }finally {
            setLoading(false);
            navigate('/');
        }
    };

    const editPost =async () => {
        try{
            setLoading(true);
            await axiosApi.put('/posts/' + id + '.json', newPost);
        }finally {
            setLoading(false);
            navigate('/');
        }
    };


    const onDishChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setNewPost(prev => ({...prev,
            [name]: value,
            date: (new Date()).toString()
        }));
    };

    const onFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(id){
            await editPost();
        }
        await createPost();

    };
    let pageTitle = 'Add new post'

    if(id){
        pageTitle = 'Edit this post!'
    }

    return (
        <div className='col-6 m-5'>
            <h4>{pageTitle}</h4>

            <form onSubmit={onFormSubmit} >
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title" name="title" type="text"
                        className="form-control"
                        value={newPost.title}
                        onChange={onDishChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message" name="message"
                        className="form-control"
                        value={newPost.message}
                        onChange={onDishChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    {id ? 'Edit' : 'Create'}
                    {loading ? <Spinner/> : null}
                </button>
            </form>

        </div>
    );
};

export default PostForm;