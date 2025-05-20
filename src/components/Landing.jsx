import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <section>
        <h2>Welcome to Truthy News™</h2>
        <p>Where every headline is == true and falsy opinions get downvoted.</p>
      </section>
      <section>
        <Link to="/users">
          <button>Choose Existing User</button>
        </Link>
        <Link to="/articles">
          <button>Continue as Guest</button>
        </Link>
      </section>
    </div>
  );
}

export default Landing;
