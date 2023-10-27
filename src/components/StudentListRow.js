import {Link} from 'react-router-dom';
import Axios from "axios";
function StudentListRow(props){

const  {_id,name,email}=props.obj;

const handleClick=()=>{
    Axios.delete("https://crud-deployment-backend-05r4.onrender.com/studentRoute/delete-student/"+_id)

    .then((res)=>{
        if(res.status===200){
            alert("record deleted successfully");

            window.location.reload();
        }
        else
           Promise.reject();
    })
    .catch((err)=>alert(err));
}

return(
    <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td className='d-flex justify-content-center'>
        <Link to={"/edit-student/"+ _id} className='text-decoration-none text-light me-2' >
        <button className="btn btn-success">Edit</button>
        </Link>
        <button onClick={handleClick} className="btn btn-danger">delete</button></td>
    </tr>
)
}
export default StudentListRow;