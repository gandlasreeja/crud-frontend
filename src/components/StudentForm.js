import { useEffect, useState } from "react";

function StudentForm(props){

    const [name,setName]=useState(props.nameValue);
    const [email,setEmail]=useState(props.emailValue);

    const arr=[name,email];
const handleClick=()=>{
    props.getState(arr);
}
useEffect(()=>{
    setName(props.nameValue);
    setEmail(props.emailValue);
},[props.nameValue,props.emailValue]);

    return (
        <div style={{maxWidth:"40%",margin:"0px auto"}}>
            <input defaultValue={props.nameValue} onChange={(event)=>setName(event.target.value)} class="form-control my-3" placeholder="Enter your name"/>
            <input defaultValue={props.emailValue} onChange={(event)=>setEmail(event.target.value)} class="form-control my-3" placeholder="Enter your email"/>
            <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">{props.children}</button>

        </div>
    )
}
export default StudentForm;