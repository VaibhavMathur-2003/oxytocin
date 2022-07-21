import React, { useEffect, useState } from "react";
import "./Note.css";

function Note(props) {
  const [color, setColor] = useState("")
  useEffect(()=>setColor(Math.random().toString(16).substr(-6)),[])
  const updateText = (text, id) => {
    props.updateText(text, id);
  };
  const category = (cate, id) => {
    props.category(cate, id);
  };
  return (
    <div className="notes" style={{backgroundColor:"#"+color}}>
      <textarea
        className="text"
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}
      />
      {!props.filter && (
        <input
          className="category"
          type="text"
          onChange={(e) => category(e.target.value, props.note.id)}
          defaultValue="Enter category"
        />
      )}
      <div className="footer">
        <div>
        <button
          style={{
            backgroundColor: "white",
            fontSize: ".7rem",
            color: "red",
            borderRadius: "10px",
            marginTop: "10px",
          }}
          onClick={() => props.deleteNote(props.note.id)}
        >
          🗑Del
        </button>
        </div>
        <div   className="showCategory">
        <input
        style={{objectFit:"contain"}}
        defaultValue={props.note.cate}
        disabled
      />
      </div>
      </div>
    </div>
  );
}

export default Note;
