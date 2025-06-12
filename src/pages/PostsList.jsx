import axios from "axios";
import { useEffect, useState } from "react";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts")
      .then((resp) => {
        setPosts(resp.data);
      });
  }, []);

  return (
    <main>
      <div className="container">
        <h1>Vedi tutti i Post</h1>
        <div className="row row-cols-2 g-3">
          {posts.map((curPost) => (
            <div key={curPost.id} className="col">
              <div className="card">
                <div className="card-body">
                  <h4>
                    {curPost.id} - {curPost.title}
                  </h4>
                  <p>{curPost.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PostsList;