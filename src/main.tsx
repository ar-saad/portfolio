import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routes from "./routes/Routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="max-w-[1400px] w-full mx-auto">
      <Routes />
    </div>
  </StrictMode>
);
