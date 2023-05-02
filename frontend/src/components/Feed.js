import React, { useEffect, useState } from "react";
import QueryBox from "./QueryBox";
import "./css/feed.css";
import Post from "./Post";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("/api/questions")
      .then((res) => {
        console.log(res.data.reverse());
        setPosts(res.data)
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="feed">
      <QueryBox />
      {
        posts.map((post, index) => (<Post key={index} post = {post}/>))
      }
    </div>
  );
};

export default Feed;
