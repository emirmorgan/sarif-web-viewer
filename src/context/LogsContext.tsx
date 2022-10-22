import { createContext, useState } from "react";

const LogsContext = createContext<any | undefined>(undefined);

type LogsContextProviderProps = {
  children: React.ReactNode;
};

export const LogsProvider = ({ children }: LogsContextProviderProps) => {
  const [logs, setLogs] = useState([]);

  return (
    <LogsContext.Provider value={{ logs, setLogs }}>
      {children}
    </LogsContext.Provider>
  );
};

export default LogsContext;
