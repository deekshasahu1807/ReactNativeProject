import { useState, useEffect } from "react";

const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value]);

  return debouncedValue;
};

// Usage Example

// const [search, setSearch] = useState("");
// const debouncedSearch = useDebounce(search, 600);


export default useDebounce;