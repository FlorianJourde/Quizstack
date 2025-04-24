import React, {createContext, useState, useEffect, ReactNode} from 'react';
import {UserInterface} from "../types/user";
import {AuthContextInterface} from "../types/authContext";

export const AuthContext = createContext<AuthContextInterface>({
    currentUser: null,
    loading: true,
    error: null,
    isAuthor: () => false,
    isAuthenticated: () => false,
    isAdmin: () => false,
});

export function AuthProvider({children}: { children: ReactNode }) {
    const [currentUser, setCurrentUser] = useState<UserInterface | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchCurrentUser() {
            try {
                const response = await fetch('/api/user/current');
                const data = await response.json();

                if (data.error) {
                    setCurrentUser(null);
                    setError(data.error);
                } else {
                    setCurrentUser(data);
                    setError(null);
                }
            } catch (err) {
                setCurrentUser(null);
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setLoading(false);
            }
        }

        fetchCurrentUser();
    }, []);

    function isAuthor(contentAuthorId: number): boolean {
        if (!currentUser) return false;
        return currentUser.id === contentAuthorId;
    }

    function isAuthenticated(): boolean {
        return currentUser !== null;
    }

    function isAdmin(): boolean {
        if (!currentUser) return false;
        return currentUser.roles.includes('ROLE_ADMIN');
    }

    const value: AuthContextInterface = {
        currentUser,
        loading,
        error,
        isAuthor,
        isAuthenticated,
        isAdmin
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return React.useContext(AuthContext);
}
