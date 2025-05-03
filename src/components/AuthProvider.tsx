import { ReactNode, useEffect, useState } from 'react';

import { AuthContext, IUserResponse } from '../types/Types';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('user');
        setIsAuthenticated(!!user);
    }, []);

    const auth = (user: IUserResponse) => {
        localStorage.setItem('user', JSON.stringify(user));
        setIsAuthenticated(true);
    };

    const login = (user: IUserResponse) => {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', user.id)
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
