import { Link } from "react-router-dom";

function NavBar() {

  return (
    <div>
      <nav>
        <Link to="/users">Users</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/topics">Topics</Link>
      </nav>
    </div>
  );
}
export default NavBar;
