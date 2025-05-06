import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserData } from '@/types/api';

interface AuthContextType {
    user: UserData | null;
    isAuthenticated: boolean;
    setUser: (user: UserData | null) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<UserData | null>(null);
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

    useEffect(() => {
        const getUserData = (): UserData | null => {
            const userData = localStorage.getItem('user');
            if (!userData) return null;

            try {
                const parsedData = JSON.parse(userData);
                if (!parsedData || typeof parsedData !== 'object') {
                    console.error('Invalid user data format');
                    localStorage.removeItem('user');
                    return null;
                }

                // Validate required fields
                if (!parsedData.name || !parsedData.email || !parsedData.role) {
                    console.error('Missing required user data fields');
                    localStorage.removeItem('user');
                    return null;
                }

                return parsedData as UserData;
            } catch (error) {
                console.error('Error parsing user data:', error);
                localStorage.removeItem('user');
                return null;
            }
        };

        const userData = getUserData();
        setUser(userData);
    }, []);

    // Listen for storage changes
    useEffect(() => {
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'user') {
                if (e.newValue) {
                    try {
                        const parsedData = JSON.parse(e.newValue);
                        setUser(parsedData);
                    } catch (error) {
                        console.error('Error parsing user data from storage event:', error);
                        setUser(null);
                    }
                } else {
                    setUser(null);
                }
            } else if (e.key === 'token') {
                setToken(e.newValue);
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        setToken(null);
    };

    const value = {
        user,
        isAuthenticated: !!token && !!user,
        setUser,
        logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
} 