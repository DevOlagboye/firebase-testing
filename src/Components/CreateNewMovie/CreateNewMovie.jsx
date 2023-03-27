import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Login/firebaseConfig";

const CreateNewMovie = ({ moviesFunc }) => {
  const moviesCollectionRef = collection(db, "movies");
  //New Movies State
  const [newMovieTitle, setnewMovieTitle] = useState("");
  const [newMovieMainActor, setNewMovieMainActor] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState(0);
  const [isNewMovieOscar, setIsNewMovieOscar] = useState(false);
  const onSubmitMovie = async () => {
    try {
      await addDoc(moviesCollectionRef, {
        title: newMovieTitle,
        releaseDate: newReleaseDate,
        receivedAnOscar: isNewMovieOscar,
        actor: newMovieMainActor,
      });
    } catch (err) {
      console.error(err);
    }
  };

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
        <button onClick={onSubmitMovie}>Submit Movie</button>
      </div>
    </>
  );
};

export default CreateNewMovie;
