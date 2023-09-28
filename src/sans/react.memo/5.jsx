import memo from "react";

const MyComponent =(props) => {
 
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
};

function App() {
  const data = { text: 'Hello, React.memo!' };

  return (
    <div>
      <h1>React.memo Example</h1>
      <MyComponent {...data} />
    </div>
  );
}

export default memo(App);






