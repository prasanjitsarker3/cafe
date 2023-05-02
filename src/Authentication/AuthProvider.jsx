import React, { createContext } from 'react';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const user = { name: "PS" }
    const authInfo = {
        user,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;