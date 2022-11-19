import React from 'react'

export default function Post() {
    let delete1=()=>
    {
        let a=document.getElementById("Mybox");
        a.value="";
    }
    let  edit=()=>
    {
        let a=document.getElementById("Mybox");
        a.removeAttribute("readonly"); 
    }
    let save=()=>
    {
        let a=document.getElementById("Mybox");
        a.setAttribute("readonly", "readonly");
    }
    let create=()=>{
        let a=document.getElementById("Mybox");
        let b=document.getElementById("show");
        let c=document.createElement('textarea');
        c.value=a.value;
        b.appendChild(c);
    }
   
  return (
    <>
    <div className="container mb-3">
        <textarea className="form-control"  id="Mybox" rows="8"></textarea>
      </div>
      <div className="container ">
      <button className="btn btn-primary mx-1" onClick={edit}>Edit</button>
      <button className="btn btn-primary mx-1" onClick={save}>save</button>
      <button className="btn btn-primary mx-1" onClick={delete1}>Delete</button>
      <button className="btn btn-primary mx-1" onClick={create}>Create</button>
      </div>
      <div id="show" className="container"></div>
    </>
  )
}