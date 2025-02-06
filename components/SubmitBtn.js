import { useFormStatus } from 'react-dom'
export default function SubmitBtn(){
    const { pending, data, method, action } = useFormStatus();
    return <button disabled={pending} type="submit">Share Meal</button>

}