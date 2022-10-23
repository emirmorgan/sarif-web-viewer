import { Viewer } from "@microsoft/sarif-web-component";
import { useContext } from "react";
import LogsContext from "../../context/LogsContext";

export const Result = () => {
  const { logs } = useContext(LogsContext);

  return (
    <div>
      <Viewer logs={logs} />
    </div>
  );
};
