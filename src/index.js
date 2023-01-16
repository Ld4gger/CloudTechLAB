import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const app = document.getElementById("app");
ReactDOM.render(<App />, app);

/* const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);
 */
