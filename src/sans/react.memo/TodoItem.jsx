import { memo } from "react";
const TodoItem = ({ item }) => {
    console.log('TodoItem component rendered');
    return <li>{item.title}</li>;
};

export default memo(TodoItem);