import React, { useState } from "react";
import Note from "./Note";
import "./NotePage.css";

function NoteContainer(props) {
  const [filtered, setFiltered] = useState(false);
  const [fill, setFill] = useState("none");
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
      <div className="title">Messaging</div>
      <div>
        <div className="add">
          <div>
            <div onClick={() => setFiltered(!filtered)}>
              <span>Filter :  {filtered ? "ON":"OFF"}</span>
            </div>
            {filtered && (
              <select
                onChange={(e) => {
                  setFill(e.target.value);
                }}
              >
                <option>none</option>
                <option>Good Mood</option>
                <option>Pain</option>
                <option>Career</option>
                <option>Family</option>
              </select>
            )}
          </div>
          <div>
          <div className="empty">
        {(notes.length<1)? "Add a note": ""}
        </div>
            {<button
              style={{
                backgroundColor: "black",
                fontSize: "1.3rem",
                color: "white",
                cursor: "pointer"
              }}
              onClick={() => {props.addNote(); setFiltered(false)}} 
            >
              {" "}
              🗏{" "}
            </button>}
          </div>
        </div>
        <div className="filterTitle"> {filtered && <h2>{fill}</h2>}</div>
      </div>

      <div className="pageNotes">
        
        {!filtered &&
          notes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
              category={props.category}
            />
          ))}

        {filtered &&
          notes
            .filter((item) => item.cate.toLowerCase() === fill.toLowerCase())
            .map((item) => (
              <Note
                key={item.id}
                note={item}
                deleteNote={props.deleteNote}
                updateText={props.updateText}
                category={props.category}
                filter = {filtered}
              />
            ))}
      </div>
    </div>
  );
}

export default NoteContainer;
