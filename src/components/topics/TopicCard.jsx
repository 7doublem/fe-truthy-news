import { Link } from "react-router-dom";

function TopicCard({ topic }) {
  return (
    <div>
        <Link to={`/articles?topic=${topic.slug}`}>{topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}</Link>
        <img src={topic.img_url} alt={topic.description}/>
        <p>{topic.description}</p>
    </div>
  )
}

export default TopicCard;
