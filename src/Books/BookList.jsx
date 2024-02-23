import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./BookList.css";

function BookList() {
  const [bookData, setBookData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showWelcomeMessage,setShowWelcomeMessage] = useState(false);
  const [userName, setUserName] = useState('');
  const location = useLocation();
  // fetching data
  const getData = () => {
    axios
      .get(`https://reactnd-books-api.udacity.com/books`, {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => setBookData(res.data.books))
      .catch((err) => {
        console.warn(err,"Error");
      });
  };
  useEffect(() => {
    getData();
    const {showWelcomeMessage,userName} = location.state || {};
    setShowWelcomeMessage(showWelcomeMessage);
    setUserName(userName);
    const timer = setTimeout(() => {
      setShowWelcomeMessage(false);
    },5000)

  }, []);
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };
  // getting filtered data
  const filteredBooks = bookData.filter((book) =>
    book.title.toLowerCase().startsWith(searchText.toLowerCase())
  );
  return (
    <div className="main-container">
      <div className="welcomeMessage">
        {showWelcomeMessage && <h1>Welcome,{userName}</h1>}
      </div>
      <div className="top-container">
        <div className="logo">
          <img
            src="https://kalvium.community/images/sidebar-3d-logo.svg"
            alt=""
          />
          <p>Kalvium Books</p> 
        </div>
        <div>
          <input
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Search book by title"
            className="searchBar"
          />
        </div>
        <div>
          <Link to="/register">
            <button className="register-button">Register</button>
          </Link>
        </div>
      </div>
      {/* card container */}
        <div className="bottom-container">
          {filteredBooks.map((el, i) => (
            <div key={i} className="card">
                <div className="img-container">
                    <img src={el.imageLinks.smallThumbnail} alt="" />
                </div>
              <h3>{el.title}</h3>
              <h4>Published - {el.publishedDate}</h4>
              <h4>☆ Rating - {el.averageRating}</h4>
              <h4>Free</h4>
            </div>
          ))}
        </div>
    </div>
  );
}
export default BookList;
