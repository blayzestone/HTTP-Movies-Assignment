import React from "react";

const UpdateMovieForm = (props) => {
  return (
    <form
      style={{
        width: "60%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" />
      <label htmlFor="director">Director:</label>
      <input type="text" id="director" name="director" />
      <label htmlFor="metascore">Metascore:</label>
      <input type="text" id="metascore" name="metascore" />
      <label htmlFor="stars">Stars:</label>
      <input type="text" id="stars" name="stars" />
    </form>
  );
};

export default UpdateMovieForm;
