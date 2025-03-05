import { createRoot } from "react-dom/client"; 
import App from "./App";

const rootElement = document.getElementById("root") as HTMLElement;

const root = createRoot(rootElement);

root.render(<App />); 

// import { render } from "react-dom" 
// import App from "./App"

// const root = document.querySelector("#root");
// render (<App/> , root)