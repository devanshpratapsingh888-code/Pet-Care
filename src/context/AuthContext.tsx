import { createContext, useContext, useState, type ReactNode } from 'react';

interface User {
    email: string;
    name: string;
}

export interface Order {
    id: string;
    date: string;
    items: any[];
    total: number;
    status: 'Processing' | 'Shipped' | 'Delivered';
}

interface AuthContextType {
    user: User | null;
    orders: Order[];
    login: (email: string) => void;
    logout: () => void;
    addOrder: (items: any[], total: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [orders, setOrders] = useState<Order[]>([]);

    const login = (email: string) => {
        // Mock login - just use the email username as name
        const name = email.split('@')[0];
        setUser({ email, name });
    };

    const logout = () => {
        setUser(null);
    };

    const addOrder = (items: any[], total: number) => {
        if (!user) return;
        const newOrder: Order = {
            id: Math.random().toString(36).substr(2, 9).toUpperCase(),
            date: new Date().toLocaleDateString(),
            items,
            total,
            status: 'Processing'
        };
        setOrders(prev => [newOrder, ...prev]);
    };

    return (
        <AuthContext.Provider value={{ user, orders, login, logout, addOrder }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
