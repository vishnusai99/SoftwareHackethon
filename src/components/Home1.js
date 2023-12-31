import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Courses from "./Courses";

function Home1() {
    const [data, setData] = useState([]);
    const [selectedTag, setSelectedTag] = useState('');

    const k = useLocation();
    async function postData() {
        const url = "http://127.0.0.1:5000/personalized-recommendation";
        const data = { user_input: selectedTag };
        const response = await axios.post(url, { ...data });
        setData(response.data.recommendations);
    }

    useEffect(() => {
        if (k.state) {
            setSelectedTag(k.state.userInput)
        }
    }, [k?.state]);

    useEffect(() => {
        if (selectedTag !== '')
            postData();
    }, [selectedTag]);

    return (
        <div className="container mt-4 d-flex flex-row flex-wrap justify-center items-center mx-auto gap-x-4 gap-y-6">
            {data && data?.map((item, i) => <Courses key={i} courseData={item} />)}
        </div>
    );
}

export default Home1;
