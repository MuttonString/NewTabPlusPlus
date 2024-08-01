import { useState } from 'react';
import { PrimaryButton } from '@fluentui/react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PrimaryButton onClick={() => setCount(count + 1)}>Plus</PrimaryButton>
      <h5>{count}</h5>
    </>
  );
}

export default App;
