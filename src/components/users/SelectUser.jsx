import { useState, useEffect, useContext } from "react";
import { getAllUsers } from "../../Api";
import UserCard from "./UserCard"
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

function SelectUser() {
  const [users, setUsers] = useState([]);
  const [isLoadingUsers, setisLoadingUsers] = useState(true);
  const [error, setError] = useState(null);
  const {user, setUser} = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    getAllUsers()
      .then((res) => {
        setUsers(res.data.users);
        setisLoadingUsers(false);
      })
      .catch((err) => {
        setisLoadingUsers(false);
        setError(err);
      });
  }, []);

  function clickGuest() {
    setUser(null);
    navigate("/articles");
  }

  if (isLoadingUsers) {
    return <p>Loading users..</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <section>
      <h2>Select Your User</h2>
      {user && <p>Currently selected: {user.username}</p>}
      {users.map((user) => (
        <UserCard key={user.username} user={user} />
      ))}
      </section>
      <div>
       <button onClick={clickGuest}>Continue As Guest</button>
      </div>
    </div>
  );
}

export default SelectUser;
