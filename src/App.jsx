import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = (blog) => {
    const newBookMark = [...bookmarks, blog];
    setBookMarks(newBookMark);
  };

  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);

    // Remove the read blog from bookmarks
    console.log(id);
    const remainingBookMarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookMarks(remainingBookMarks);
  };

  return (
    <>
      <Header />
      <div className="md:flex max-w-7xl mx-auto ">
        <Blogs
          handleBookmark={handleBookmark}
          handleMarkAsRead={handleMarkAsRead}
        />
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
      </div>
    </>
  );
}

export default App;
