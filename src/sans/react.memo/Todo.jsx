import { memo } from "react";
import TodoItem from "./TodoItem";

const Todo = ({ list }) => {
    console.log('Todo component rendered');
    return (
        <ul>
            {list.map((item) => (
                <TodoItem key={item.id} item={item} />
            ))}
        </ul>
    );
};
export default memo(Todo);