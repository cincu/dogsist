import React, { useEffect } from "react";

const DogsMap = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://datawrapper.dwcdn.net/9uDhN/embed.js?v=2";
    script.async = true;
    script.defer = true;
    script.charset = "utf-8";

    // Append the script to the document body
    document.body.appendChild(script);

    return () => {
      // Remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <noscript>
        <img
          style={{ minHeight: "463px" }}
          src="https://datawrapper.dwcdn.net/9uDhN/full.png"
          alt=""
        />
      </noscript>
    </div>
  );
};

export default DogsMap;
