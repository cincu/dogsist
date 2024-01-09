import React, { useEffect } from "react";
import $ from "jquery";

function Textroll() {
  useEffect(() => {
    let animationInterval;

    const fontFlake = () => {
      const stageWidth = window.innerWidth;
      const stageHeight = window.innerHeight;
      const items = [
        "SoKö",
        "street dog",
        "feral",
        "urban dog",
        "free-roaming",
        "abandoned",
        "unowned",
        "lost",
        "wandering",
        "free",
        "Stray canines",
        "Wild dogs",
        "Nomadic",
      ];
      const text = items[Math.floor(Math.random() * items.length)];
      const randomEntry = Math.ceil(Math.random() * stageWidth);
      const preRandomFontSize = Math.ceil(Math.random() * 30);
      const randomFontSize = preRandomFontSize + 10;
      const flakeName = "flake-" + randomEntry;
      const grayScale = Math.ceil(Math.random() * 256);
      const hue = `rgb(${grayScale},${grayScale},${grayScale})`;

      $("<div />", {
        text: text,
        id: flakeName,
      })
        .appendTo("#fallingtext")
        .addClass("fontFlake")
        .css("left", randomEntry)
        .css("fontSize", randomFontSize)
        .css("color", hue)
        .animate(
          {
            top: `+=${stageHeight}`,
            opacity: 0,
          },
          10000,
          function () {
            $("#" + flakeName).remove();
          }
        );
    };

    const callFontFlakes = () => {
      animationInterval = setInterval(function () {
        fontFlake();
      }, 200); // Adjust the interval to control the falling speed.
    };

    callFontFlakes();

    setTimeout(() => {
      clearInterval(animationInterval);
    }, 10000); // End the animation after 10 seconds

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className="container">
      <div id="fallingtext" />
    </div>
  );
}

export default Textroll;
