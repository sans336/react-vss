import { memo } from "react";
const Child = () => {
    return (
        <div>
            {console.log("rerendering from child")}
            <h4>child component with no props</h4>
        </div>
    );
};
export default memo(Child); 