export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

export const formatPhone = (phone: string): string => {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Handle Indonesian phone numbers
  if (cleaned.startsWith('62')) {
    return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5, 9)} ${cleaned.slice(9, 13)}`;
  } else if (cleaned.startsWith('0')) {
    return `+62 ${cleaned.slice(1, 4)} ${cleaned.slice(4, 8)} ${cleaned.slice(8, 12)}`;
  }
  
  return cleaned;
};

export const detectOperator = (phone: string): string | null => {
  const cleaned = phone.replace(/\D/g, '');
  
  // Telkomsel: 0811, 0812, 0813, 0821, 0822, 0823, 0852, 0853
  if (/^(62|0)(81[1-3]|82[1-3]|85[2-3])/.test(cleaned)) {
    return 'telkomsel';
  }
  
  // Indosat: 0814, 0815, 0816, 0855, 0856, 0857, 0858
  if (/^(62|0)(81[4-6]|85[5-8])/.test(cleaned)) {
    return 'indosat';
  }
  
  // XL: 0817, 0818, 0819, 0859, 0877, 0878
  if (/^(62|0)(81[7-9]|859|87[7-8])/.test(cleaned)) {
    return 'xl';
  }
  
  // Axis: 0831, 0832, 0833, 0838
  if (/^(62|0)(83[1-3]|838)/.test(cleaned)) {
    return 'axis';
  }
  
  // Tri: 0895, 0896, 0897, 0898, 0899
  if (/^(62|0)(89[5-9])/.test(cleaned)) {
    return 'tri';
  }
  
  // Smartfren: 0881, 0882, 0883, 0884, 0885, 0886, 0887, 0888, 0889
  if (/^(62|0)(88[1-9])/.test(cleaned)) {
    return 'smartfren';
  }
  
  return null;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) {
    return 'Hari Ini';
  } else if (diffDays === 1) {
    return 'Kemarin';
  } else if (diffDays < 7) {
    return `${diffDays} hari yang lalu`;
  } else {
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }
};

export const formatTime = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const generateTransactionId = (): string => {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return `TRX-${timestamp}-${random}`.toUpperCase();
};
