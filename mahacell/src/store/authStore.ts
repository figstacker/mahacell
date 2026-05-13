import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (phone: string, pin: string) => Promise<boolean>;
  logout: () => void;
  register: (data: Partial<User>) => Promise<boolean>;
}

// Mock users for development
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Ahmad',
    phone: '081234567890',
    email: 'ahmad@example.com',
    pin: '123456'
  }
];

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      
      login: async (phone: string, pin: string) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const user = mockUsers.find(
          u => u.phone === phone.replace(/\D/g, '') && u.pin === pin
        );
        
        if (user) {
          set({ user, isAuthenticated: true });
          return true;
        }
        
        return false;
      },
      
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
      
      register: async (data: Partial<User>) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const newUser: User = {
          id: Date.now().toString(),
          name: data.name || '',
          phone: data.phone || '',
          email: data.email,
          pin: data.pin || ''
        };
        
        set({ user: newUser, isAuthenticated: true });
        return true;
      }
    }),
    {
      name: 'auth-storage'
    }
  )
);
