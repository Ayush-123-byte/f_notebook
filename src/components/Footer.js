import React, { useContext } from "react";
import { notecontext } from "../context/NoteState";

function Footer() {
    const { changeMode } = useContext(notecontext);

return(

    <footer style={changeMode} className="bg-dark text-light text-center py-2">
    <div className="container">
      <p>&copy;being_07. All rights reserved.</p>
    </div>
  </footer>
)
}

export default Footer;
