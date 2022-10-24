import { Result } from "../Result/Result";
import { Stats } from "../Stats/Index";

export const Content = () => {
  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center">
        <Stats />
        <Result />
      </div>
    </div>
  );
};
