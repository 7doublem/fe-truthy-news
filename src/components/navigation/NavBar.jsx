import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";

function NavBar() {
  const { user } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="user-info">
        {user ? (
          <img src={user.avatar_url} alt="User Avatar" width={32} height={32} />
        ) : (
          <p>Guest</p>
        )}
      </div>
      <div className="menu-container">
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {menuOpen && (
        <nav className="dropdown-menu">
            <Link to="/users">Users</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/topics">Topics</Link>
        </nav>
      )}
       </div>
    </div>
  );
}
export default NavBar;
