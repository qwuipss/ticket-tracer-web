import { useState } from "react";

import { AuthProviderProps, AuthContext } from "../types/Types";

import { User } from "../types/Types";

const AuthProvider = ({
    children,
    isSignedIn
} : AuthProviderProps ) => {
    const [user] = useState<User | null>(isSignedIn ? { email: 'a.a@a.a', name: '123', surname: '123', password: '123123123' } : null);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
};

export default AuthProvider;