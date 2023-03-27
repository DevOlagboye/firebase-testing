import React, { useState } from "react";

const CreateNewMovie = () => {
  //New Movies State
  const [newMovieTitle, setnewMovieTitle] = useState("");
  const [newMovieMainActor, setNewMovieMainActor] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState(0);
  const [isNewMovieOscar, setIsNewMovieOscar] = useState(false);

  return (
    <>
      <div>
        <h3>Create New Movie</h3>
        <h5>Movie Title: </h5>
        <input
          type="text"
          placeholder="Movie Title"
          onChange={(e) => setnewMovieTitle(e.target.value)}
        />
        <h5>Release Year: </h5>
        <input
          type="number"
          placeholder="Release Year"
          onChange={(e) => setNewReleaseDate(Number(e.target.value))}
        />
        <h5>Main Actor: </h5>
        <input
          type="text"
          placeholder="Main Actor"
          onChange={(e) => setNewMovieMainActor(e.target.value)}
        />
        <label htmlFor="receivedOscar">Received an Oscar</label>
        <input
          type="checkbox"
          id="receivedOscar"
          checked={isNewMovieOscar}
          onChange={(e) => setIsNewMovieOscar(e.target.checked)}
        />
        <button>Submit Movie</button>
      </div>
    </>
  );
};

export default CreateNewMovie;
