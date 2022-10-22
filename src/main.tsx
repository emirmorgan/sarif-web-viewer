import ReactDOM from "react-dom/client";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./styles.sass";

import { LogsProvider } from "./context/LogsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <LogsProvider>
    <App />
  </LogsProvider>
);
