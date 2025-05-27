import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function UserCard({ user }) {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  function clickUsername() {
    setUser(user);
    navigate("/articles");
  }

  return (
    <div className="user-card">
      <strong>{user.name}</strong>
      <img
        src={user.avatar_url}
        alt={user.name}
        onClick={clickUsername}
      />
      <button onClick={clickUsername}>{user.username}</button>
    </div>
  );
}

export default UserCard;
