import React, { useContext } from "react";
import { RiDeleteBin5Line, RiEdit2Line } from "react-icons/ri";
import { notecontext } from "../context/NoteState";
function NoteItem(props) {
  const{changeMode}=useContext(notecontext)

  const context = useContext(notecontext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <>
      <div className="col-md-3">
        <div className="card my-3">
          <div style={changeMode} className="card-body">
            <div className="d-flex align-items-center">
              <h5 className="card-title">{note.title}</h5>
              <RiDeleteBin5Line
                className="far fa-trash-alt mx-2"
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("Deleted Successfully", "success");
                }}
              ></RiDeleteBin5Line>
              <RiEdit2Line
                className="far fa-edit mx-2"
                onClick={() => {
                  updateNote(note);
                }}
              ></RiEdit2Line>
            </div>
            <p className="card-text">{note.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoteItem;
