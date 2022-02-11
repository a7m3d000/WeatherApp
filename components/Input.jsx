import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

function Input({ onInput }) {
  const [inputText, setInputText] = useState();
  const [placeholder, setPlaceholder] = useState("أخل اسم البلد أو المنطقة...");

  return (
    <form className="hstack gap-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control me-auto"
        placeholder={placeholder}
        value={inputText || ""}
        onChange={handleInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button type="submit">ابحث</button>

      <style jsx>{`
        input {
          height: 50px;
          border-radius: 10px;
          color: var(--input-color);
          font-weight: 500;
          font-size: 1.1em;
          direction: rtl;
        }

        input:focus-visible {
          color: var(--input-color);
          font-weight: 500;
          font-size: 1.1em;
        }

        input:focus {
          box-shadow: 0 0 0 0.25rem var(--input-shadow-color);
        }

        input::placeholder {
          color: var(--input-placeholder-color);
          font-weight: 500;
          opacity: 0.7;
        }

        button {
          padding: 0.60em 1.3em;
          background-color: var(--search-btn-background-color);
          color: #fff;
          font-weight: 500;
          border: 5px solid var(--search-btn-border-color);
          background-color: var(--search-btn-background-color);
          border-radius: 12px;
          transition: 0.5s;
        }

        button:hover {
          color: #fff;
          background-color: var(--btn-hover-color);
        }

        button:focus {
          box-shadow: 0 0 0 0.25rem var(--search-btn-shadow-color);
        }
      `}</style>
    </form>
  );

  function handleFocus() {
    setPlaceholder("");
  }

  function handleBlur() {
    setPlaceholder("أخل اسم البلد أو المنطقة...");
  }

  function handleInput(event) {
    setInputText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&units=metric&appid=5a60c3e5c70d9f4ad304b2b115b3bf72&lang=ar`
      )
      .then((response) => {
        onInput(response.data);
      })
      .catch((error) => {
        console.log(error);
        onInput(0);
      });

    setInputText("");
  }
}

Input.propTypes = {
  onInput: PropTypes.func.isRequired,
};

export default Input;
