import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onRef();
  }, []);

  const onRef = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/auth/refetch",
        { withCredentials: true }
      );

      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
