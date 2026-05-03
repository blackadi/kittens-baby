import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CardList from "./CardList";
import "tachyons";
import { kittens } from "./kittens.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CardList kittens={kittens} />
  </StrictMode>,
);
