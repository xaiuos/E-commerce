import React from "react";
import "./NewsLetter.css";
import SendIcon from "@mui/icons-material/Send";
const NewsLetter = () => {
  return (
    <>
      <div className="NewsLetterContainer">
        <h1 className="NewsLetterTitle"> Newsletter</h1>
        <div className="NewsLetterDescription">
          Get timely updates from your favorite products.
        </div>
        <div className="NewsLetterInputContainer">
          <input placeholder="Your Email" type="text" />
          <button>
            <SendIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
