export interface ProvisionWorkspaceInput {
  companyName: string;
  workspaceName: string;
  industry: string;
  country: string;
  industryTemplate: string;
}

export interface ProvisionWorkspaceResult {
  success: boolean;
  agencyId?: string;
  unitId?: string;
  error?: string;
  alreadyProvisioned?: boolean;
}
