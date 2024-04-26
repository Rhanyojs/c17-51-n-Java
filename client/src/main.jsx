import ReactDOM from "react-dom/client";
import AppRouter from "./Router/AppRouter";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from './context/AuthContext';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </BrowserRouter>
);
