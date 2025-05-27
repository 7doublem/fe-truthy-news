import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";

function Header() {
  const location = useLocation();

  const hideNavBar = ["/", "/users"];
  const showNavBar = !hideNavBar.includes(location.pathname);

  return (
    <div>
      <header>
        <h1>Truthy News</h1>
        {showNavBar && <NavBar />}
      </header>
    </div>
  );
}

export default Header;
