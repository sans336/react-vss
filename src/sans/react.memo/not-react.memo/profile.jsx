import { memo } from "react";

const Profile = ({ userDetails }) => {
    console.log('profile rendered');
    return (
        <div>
            <p>{userDetails.name}</p>
            <p>{userDetails.age}</p>
            <p>{userDetails.userName}</p>
        </div>
    );
};
export default memo(Profile);


// const Profile = React.memo(({ userDetails }) => {
//         console.log('profile rendered');
//         return (
//             <div>
//                 <p>{userDetails.name}</p>
//                 <p>{userDetails.age}</p>
//                 <p>{userDetails.userName}</p>
//             </div>
//         );
//     },(prevProps, nextProps) => {
//         if (prevProps.userDetails.name === nextProps.userDetails.name) {
//             return true; // props are equal
//         }
//         return false; // props are not equal -> update the component
//     }
// );
// export default Profile;