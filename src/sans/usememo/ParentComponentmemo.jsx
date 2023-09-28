import { useState, useMemo } from 'react';

function ChildComponentmemo({ data }) {
  console.log('ChildComponent rendering');
  return <div>Data: {data}</div>;
}

function ParentComponentmemo() {
  const [data, setData] = useState('Initial Data');
  const childComponent = useMemo(() => {
    return <ChildComponentmemo data={data} />;
  }, [data]);

  const updateData = () => {
    const newData = 'Updated Data';
    setData(newData);
  };

  return (
    <div>
      {childComponent}
      <button onClick={updateData}>Update Data</button>
    </div>
  );
}

export default ParentComponentmemo;