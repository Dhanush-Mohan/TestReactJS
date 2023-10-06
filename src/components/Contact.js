import {useEffect, useState} from "react";

function Contact()
{
    const [name,setName] = useState("Dhanush");
    useEffect(()=>{
        Axios.get(url)
        .then()
        .catch()
    },[])
    return(
        <div>
            <h1>The owner of this page is {name}</h1>
            <button onClick={() =>{setName("Nishit")}}>Change owner</button>
        </div>
    )

}
export default Contact;