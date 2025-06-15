import {type ReactNode} from "react";
import {Navigate} from "react-router";
import Loading from "../ui/Loading";
import { useAuth } from "../../hooks/useAuth";

interface PropTypes {
    children: ReactNode;
}

export const ProtectedRoute = (props: PropTypes) => {
    const { children } = props;
    const { authedUser, initializing } = useAuth();

    if (initializing) return <Loading />;
    if (!authedUser) return <Navigate to="/login" replace />;

    return <>{children}</>;
};

export const AuthRedirect = (props: PropTypes) => {
    const { children } = props;
    const { authedUser, initializing } = useAuth();

    if (initializing) return <Loading />;
    if (authedUser) return <Navigate to="/notes" replace />;

    return <>{children}</>;
}