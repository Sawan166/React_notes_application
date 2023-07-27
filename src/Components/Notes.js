import React from 'react'

export default function Notes({element, notes, setNotes, seteditid}) {
    const removeHandler=(id)=>{
         const newNotes=notes.filter((elem)=>{
            if(elem.id!==id){
                return elem;
            }
    })
    setNotes(newNotes);
    seteditid(id);
    }

    const editHandler=(id)=>{
        notes.filter((elem)=>{
            if(elem.id===id){
                document.getElementById("edittitle").value=elem.title;
                document.getElementById("editdesc").value=elem.desc;
            }
        })
    }
    return (
        <>
            <div className="card mx-3">
                <div className="card-body" style={{backgroundColor:"gray", textTransform:'capitalize'}}>
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text">{element.desc}</p>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Edit
                    </button>
                    <button className="btn btn-danger mx-2" onClick={()=>{
                        removeHandler(element.id)
                    }}>Delete</button>
                </div>
            </div>
        </>
    )
}
