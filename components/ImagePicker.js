'use client'
import { useRef } from "react";
import classes from "./ImagePicker.module.css";
export default function ImagePicker() {
  const imageRef = useRef();
  function handleImage(){
    imageRef.current.click();
    console.dir(imageRef.current)
  };
  return (
    <div className={classes.picker}>
      <label htmlFor="image">Image</label>
      <div className={classes.controls}>
        <input
          ref={imageRef}
          className={classes.input}
          type="file"
          id="image"
          name="image"
          accept=".jpg,.jpeg,.png"
        />
        <button onClick={()=>handleImage()} className={classes.button} type="button">
          Pick Image
        </button>
      </div>
    </div>
  );
}
