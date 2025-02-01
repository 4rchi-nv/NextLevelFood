"use client";
import { useRef, useState } from "react";
import classes from "./ImagePicker.module.css";
import Image from "next/image";

export default function ImagePicker({ label }) {
  const imageRef = useRef();
  const [imageUrl, setImageUrl] = useState();
  function handleImage() {
    imageRef.current.click();
  }

  function handleChange(e) {
    const file = e.target.files[0];

    if (!file) {
      return;
    }
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImageUrl(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!imageUrl && <p>No image selected yet.</p>}
          {imageUrl && <Image src={imageUrl} alt="Image picked by user" fill />}
        </div>
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
