import { useState } from "react";

function todolist() {
    const [activity, setActivity] = useState("");
    const [listdata, setlistdata] = useState([]);
    function Addactivity() {
        // setlistdata([...listdata, activity]);
        // console.log(listdata);
        setlistdata((listdata) => {
            const updatedlist = [...listdata, activity];
            // console.log(updatedlist);
            setActivity("");
            return updatedlist;
        })
    }
    function removeActivity(item) {
        const updatedlistdata = listdata.filter((elem, id) => {
            return item != id;
        })
        setlistdata(updatedlistdata);
    }
  return (
    <>
      <div className="container">
        <div className="header">TODOLIST</div>
        <input
          type="text"
          placeholder="Add activity"
          value={activity}
          onChange={(e) => {
            setActivity(e.target.value);
          }}
        />
        <button onClick={Addactivity}>Add</button>
        <p className="List-heading">Here is your list: {")"}</p>

         {listdata != [] &&
          listdata.map((data, item) => {
            return (
              <>
                <p key={item}>
                  <div className="listData">{data}</div>
                  <div className="btn-position">
                    <button onClick={() => removeActivity(item)}>
                      Remove(-)
                    </button>
                  </div>
                </p>
              </>
            );
          })}
      </div>
    </>
  )};
export default todolist; 