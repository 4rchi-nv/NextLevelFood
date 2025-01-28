"use client";
import { useRef } from "react";
import classes from "./ImagePicker.module.css";

export default function ImagePicker({ label }) {
  const imageRef = useRef();
  function handleImage() {
    imageRef.current.click();
  }
  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <input
          ref={imageRef}
          type="file"
          id="image"
          name="image"
          accept=".jpg,.jpeg,.png"
          className={classes.input}
          
        />
        <button onClick={handleImage} className={classes.button} type="button">
          Pick Image
        </button>
      </div>
    </div>
  );
}
