import React, { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useState(() => {
    fetch("blogs.json").then((res) =>
      res.json().then((data) => {
        setBlogs(data);
      })
    );
  }, []);

  return (
    <div className="md: w-2/3">
      {blogs.map((blog) => {
        return <Blog blog={blog} />;
      })}
    </div>
  );
};

export default Blogs;
