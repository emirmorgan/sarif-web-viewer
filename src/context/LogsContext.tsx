import { createContext, useState } from "react";

const LogsContext = createContext<any | undefined>(undefined);

type LogsContextProviderProps = {
  children: React.ReactNode;
};

export const LogsProvider = ({ children }: LogsContextProviderProps) => {
  const [logs, setLogs] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <LogsContext.Provider value={{ logs, setLogs, count, setCount }}>
      {children}
    </LogsContext.Provider>
  );
};

export default LogsContext;
