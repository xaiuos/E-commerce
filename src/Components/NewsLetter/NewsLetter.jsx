import React from "react";
import style from "./NewsLetter.module.css";
import SendIcon from "@mui/icons-material/Send";
const NewsLetter = () => {
  return (
    <>
      <div className={style.NewsLetterContainer}>
        <h1 className={style.NewsLetterTitle}> Newsletter</h1>
        <p className={style.NewsLetterDescription}>
          Get timely updates from your favorite products.
        </p>
        <div className={style.NewsLetterInputContainer}>
          <input id="Newsletter" placeholder="Your Email" type="text" />
          <button>
            <SendIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
