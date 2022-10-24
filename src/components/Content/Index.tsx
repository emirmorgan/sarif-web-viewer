import { useContext } from "react";
import LogsContext from "../../context/LogsContext";

import { Result } from "../Result/Result";
import { Stats } from "../Stats/Index";
import Waiting from "../Waiting/Index";

export const Content = () => {
  const { count } = useContext(LogsContext);

  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center">
        {count !== 0 ? (
          <>
            <Stats />
            <Result />
          </>
        ) : (
          <Waiting />
        )}
      </div>
    </div>
  );
};
