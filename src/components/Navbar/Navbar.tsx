import { useContext } from "react";
import LogsContext from "../../context/LogsContext";

export const Navbar = () => {
  const { logs, setLogs } = useContext(LogsContext);

  const fileHandler = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e: any) {
      const log = JSON.parse(e.target.result);

      setLogs([...logs, log]);
    };

    reader.readAsText(file);
  };

  return (
    <div className="d-flex shadow p-3">
      <div className="d-flex justify-content-center justify-content-md-between align-items-center w-100">
        <div className="d-none d-md-flex">
          <h6 className="m-0">SARIF Web Viewer</h6>
        </div>
        <div>
          <input
            className="form-control"
            type="file"
            onChange={fileHandler}
            multiple
          ></input>
        </div>
      </div>
    </div>
  );
};
