import { useState } from "react";

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [state, setState] = useState<T>(() => {
    if (window) {
      try {
        const value = window.localStorage.getItem(key);
        console.log("Current stored theme", value);
        return value ? JSON.parse(value) : initialValue;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    }
  });

  const setValue = (value: T | ((prevState: T) => T)) => {
    if (window) {
      try {
        const valueToStore =
          value instanceof Function
            ? (value as (prevState: T) => T)(state)
            : value;
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        setState(valueToStore);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return [state, setValue] as const;
};

export default useLocalStorage;
