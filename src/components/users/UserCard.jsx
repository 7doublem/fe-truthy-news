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
    <div>
      <img
        src={user.avatar_url}
        alt={user.name}
        width={100}
        height={100}
        onClick={clickUsername}
      />
      <button onClick={clickUsername}>{user.username}</button>
    </div>
  );
}

export default UserCard;
