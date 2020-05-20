import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { useForm } from "../hooks/useForm";

const UpdateMovieForm = (props) => {
  const initialFormValues = {
    title: "",
    director: "",
    metascore: "",
    stars: [],
  };

  const [formValues, setFormValues, updateFormValues] = useForm(
    initialFormValues
  );
  const { id } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => {
        updateFormValues(res.data);
      })
      .catch((err) => console.log(err.response));
  }, []);

  const submitEdit = (evt) => {
    evt.preventDefault();

    axios
      .put(`http://localhost:5000/api/movies/${id}`, formValues)
      .then((res) => {
        updateFormValues(initialFormValues);
        console.log(res.data);
        props.setFetching(true);
        push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form
      onSubmit={submitEdit}
      style={{
        width: "60%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formValues.title}
        onChange={setFormValues}
      />
      <label htmlFor="director">Director:</label>
      <input
        type="text"
        id="director"
        name="director"
        value={formValues.director}
        onChange={setFormValues}
      />
      <label htmlFor="metascore">Metascore:</label>
      <input
        type="text"
        id="metascore"
        name="metascore"
        value={formValues.metascore}
        onChange={setFormValues}
      />
      <label htmlFor="stars">Stars:</label>
      <input
        type="text"
        id="stars"
        name="stars"
        value={formValues.stars}
        onChange={setFormValues}
      />
      <button>Submit</button>
    </form>
  );
};

export default UpdateMovieForm;
