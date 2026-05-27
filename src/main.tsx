import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/app/app.css";
import { App } from "@/app/app";

// biome-ignore lint/style/noNonNullAssertion: <>
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
