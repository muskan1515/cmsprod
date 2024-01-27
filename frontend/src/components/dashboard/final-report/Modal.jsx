import React, { useState } from "react";

// import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
<<<<<<< HEAD
  console.log("mmodal");
=======
>>>>>>> e7ba3c542ab29145348e485beeeecbd1ad55ff36
  const [formState, setFormState] = useState(
    defaultValue || {
      page: "",
      description: "",
      status: "live",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.page && formState.description && formState.status) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
<<<<<<< HEAD
      className="modal-container" style={{}}
=======
      className="modal-container"
>>>>>>> e7ba3c542ab29145348e485beeeecbd1ad55ff36
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
<<<<<<< HEAD
      <h1>hello</h1>
=======
>>>>>>> e7ba3c542ab29145348e485beeeecbd1ad55ff36
        <form>
          <div className="form-group">
            <label htmlFor="page">Page</label>
            <input name="page" onChange={handleChange} value={formState.page} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              onChange={handleChange}
              value={formState.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              onChange={handleChange}
              value={formState.status}
            >
              <option value="live">Live</option>
              <option value="draft">Draft</option>
              <option value="error">Error</option>
            </select>
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
