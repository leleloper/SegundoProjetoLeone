import { StrictMode } from "react";
import {createRoot} from "react-dom/client"
import AppTeoria from "./AppTeoria.jsx"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AppTeoria/>
    </StrictMode>
);