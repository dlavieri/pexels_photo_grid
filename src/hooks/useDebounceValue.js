import { useState, useEffect } from "react";

const useDebounceValue = (value, delay) => {
  const [delayedValue, setDelayedValue] = useState(value);

  useEffect(() => {
    // set timeout to wait for a certain timelapse from last keystroke before calling API
    const handleUpdate = setTimeout(() => {
      setDelayedValue(value);
    }, delay);

    // this clears the timeout function.
    // if our value is changed before timeout executes, that will be cleared, also will cleanup timeout on dismount
    return () => clearTimeout(handleUpdate);
  }, [value, delay]);

  return delayedValue;
};

export default useDebounceValue;
