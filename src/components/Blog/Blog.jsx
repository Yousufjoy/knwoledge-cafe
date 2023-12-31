import React from "react";

const Blog = ({ blog, handleBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 ">
      <img className="w-full mb-8" src={cover} alt="" />
      <div className="flex justify-between mb-4">
        <div className="flex gap-6">
          <img style={{ width: "60px" }} src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            className="ml-2 text-red-600 2xl"
            onClick={() => {
              handleBookmark(blog.title);
            }}
          >
            Bookmark
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => {
          return (
            <span key={idx}>
              <a href="#"> #{hash} </a>
            </span>
          );
        })}
      </p>
      <button
        className="text-purple-600 font-bold underline"
        onClick={() => {
          handleMarkAsRead(reading_time, id);
        }}
      >
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
