export interface Account {
  id: number;
  bankConnectionId: number;
  accountName: string;
  accountNumber: string;
  subAccountNumber: string;
  iban: string;
  accountHolderName: string;
  accountHolderId: string;
  accountCurrency: string;
  accountTypeId: number;
  accountTypeName: string;
  balance: number;
  overdraft: number;
  overdraftLimit: number;
  availableFunds: number;
  lastSuccessfulUpdate: string;
  lastUpdateAttempt: string;
  isNew: boolean;
  status: string;
  supportedOrders: string[];
  clearingAccounts: {
    clearingAccountId: string;
    clearingAccountName: string;
  }[];
}