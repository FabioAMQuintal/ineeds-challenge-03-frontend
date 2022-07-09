import { Home } from "../index";
import { Auth } from "../../services";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const user = Auth.getCurrentUser()
    if (!user) {
        return <Navigate to='/'/>;
    }
    return children;
}