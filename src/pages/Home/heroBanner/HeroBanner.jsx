import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const HeroBanner = () => {
  const navigate = useNavigate();
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");

  const searchinputHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <h1 className="title">Welcome</h1>
          <h3 className="subTitle">
            Millions of movies,TV shows and people to discover.Explore Now..
          </h3>
          <div className="serchInput">
            <input
              type="text"
              placeholder="Search for Movie/Tv Show..."
              onKeyUp={searchinputHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
