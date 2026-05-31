import { createContext, useContext, useState } from 'react'

// ── Types ──────────────────────────────────────────────────────────────────

export type Role = 'Admin' | 'Editor' | 'Viewer'

export interface User {
    username: string
    role: Role
}

interface AuthContextType {
    user: User | null
    login: (user: User) => void
    logout: () => void
}

// ── Context ────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// ── Provider ───────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)

    const login = (userData: User) => {
        setUser(userData)
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// ── Hook ───────────────────────────────────────────────────────────────────

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
