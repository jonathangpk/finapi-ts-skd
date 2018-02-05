import { Paging } from './shared.models';

export interface Bank {
  id: number;
  name: string;
  loginHint: string;
  bic: string;
  blz: string;
  blzs: string[];
  loginFieldUserId: string;
  loginFieldCustomerId: string;
  loginFieldPin: string;
  isSupported: boolean;
  supportedDataSources: string[]; // Webscrapper
  pinsAreVolatile: boolean;
  location: string;
  city: string;
  isTestBank: boolean;
  popularity: number;
}

export interface GetSearchBank {
  banks: Bank[];
  paging: Paging;
}

export interface BankConnenctionResponse {
  id: number;
  bank: number;
  bankId: number;
  bank: Bank;
  name: string;
  bankingUserId: string;
  bankingPin: string;
  type: "ONLINE" | "DEMO";
  updateStatus: "IN_PROGRESS" | "READY";
  categorizationStatus: "IN_PROGRESS" | "PENDING" |"READY";
  lastManualUpdate: {
    result: "OK"| string;
    errorMessage: string;
    errorType: "BUSINESS" | string;
    timestamp: string;
  };
  twoStepProcedures: {
    procedureId: string;
    procedureName: string;
    procedureChallengeType: string;
    implicitExecute: boolean;
  }[];
  ibanOnlyMoneyTransferSupported: boolean;
  ibanOnlyDirectDebitSupported: boolean;
  collectiveMoneyTransferSupported: boolean;
  defaultTwoStepProcedureId: string;
  accountIds: number[];
}