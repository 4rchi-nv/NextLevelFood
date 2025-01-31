import { slugFormator } from "./slugFormator";
export default function handleForm(formData){
    const arrOfKeys = formData.keys();
    const data = {};
    for (const key of arrOfKeys){
        if(key === 'image'){
            data[key] = URL.createObjectURL(formData.get(key));
            continue;
        }
        data[key] = formData.get(key);
        if(key === 'title'){
            data.slug = slugFormator(data[key]);
        }
    } 
    return data;
}