import React, {useCallback, useEffect, useState} from 'react';
import {NewPost, PostList} from "../../types";
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";

const PostForm = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [newPost, setNewPost] = useState<NewPost>({
        title: '',
        message: '',
        date: '',
    });
    useEffect(() => {
        const fetchPost = async () => {
          const editPost = await axiosApi.get('/posts/' + id + '.json');
          await setNewPost(editPost.data)
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
    }


    const onDishChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setNewPost(prev => ({...prev,
            [name]: value,
            date: (new Date()).toString()
        }));
    };

    const onFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
       await createPost();
    };

    return (
        <form onSubmit={onFormSubmit} className='col-6 m-5'>
            <h4>Add new dish</h4>
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
            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    );
};

export default PostForm;