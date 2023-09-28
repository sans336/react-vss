const ChildUIV2 = ({ onToggle }) => {
  return (
    <div>
      <p>I am Child Component</p>
      <button onClick={onToggle}>Toggle</button>
    </div>
  );
};

export default ChildUIV2;
