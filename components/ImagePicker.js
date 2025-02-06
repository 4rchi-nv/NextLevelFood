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
  function handleChange(event) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const fileReader = new FileReader();

    fileReader.onload = function () {
      setImageUrl(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!imageUrl && <p>No image selected yet</p>}
          {imageUrl && <Image src={imageUrl} alt="User selected img" fill />}
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
