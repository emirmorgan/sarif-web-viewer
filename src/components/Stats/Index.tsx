import { useContext } from "react";
import LogsContext from "../../context/LogsContext";

export const Stats = () => {
  const { count, setCount, setLogs } = useContext(LogsContext);

  const clearHandle = () => {
    setLogs([]);
    setCount(0);
  };

  return (
    <div className="d-flex align-items-center justify-content-between shadow rounded w-75 p-3 mt-4">
      <div className="d-flex align-items-center gap-2">
        <span>File Count</span>
        <div className="badge bg-secondary d-flex align-items-center">
          <span>{count}</span>
        </div>
      </div>
      <div className="d-flex gap-2 cursor-pointer" onClick={clearHandle}>
        <img src="https://img.icons8.com/ios/50/000000/broom.png" width="25" />
        <span> Clear Files</span>
      </div>
    </div>
  );
};
