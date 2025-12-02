import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routes from "./routes/Routes";
import { ThemeProvider } from "./components/others/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <div className="max-w-[1400px] w-full mx-auto">
        <Routes />
      </div>
    </ThemeProvider>
  </StrictMode>
);
