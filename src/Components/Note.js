import React from "react";
import "./Note.css";

function Note(props) {

  const updateText = (text, id) => {props.updateText(text, id)}
  const category = (cate , id) => {props.category(cate, id)}
  return (
    <div className="notes">
      <textarea
        className="text"
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}
      />
      <p>Enter category</p>
      <textarea type="text" onChange={(e) => category(e.target.value, props.note.id)} defaultValue="none"/>
      <div className="footer">
        <button onClick={() => props.deleteNote(props.note.id)}>Delete</button>
      </div>
    </div>
  );
}

export default Note;
