import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import SignUp from "./SignUp";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <SignUp />
  </StrictMode>
);
