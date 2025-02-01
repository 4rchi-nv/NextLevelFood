import classes from "./page.module.css";
import ImagePicker from '../../../components/ImagePicker';
import handleForm from "@/helpers/handleForm";
export default function ShareMealPage() {
    const handleSubmit = async (event) => {
        event.preventDefault(); // Предотвращаем перезагрузку страницы
        const formData = new FormData(event.target);
        const formDataObj = handleForm(formData);
        console.log("Отправка формы:", formDataObj); 
        try{
            const response = await fetch('/api/share-meal', {
                method: 'POST',
                body: JSON.stringify(formDataObj),
                headers: {
                    'Content-Type': 'application/json'
                }})
            if(response.ok){
                console.log(await response.json())
            }
            console.log('Data is successfully submitted and posted')
        }catch(error){
            console.error('Failed to post data from Form', error)
        }
      };
    return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.row}>
            <p>
              <label htmlFor="creator">Your name</label>
              <input type="text" id="name" defaultValue='mwegene242@gmail.com' name="creator" required />
            </p>
            <p>
              <label htmlFor="creator_email">Your email</label>
              <input type="email" id="email" defaultValue='mwegene242@gmail.com' name="creator_email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" defaultValue='mwegene242@gmail.com' name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" defaultValue='mwegene242@gmail.com' name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions" defaultValue='mwegene242@gmail.com'
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker />
        {/* {image && <img src={image} alt="Uploaded" style={{ maxWidth: "300px", marginTop: "10px" }} />} */}
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}
