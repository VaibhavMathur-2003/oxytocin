import React, { useEffect, useState } from "react";
import NoteContainer from "./Components/NotePage";
import "./App.css";

function App() {
  const addNote = () => {
    const temporary = [...notes];

    temporary.push({
      id: Date.now() + "Vaibhav" + Math.floor(Math.random()),
      cate: "none",
      text: "",
      
    });
    setNotes(temporary);
  };
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  const deleteNote = (id) => {
    const temporary = [...notes];

    const index = temporary.findIndex((item) => item.id === id);
    if (index < 0) return;

    temporary.splice(index, 1);
    setNotes(temporary);
  };
  const category = (cate, id) => {
    const temporary = [...notes];

    const index = temporary.findIndex((item) => item.id === id);
    if (index < 0) return;

    temporary[index].cate = cate;
    setNotes(temporary);
  };
  const updateText = (text, id) => {
    const temporary = [...notes];

    const index = temporary.findIndex((item) => item.id === id);
    if (index < 0) return;

    temporary[index].text = text;
    setNotes(temporary);
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
