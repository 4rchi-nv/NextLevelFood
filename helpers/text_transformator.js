export default function TextTransformator(text) {
    // return text.replace(/\n/g, "<br/>");
    const arr = text.split('\n');
    console.log(1111,arr)
    return (<p>
     {arr.map((item)=>{
        console.log(item)
        return <>
        <pre key={Math.random()}>{item}</pre>
        </>
     })}
    </p>) 
}