import React from 'react';
import {Post} from "../../types";
import OnePost from "./OnePost/OnePost";

interface  Props {
    posts: Post[];
}
const AllPosts: React.FC<Props> = ({posts}) => {

    const onePost = posts.map(post => (
        <OnePost post={post}
                 key={post.id}
        />
        ))


    return posts &&(
        <>
           <p>All posts</p>
            {onePost}
        </>
    );
};

export default AllPosts;