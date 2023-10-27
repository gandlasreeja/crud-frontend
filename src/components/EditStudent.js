import { useParams } from "react-router-dom";
import StudentForm from "./StudentForm";
import { useEffect, useState } from "react";
import  Axios from "axios";

function EditStudent(){

const [newData,setNewData]=useState([]);

    const {id}=useParams();
const [initialValue,setInitialValue]=useState({name:"",email:""});
    useEffect(()=>{
        Axios.get("https://crud-deployment-backend-05r4.onrender.com/studentRoute/update-student/"+id)

        .then((res)=>{
            if(res.status === 200){
              const {name,email}=res.data;
              setInitialValue({name,email});
            }
            else
              Promise.reject();
        })
        .catch((err)=>{
            alert(err);
        })
    },[id])

const getState=(childData)=>{
    setNewData(childData);
}

const handleSubmit=()=>{
    const data={name:newData[0],email:newData[1]};
    Axios.put("https://crud-deployment-backend-05r4.onrender.com/studentRoute/update-student/"+id,data)
.then((res)=>{
    if(res.status === 200)
        alert("record updated successfully");
    else
      Promise.reject();
})
.catch((err)=>{
    alert(err);
})
}
    return(
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState}
                        nameValue={initialValue.name}
                        emailValue={initialValue.email}>update Student</StudentForm>
        </form>
    )
}

export default EditStudent;