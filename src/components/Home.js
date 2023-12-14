import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Courses from "./Courses";

function Home() {
  const [data, setData] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [goal, setGoal] = useState("");
  const [duration, setDuration] = useState([]);
  const [show1, setShow1] = useState(false);

  const k = useLocation();
  async function postData() {
    const url = "http://127.0.0.1:5000/recommendation";
    const data = { keywords: selectedTags, course_level: goal, duration };
    const response = await axios.post(url, { ...data });
    setData(response.data.recommendations);
  }

  useEffect(() => {
    if (k.state) {
      setSelectedTags(k.state.keywords);
      setGoal(k.state.skillLevel);
      setDuration(k.state.duration);
    }
  }, [k?.state]);

  useEffect(() => {
    postData();
  }, [selectedTags, goal, duration]);

  return (
    <div className="container mt-4 d-flex flex-row flex-wrap justify-center items-center mx-auto gap-x-4 gap-y-6">
      <div>
        <h2>Filters</h2>
      </div>
      {data && data?.map((item, i) => <Courses key={i} courseData={item} />)}
    </div>
  );
}

export default Home;
