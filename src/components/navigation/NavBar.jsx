import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function NavBar() {
  const { user } = useContext(UserContext);
  return (
    <div>
      {user ? (
        <img src={user.avatar_url} width={25} height={25} />
      ) : (
        <p>Guest</p>
      )}
      <nav>
        <Link to="/users">Users</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/topics">Topics</Link>
      </nav>
    </div>
  );
}
export default NavBar;
