import React, { useEffect, useState } from "react";
import NoteContainer from "./Components/NotePage";
import "./App.css";

function App() {
  const addNote = () => {
    const temp = [...notes];

    temp.push({
      id: Math.floor(Math.random()*100) +"Vaibhav"+  Date.now() ,
      cate: "None",
      text: "",
      
    });
    setNotes(temp);
  };
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  const deleteNote = (id) => {
    const temp = [...notes];

    const index = temp.findIndex((item) => item.id === id);
    if (index < 0) return;

    temp.splice(index, 1);
    setNotes(temp);
  };
  const category = (cate, id) => {
    const temp = [...notes];

    const index = temp.findIndex((item) => item.id === id);
    if (index < 0) return;

    temp[index].cate = cate;
    setNotes(temp);
  };
  const updateText = (text, id) => {
    const temp = [...notes];

    const index = temp.findIndex((item) => item.id === id);
    if (index < 0) return;

    temp[index].text = text;
    setNotes(temp);
  };

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <NoteContainer
        notes={notes}
        category={category}
        deleteNote={deleteNote}
        updateText={updateText}
        addNote={addNote}
      />
    </div>
  );
}

export default App;
