import React from 'react'
import Notes from './Notes';
import { useState } from 'react';
import Modal from './Modal';

export default function Form() {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const [notes, setNotes] = useState(getNotesFromLs);
    const [editid, seteditid]=useState("");
    <Modal editid={editid} notes={notes} setNotes={setNotes}/>
    localStorage.setItem("notes",JSON.stringify(notes));
    console.log(notes);
    const inputHandler = (e) => {
        if (e.target.id === "title") {
            settitle(e.target.value);
        }
        else {
            setdesc(e.target.value);
        }
    }

    const addNotesHandler = (e) => {
        e.preventDefault();
        if(title!=="" && desc!==""){
            setNotes((note) => {
                return (
                    [...note, {
                        title: title,
                        desc: desc,
                        id:new Date().getTime()
                    }]
                )
            })
        }
        settitle("");
        setdesc("");
    }
    return (
        <>
            <div className="container my-3">
                <div className="row justify-content-center">
                    <div className="col-md-10" >
                        <form style={{ border: "2px solid #ced4da", borderRadius: "10px", padding: "30px", backgroundColor:"aqua" }}>
                            <div className="mb-3" >
                                <label for="exampleInputEmail1" className="form-label">Title</label>
                                <input type="text" className="form-control" id="title" placeholder='Enter your Title' value={title} onChange={inputHandler} />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Description</label>
                                <textarea name="desc" id="desc" rows="3" className="form-control" placeholder='Enter your description' value={desc} onChange={inputHandler}></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" onClick={addNotesHandler}>Add Notes</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="conatainer">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                    <h2 className="mb-3">Your Notes</h2>
                        {
                            notes.length===0?<div className="card-mb-3">
                            <div className="card-body">
                             {/* <h5 className='card-title'>Message</h5> */}
                             <p className='card-text'>No notes are available</p> 
                            </div>   
                            </div>:notes.map((element)=>{
                              return(
                                <Notes element={element} key={element.id} notes={notes} setNotes={setNotes} seteditid={seteditid}/>
                              )
                            })
                        } 
                    </div>
                
               </div>
      </div>
        </>
    )
    function getNotesFromLs(){
        const note=JSON.parse(localStorage.getItem("notes"));
        if(note){
            return note;
        }
        else{
            return [];
        }
    }
}
