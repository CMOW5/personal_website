import { useState, useEffect } from "react";

const useData = (userData) => {
  const [person, setPerson] = useState([]);
  useEffect(() => {
    setPerson(userData);
  }, []);

  return person;
}

export default useData;
