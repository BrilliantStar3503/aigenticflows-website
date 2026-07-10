export interface TrialAccountData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface TrialWorkspaceData {
  workspaceName: string;
  companyName: string;
  country: string;
  industry: string;
}

export interface TrialTemplate {
  id: string;
  title: string;
  description: string;
}
