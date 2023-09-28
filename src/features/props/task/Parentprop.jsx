import { useState } from "react";
import Childpopup from "./childpopup";
function Parentprop() {
    
  const [PopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!PopupOpen);
  };
    return (
        <div>
            <h1>click the button</h1>
            <button onClick={togglePopup}>clickme</button>
            {PopupOpen && <Childpopup
                onClose={() => {
            setPopupOpen(false);
          }}
            />}
            
        </div>
    )
}
export default Parentprop;