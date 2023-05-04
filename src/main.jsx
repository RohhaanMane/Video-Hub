import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ColorModeScript />
        <ChakraProvider >
          <ColorModeSwitcher />
            <App />
        </ChakraProvider>
    </React.StrictMode>
);
