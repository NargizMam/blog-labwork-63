import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Post} from "../../../types";
import {Link} from "react-router-dom";

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

interface Props {
    post: Post
}

const OnePost: React.FC<Props> = ({post}) => {
    return (
        <Card sx={{ width: 350, margin: 5}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                   Created on: {post.date}
                </Typography>
                <Typography variant="h5" component="div">
                    {bull}{post.title}{bull}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={'posts/'+post.id}>Learn More</Link>
            </CardActions>
        </Card>
    );
};

export default OnePost;