import React, {createContext, useState, useEffect, ReactNode, useContext} from 'react';
import {UserInterface} from "../types/user";
import {AuthContextInterface} from "../types/authContext";

export const AuthContext = createContext<AuthContextInterface>({
    currentUser: null,
    loading: true,
    error: null,
    isAuthor: () => false,
});

export function AuthProvider({children}: { children: ReactNode }) {
    const [currentUser, setCurrentUser] = useState<UserInterface | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // const fetchCurrentUser = async () => {
        async function fetchCurrentUser() {
            try {
                const response = await fetch('/api/user/current');

                if (!response.ok) {
                    throw new Error('Failed to fetch current user');
                }

                const userData = await response.json();
                setCurrentUser(userData);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchCurrentUser();
    }, []);

    function isAuthor(contentAuthorId: number): boolean {
        if (!currentUser) return false;

        return currentUser.id === contentAuthorId;
    };

    const value: AuthContextInterface = {
        currentUser,
        loading,
        error,
        isAuthor,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
    return React.useContext(AuthContext);
}

// export default AuthContext;