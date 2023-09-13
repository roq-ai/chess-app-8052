interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Application Owner'],
  customerRoles: [],
  tenantRoles: ['Application Owner', 'Game Administrator'],
  tenantName: 'Company',
  applicationName: 'chess app',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage companies in the application',
    'Invite Game Administrators to the application',
    'Remove Game Administrators from the application',
    'Update details of a company in the application',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/83e2c59d-682b-4169-a86d-71a52bd91efe',
};
