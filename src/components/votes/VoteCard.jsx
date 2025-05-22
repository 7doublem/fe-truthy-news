import thumbsUp from "../../votesIcons/thumbsUp.svg";
import thumbsDown from "../../votesIcons/thumbsDown.svg";
import { useState } from "react";
import { patchArticleById, patchCommentById } from "../../Api";

function VoteCard({ initialVotes, id, type }) {
  const [votes, setVotes] = useState(initialVotes);
  const [hasVoted, setHasVoted] = useState(false);
  const [error, setError] = useState(null);

  const handleUpdateVotes = (increment) => {
    if (hasVoted) return;

    setVotes((prev) => prev + increment);
    setHasVoted(true);
    setError(null);

    const patchDecider =
      type === "comment"
        ? () => patchCommentById(id, increment)
        : () => patchArticleById(id, increment);

    patchDecider().catch(() => {
      setVotes((prev) => prev - increment);
      setHasVoted(false);
      setError("Vote did not register. Please try again.");
    });
  };

  return (
    <div>
      <p>Votes: {votes}</p>
      <button onClick={() => handleUpdateVotes(1)} disabled={hasVoted}>
        <img src={thumbsUp} alt="Thumbs Up" width={24} height={24} />
      </button>
      <button onClick={() => handleUpdateVotes(-1)} disabled={hasVoted}>
        <img src={thumbsDown} alt="Thumbs Down" width={24} height={24} />
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default VoteCard;
