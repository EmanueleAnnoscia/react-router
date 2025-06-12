import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <h1>pagina HOME</h1>
        <Link className="btn btn-primary" to="/AboutUs">
          Chi Siamo
        </Link>
        <Link className="btn btn-warning" to="/CreatePost">
          Crea un Nuovo Post
        </Link>
        <Link className="btn btn-warning" to="/PostsList">
          Elenco dei Post
        </Link>
      </main>
    </>
  );
};

export default Home;