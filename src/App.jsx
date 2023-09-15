import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookMarks] = useState([]);

  const handleBookmark = (blog) => {
    console.log("book mark");
  };
  return (
    <>
      <Header />
      <div className="md:flex max-w-7xl mx-auto ">
        <Blogs handleBookmark={handleBookmark} />
        <Bookmarks />
      </div>
    </>
  );
}

export default App;
