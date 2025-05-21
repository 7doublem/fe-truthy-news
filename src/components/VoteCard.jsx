import thumbsUp from "../votesIcons/thumbsUp.svg";
import thumbsDown from "../votesIcons/thumbsDown.svg";
import { useState } from "react";
import { patchArticleById, patchCommentById } from "../Api";

function VoteCard({ initialVotes, id, type }) {
  const [votes, setVotes] = useState(initialVotes);
  const [isVoting, setIsVoting] = useState(false);
  const [error, setError] = useState(null);

  const handleUpdateVotes = (increment) => {
    setVotes((prev) => prev + increment);
    setIsVoting(true);
    setError(null);

    const patchDecider =
      type === "comment"
        ? () => patchCommentById(id, increment)
        : () => patchArticleById(id, increment);

    patchDecider()
      .then(() => {
        setIsVoting(false);
      })
      .catch(() => {
        setVotes((prev) => prev - increment);
        setError("Vote did not register. Please try again.");
        setIsVoting(false);
      });
  };

  return (
    <div>
      <p>Votes: {votes}</p>
      <button onClick={() => handleUpdateVotes(1)} disabled={isVoting}>
        <img src={thumbsUp} alt="Thumbs Up" width={24} height={24} />
      </button>
      <button onClick={() => handleUpdateVotes(-1)} disabled={isVoting}>
        <img src={thumbsDown} alt="Thumbs Down" width={24} height={24} />
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default VoteCard;
