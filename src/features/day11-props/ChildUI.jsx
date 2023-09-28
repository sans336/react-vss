const ChildUI = (props) => {
//   console.log("Props: ", props);
  return (
    <div>
      <p>I am Child Component</p>
      <button onClick={props.onToggle}>Toggle</button>
    </div>
  );
};

export default ChildUI;
