export interface User {
  id: string;
  name: string;
  phone: string;
  email?: string;
  avatar?: string;
  pin: string;
}

export interface Transaction {
  id: string;
  type: 'pulsa' | 'paket-data' | 'token-listrik' | 'e-wallet' | 'tagihan-listrik' | 'pdam' | 'bpjs' | 'internet' | 'kredit' | 'qris' | 'topup';
  status: 'success' | 'pending' | 'failed';
  amount: number;
  adminFee: number;
  total: number;
  destination?: string;
  productId?: string;
  productName?: string;
  merchantName?: string;
  merchantId?: string;
  createdAt: string;
  description?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  nominal: number;
  description?: string;
  operator?: string;
  logo?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'transaction' | 'reminder' | 'promo';
  read: boolean;
  createdAt: string;
  relatedTransactionId?: string;
}

export interface WalletBalance {
  balance: number;
  lastUpdated: string;
}

export interface TopUpMethod {
  id: string;
  name: string;
  type: 'bank' | 'va' | 'retail' | 'qris';
  logo?: string;
  adminFee: number;
}
