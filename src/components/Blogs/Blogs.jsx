import React, { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookmark, handleMarkAsRead }) => {
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
      {blogs.map((blog, indx) => {
        return (
          <Blog
            key={indx}
            blog={blog}
            handleBookmark={handleBookmark}
            handleMarkAsRead={handleMarkAsRead}
          />
        );
      })}
    </div>
  );
};

export default Blogs;
