import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";

const About = () => {
    const [text, setText] = useState();

    useEffect(() => {
        const fetchText = async () => {
            const textResponse =   await axiosApi.get('/about.json');
            setText(textResponse.data.text)
        } ;
        fetchText().catch(console.error)
    }, [])
    return (
        <article>
            <p style={{width: 300, margin: 50}}>{text}</p>
        </article>
    );
};


export default About;