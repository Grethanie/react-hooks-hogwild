import React, { useState } from "react";

export default function Hog({ hog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <h1>{hog.name}</h1>
      <img
        onClick={() => {
          console.log("clicked");
          setShowDetails(!showDetails);
        }}
        src={hog.image}
        alt={hog.name}
      />
      {showDetails && (
        <div>
          <body>specialty: {hog.specialty}</body>
          <body>greased: {hog.greased ? "yes" : "no"}</body>
          <body>weight: {hog.weight}</body>
          <body>highest medal achieved: {hog["highest medal achieved"]}</body>
        </div>
      )}
    </>
  );
}
