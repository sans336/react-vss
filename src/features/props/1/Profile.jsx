import { useState } from "react";
// import Showdata from "./showdata";
function Profile() {
    const [profile, setProfile] = useState({
        name: "",
    })
    const handleonchange = (e) => {
        setProfile({
            ...profile,[e.target.name]:e.target.value
    })
    }
    <Profile/>
    return (
        <div>
            <h1>hi i am sans</h1>
            <input type="text"
                name="name"
                placeholder="enter ur name"
                onChange={handleonchange}
            /> 
        </div>
    )
}
export default Profile;