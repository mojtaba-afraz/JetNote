import { useState } from "react";
import './assets/css/global.scss'
import './App.scss'
import NoteCard from "./components/note-card/note-card";
import Aside from "./components/aside/aside";




function App() {
    const [notes] = useState(['note 1','note 2']);
    // const [activeNote, setActiveNote] = useState('');
    // let _handleKeyDown = function (e) {
    //     if (e.key === 'Enter') {
    //         console.log(notes)
    //         setNotes([...notes,e.target.value])
    //     }
    // }
    const noteItems = notes.map((note) =>
        <NoteCard note={note} key={note}></NoteCard>

    );
    return (
    <div style={{display:'flex'}}>
        <Aside></Aside>
        <div className="content">
            <div className='note-lists'>
                {/*<input onKeyDown={_handleKeyDown} placeholder="Type Some" className="note-input" onChange={(event)=>{setActiveNote(event.target.value)}} type={"text"}/>*/}
                {noteItems}
            </div>
        </div>
    </div>
  );
}

export default App;
