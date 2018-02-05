import { Paging } from './shared.models';

export interface User {
  userId: string;
  registrationDate: string;
  deletionDate: string;
  lastActiveDate: string;
  bankConnectionCount: number;
  latestBankConnectionImportDate: string;
  latestBankConnectionDeletionDate: string;
}

export interface UserList {
  users : User[];
  paging : Paging;
}

// Get Authorized User | Create User
export interface UserBasic {
  id: string;
  password: string;
  email: string;
  phone: string;
  isAutoUpdateEnabled: boolean;
}

export interface UserVerificationStatus {
  userId: string;
  isUserVerified: boolean;
}

export interface PasswordChange {
  user: string;
  userEmail: string;
  passwordChangeToken: string;
}

export interface EditUser {
  email: string;
  phone: string;
  isAutoUpdateEnabled: boolean;
}