
export interface Transaction {
  id: number;
  parentId: number;
  accountId: number;
  valueDate: string;
  bankBookingDate: string;
  finapiBookingDate: string;
  amount: number;
  purpose: string;
  counterpartName: string;
  counterpartAccountNumber: string;
  counterpartIban: string;
  counterpartBlz: string;
  counterpartBic: string;
  counterpartBankName: string;
  counterpartMandateReference: string;
  counterpartCustomerReference: string;
  counterpartCreditorId: string;
  type: string;
  typeCodeZka: string;
  typeCodeSwift: string;
  primanota: string;
  category: Category;
  labels: Label[];
  isPotentialDuplicate: boolean;
  isAdjustingEntry: boolean;
  isNew: boolean;
  importDate: string;
  children: number[];
  paypalData: PaypalData;
}

export interface Category {
  id: number;
  name: string;
  parentId: number;
  parentName: string;
  isCustom: boolean;
  children: number[];
}

export interface Label {
  id: number;
  name: string;
}

export interface PaypalData {
  invoiceNumber: string;
  fee: number;
  net: number;
  auctionSite: string;
}