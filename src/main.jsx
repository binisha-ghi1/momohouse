import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./context/CartProvider.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <Auth0Provider
        domain="dev-8umwky1w7im1pu2x.us.auth0.com"
        clientId="ZqeimAeAjs3dbOvTy41znX7aYcXowkP4"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
      ,
      <App />
      </Auth0Provider>
    </CartProvider>
  </BrowserRouter>
);
