import React, { useState, useEffect } from "react";

function Result(props) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${props.name}`
        );
        const data = await res.json();
        setUrl(data.meals[0].strMealThumb);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props.name]);

  return (
    <div>
      <img src={url} alt="Image" />
    </div>
  );
}

export default Result;
