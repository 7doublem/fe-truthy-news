import NavBar from "../navigation/NavBar";
import { useEffect, useState } from "react";
import { getAllTopics } from "../../Api";
import TopicCard from "./TopicCard";

function Topics() {
  const [topics, setTopics] = useState([]);
  const [isLoadingTopics, setIsLoadingTopics] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllTopics().then((res) => {
        setTopics(res.data.topics)
        setIsLoadingTopics(false)
    }).catch((err) => {
        setisLoadingTopics(false);
        setError(err);
      });
  }, []);

  if (isLoadingTopics) {
    return <p>Loading topics..</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
    <NavBar />
    <h2>Topics</h2>
    {topics.map((topic) => (
        <TopicCard key ={topic.slug} topic={topic} />
    ))}
    </div>
  )
}

export default Topics;