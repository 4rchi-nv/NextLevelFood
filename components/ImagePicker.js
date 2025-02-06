"use client";
import { useRef } from "react";
import classes from "./ImagePicker.module.css";
import { useState } from "react";
import Image from "next/image";
export default function ImagePicker({ label }) {
  const [imageUrl, setImageUrl] = useState();
  const imageRef = useRef();
  function handleImage() {
    imageRef.current.click();
  }
  function handleChange(event) {
    const file = event.target.files[0];
    if(!file){
      return;
    }
    const fileReader = new FileReader();

    fileReader.onload = function() {
      setImageUrl(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        {!imageUrl && <p>No image picked yet.</p>}
        {imageUrl && <div className={classes.preview}>
        <Image src={imageUrl} alt='image picked by user' fill />
        </div>}
        <input
          ref={imageRef}
          type="file"
          id="image"
          name="image"
          accept=".jpg,.jpeg,.png"
          className={classes.input}
          onChange={handleChange}
        />
        <button onClick={handleImage} className={classes.button} type="button">
          Pick Image
        </button>
      </div>
    </div>
  );
}
