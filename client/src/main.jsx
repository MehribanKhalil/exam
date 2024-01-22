import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BasketProvider } from "./context/BasketContext.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BasketProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </BasketProvider>
  </React.StrictMode>
);
