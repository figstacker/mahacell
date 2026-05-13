import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { WalletBalance, Transaction } from '../types';

interface WalletState {
  balance: WalletBalance;
  transactions: Transaction[];
  setBalance: (balance: number) => void;
  addTransaction: (transaction: Transaction) => void;
  getTransactions: () => Transaction[];
}

// Mock initial data
const mockTransactions: Transaction[] = [
  {
    id: 'TRX-001',
    type: 'pulsa',
    status: 'success',
    amount: 50000,
    adminFee: 500,
    total: 50500,
    destination: '081234567890',
    productName: 'Telkomsel 50K',
    createdAt: new Date(Date.now() - 3600000).toISOString()
  },
  {
    id: 'TRX-002',
    type: 'token-listrik',
    status: 'success',
    amount: 100000,
    adminFee: 1000,
    total: 101000,
    destination: '123456789012',
    productName: 'Token PLN 100K',
    createdAt: new Date(Date.now() - 86400000).toISOString()
  },
  {
    id: 'TRX-003',
    type: 'e-wallet',
    status: 'pending',
    amount: 25000,
    adminFee: 500,
    total: 25500,
    destination: '081234567890',
    productName: 'GoPay 25K',
    createdAt: new Date(Date.now() - 172800000).toISOString()
  }
];

export const useWalletStore = create<WalletState>()(
  persist(
    (set, get) => ({
      balance: {
        balance: 1250000,
        lastUpdated: new Date().toISOString()
      },
      transactions: mockTransactions,
      
      setBalance: (balance: number) => {
        set({
          balance: {
            balance,
            lastUpdated: new Date().toISOString()
          }
        });
      },
      
      addTransaction: (transaction: Transaction) => {
        const currentTransactions = get().transactions;
        set({
          transactions: [transaction, ...currentTransactions]
        });
        
        // Update balance if transaction is successful
        if (transaction.status === 'success' && transaction.type !== 'topup') {
          const newBalance = get().balance.balance - transaction.total;
          get().setBalance(newBalance);
        } else if (transaction.type === 'topup' && transaction.status === 'success') {
          const newBalance = get().balance.balance + transaction.amount;
          get().setBalance(newBalance);
        }
      },
      
      getTransactions: () => {
        return get().transactions.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }
    }),
    {
      name: 'wallet-storage'
    }
  )
);
