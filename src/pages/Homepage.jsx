import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main className="container-fluid d-flex flex-column justify-content-center align-items-center min-vh-100">
            <h1 className="text-center mb-5">HOMEPAGE</h1>

            <div className="d-flex flex-column gap-4 w-100" style={{ maxWidth: "400px" }}>
                <Link className="btn btn-primary btn-lg w-100" to="/AboutUs">
                    Chi Siamo
                </Link>
                <Link className="btn btn-success btn-lg w-100" to="/CreatePost">
                    Crea un Nuovo Post
                </Link>
                <Link className="btn btn-danger btn-lg w-100" to="/PostsList">
                    Elenco dei Post
                </Link>
            </div>
        </main>
    );
};

export default Home;