import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import './styles/index.ts'
import App from "./App.tsx";
import AuthProvider from "./components/AuthProvider.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </StrictMode>
);
