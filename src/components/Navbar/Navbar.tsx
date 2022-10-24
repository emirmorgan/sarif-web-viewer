import { useContext } from "react";
import LogsContext from "../../context/LogsContext";

export const Navbar = () => {
  const { setLogs, setCount } = useContext(LogsContext);

  const fileHandler = (e: any) => {
    const files = e.target.files;

    Array.from(files).forEach((file: any) => {
      const reader = new FileReader();

      reader.onload = function (e: any) {
        setLogs((prevState: any) => [
          ...prevState,
          JSON.parse(e.target.result),
        ]);
        setCount((count: any) => (count += 1));
      };

      reader.readAsText(file);
    });
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
