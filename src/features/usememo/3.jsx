
function Person({ name, age }) {
  console.log(`Rendering ${name}`);
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

export default Person;