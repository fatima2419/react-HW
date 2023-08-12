import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
export default function Newcontext() {

    const [name,setName]=useState('fatima')
    const [age,setAge]=useState('')
    const [diesees,setDiesees]=useState('')
    const [medicine,setMedicine]=useState('')
    const [notes,setNotes]=useState('')
   
    const handlechangename =(e)=>{
        setName(e.target.value);
    } 
    const handlechangeAge =(e)=>{
        setAge(e.target.value);
    }
    const handlechangeDiesees =(e)=>{
        setDiesees(e.target.value);
    }
    const handlechangeMedicine =(e)=>{
        setMedicine(e.target.value);
    }
    const handlechangeNotes =(e)=>{
        setNotes(e.target.value);
    }
   
    const navigate=useNavigate(); 
  return (
    <div>
  <h3>Patient form</h3>
  <form >
        <div>
            <label>Name</label>
            <input type="text" name="name" onChange={handlechangename}
     />
        </div> 
        <div>
            <label>Age</label>
            <input type="number" name="Age" onChange={handlechangeAge}
      />
        </div>
        <div>
            <label>diesees</label>
            <input type="text" name="diesees" 
        />
        </div>
        <div>
            <label>medicine</label>
            <input type="text" name="medicine" 
        />
        </div>
        <div>
            <label>notes</label>
            <input type="text" name="notes" 
        />
        </div>
        
<button type="submit" onClick={()=>navigate("/Infopage")} >Submit</button>
        </form>
    </div>
  );
}

