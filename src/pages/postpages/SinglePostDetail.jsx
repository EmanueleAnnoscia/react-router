import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import BackButton from "../../components/BackButton";

const SinglePostDetail = () => {
  const { id } = useParams(); //impostare la rotta "dinamica"
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts/${id}`)
      .then((resp) => {
        setPost(resp.data);
      })
      .catch((error) => {
        if (error.status === 404) {
          navigate("/not-found");
        }
      });
  }, [id]);

  return (
    <main>
      <div className="container py-5">
        {post === null ? (
          <Loader />
        ) : (
          <>
            <div className="my-3">
              <BackButton />
            </div>
            <h1 className="text-center">{post.title}</h1>
            <div className="w-50 mx-auto">
              <p>{post.body}</p>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default SinglePostDetail;