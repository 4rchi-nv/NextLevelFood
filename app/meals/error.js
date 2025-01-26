'use client';
export default function Error({error}) {  
    console.error(error);  
    return (
        <div className="error">
            <h1>Something went wrong</h1>
            <p>Sorry, we could not load the meals. Please try again later.</p>
        </div>
    );
}