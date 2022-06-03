import { useState } from 'react';

export default function useToggle(
  defaultValue: Boolean
): [Boolean, (val?: Boolean | React.MouseEvent<HTMLButtonElement>) => void] {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (
    value?: Boolean | React.MouseEvent<HTMLButtonElement>
  ): void => {
    setValue((currentVal) =>
      typeof value === 'boolean' ? value : !currentVal
    );
  };

  return [value, toggleValue];
}
