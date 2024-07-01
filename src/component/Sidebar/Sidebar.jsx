import React from 'react';
import { MdOutlineSpeakerNotes } from "react-icons/md";
import '../Sidebar/Sidebar.css'

export default function Sidebar() {

    return (
        <div className='sidebar_main'>
            <h2 className='sidebar_head'>John Kevin</h2>
            <div className='notes_option mt-4 ms-3 me-2 p-2'><MdOutlineSpeakerNotes /> <span className='ms-2 '>Notes</span></div>
        </div >
    );
}
