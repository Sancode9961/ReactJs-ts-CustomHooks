import * as React from 'react';
import useToggle from '../1-useToggle/useToggle';

export default function ToggleComponent() {
  const [value, toggleValue] = useToggle(false);

  return (
    <div>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={(e) => toggleValue(true)}>Make True</button>
      <button onClick={(e) => toggleValue(false)}>Make false</button>
    </div>
  );
}
