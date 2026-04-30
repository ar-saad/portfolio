import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routes from "./routes/Routes";
import { ThemeProvider } from "./components/ThemeSwitch/ThemeProvider";
import { ReactLenis } from "lenis/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactLenis root>
      <ThemeProvider>
        <div>
          <Routes />
        </div>
      </ThemeProvider>
    </ReactLenis>
  </StrictMode>
);
