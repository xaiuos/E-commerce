import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Slider.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SliderItems } from "../data/Data";
export const Slider = () => {
  const [slideIndexCounter, setSlideIndexCounter] = useState(0);
  const sliderHack = useRef(null);

  const slideClick = (side) => {
    if (side === "Right-Click") {
      setSlideIndexCounter((prev) => {
        return prev < SliderItems.length - 1 ? prev + 1 : 0;
      });
    } else if (side === "Left-Click") {
      setSlideIndexCounter((prev) => {
        return prev > 0 ? prev - 1 : SliderItems.length - 1;
      });
    }
  };

  useEffect(() => {
    const slider = sliderHack.current;
    if (!slider) return;
    let interval;
    const startPlaying = () => {
      interval = setInterval(() => {
        slideClick("Right-Click");
      }, 3000);
    };

    startPlaying();

    const stopPlaying = () => {
      clearInterval(interval);
    };
    slider.addEventListener("mouseenter", stopPlaying);
    slider.addEventListener("mouseleave", startPlaying);

    return () => {
      slider.removeEventListener("mouseenter", stopPlaying);
      slider.removeEventListener("mouseleave", startPlaying);
      clearInterval(interval);
    };
  }, [slideClick]);

  return (
    <>
      <div className="Slider">
        <div
          className="Wrapper"
          style={{ transform: `translateX(${slideIndexCounter * -100}vw)` }}
          ref={sliderHack}
        >
          {/* slide wraper start here */}
          {SliderItems.map((item) => {
            return (
              <div
                key={item.id}
                className="Container"
                style={{ backgroundColor: item.backgroundcolor }}
              >
                <div className="Image">
                  <img src={item.image} alt="" />
                </div>
                <div className="Image-Label">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <button className="Slider-Button">SHOW NOW</button>
                </div>
              </div>
            );
          })}
          {/* slide wraper end here */}
        </div>
        <div
          className="Arrow Left"
          onClick={() => {
            slideClick("Left-Click");
          }}
        >
          <ArrowLeftIcon />
        </div>

        <div
          className="Arrow Right"
          onClick={() => {
            slideClick("Right-Click");
          }}
        >
          <ArrowRightIcon />
        </div>
      </div>
    </>
  );
};
export default Slider;
