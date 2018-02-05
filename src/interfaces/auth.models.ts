export interface GetTokenResponse {
  scope: string;
  access_token: string;
  refresh_token: string;
  token_type: string;
  scope: number;

}

export interface ClientConfiguration extends ClientConfigurationParams{
  isAutomaticBatchUpdateEnabled: boolean;
  maxUserLoginAttempts: number;
  isUserAutoVerificationEnabled: boolean;
  isMandatorAdmin: boolean;
  isWebScrapingEnabled: boolean;
  availableBankGroups: string[];
}

export interface ClientConfigurationParams {
  userNotificationCallbackUrl: string;
  userSynchronizationCallbackUrl: string;
  refreshTokensValidityPeriod: number;
  userAccessTokensValidityPeriod: number;
  clientAccessTokensValidityPeriod: number;
}