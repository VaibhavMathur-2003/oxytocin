import React, { useState } from "react";
import Note from "./Note";
import "./NotePage.css";

function NoteContainer(props) {
  const [filtered, setFiltered] = useState(false)
  const [fill, setFill] = useState("none")
  const notesArray = (arr) => {
    const array = [];
    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }
    return array;
  };

  const notes = notesArray(props.notes);

  return (
    <div className="page">
      <button onClick={() => props.addNote()}> Add Note + </button>
      <div>
        <h2 onClick={()=>setFiltered(!filtered)}>Filter(Click here to activate filter)</h2>
        {filtered && <select onChange={(e)=>{setFill(e.target.value)}}>
          <option>none</option>
          <option>Good Mood</option>
          <option>Pain</option>
          <option>Career</option>
          <option>Family</option>
        </select>}
      </div>
      <div className="pageNotes">
      {!filtered && notes.map((item) => (
          <Note
            key={item.id}
            note={item}
            deleteNote={props.deleteNote}
            updateText={props.updateText}
            category = {props.category}
          />
          ))}
        {filtered && notes.filter((item) => (item.cate.toLowerCase() === fill.toLowerCase())).map((item) => (
          <Note
            key={item.id}
            note={item}
            deleteNote={props.deleteNote}
            updateText={props.updateText}
            category = {props.category}
          />
          ))}
      </div>
      
    </div>
  );
}

export default NoteContainer;
