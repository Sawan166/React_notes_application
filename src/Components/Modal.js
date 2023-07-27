import React from 'react';

export default function Modal({editid, notes, setNotes}) {
  const updateHandler=()=>{
    notes.map((elem)=>{
       if(editid===elem.id){
        [{...elem, title:document.getElementById("edittitle").value,
        desc:document.getElementById("editdesc").value}]
      }
    })
  }
  return (
    <>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Notes</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form style={{ border: "2px solid #ced4da", borderRadius: "10px", padding: "30px" }}>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Title</label>
                  <input type="email" className="form-control" id="edittitle" placeholder='Enter your Title' />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Description</label>
                  <textarea name="desc" id="editdesc" rows="3" className="form-control" placeholder='Enter your description'></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{updateHandler()}}>Edit Notes</button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
