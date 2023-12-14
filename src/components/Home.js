import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([])
    const k = useLocation()
    async function postData(selectedTags) {
        const url = "http://127.0.0.1:5000/recommendation"
        // Default options are marked with *
        const data = { keywords: selectedTags, course_level: "Beginner" }
        const response = await axios.post(url, { ...data });
        setData(response.data.recommendations)
    }
    console.log(k,'lk')
    useEffect(() => {
    if (k.state) {
            postData(k.state.keywords)
        }
    }, [k?.state])
    return (
        <div className='container'>
            <h1>Courses</h1>
            {data && data?.map((h) => <h2>something</h2>)}
        </div>
    );
}

export default Home;
