import { useState } from "react";
import ChildUI from "./2";
import ChildUIV2 from "./3";

const ParentUI = () => {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    //setShowMessage((val) => !val);
    setShowMessage(!showMessage);
  };
  return (
    <div>
      {/* {showMessage && <p>I am visible Now</p>} */}
      {showMessage ? <p>I am visible</p> : <p>I a hidden</p>}
      {/* <button onClick={toggleMessage}>Toggle Message</button> */}

      <ChildUI onToggle={toggleMessage} />
      <ChildUIV2 onToggle={toggleMessage} />
    </div>
  );
};

export default ParentUI;
