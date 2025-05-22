import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TopicCard({ topic }) {
  return (
    <div>
        <Link to={`/topics/${topic.slug}`}>Topic: {topic.slug}</Link>
        <br />
        <img src={topic.img_url} alt={topic.description}/>
        <p>{topic.description}</p>
    </div>
  )
}

export default TopicCard;
