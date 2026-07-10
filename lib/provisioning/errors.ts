export function mapProvisioningError(error: unknown): string {
  if (error instanceof Error) {
    const message = error.message.toLowerCase();

    if (message.includes("already belong to an agency")) {
      return "You already have a workspace on this account.";
    }
    if (message.includes("duplicate") || message.includes("already exists") || message.includes("unique constraint")) {
      return "You already have a workspace on this account.";
    }
    if (message.includes("not authenticated")) {
      return "Your session expired. Please sign in again.";
    }
    if (message.includes("fetch") || message.includes("network")) {
      return "Network error. Please check your connection and try again.";
    }
  }

  return "We couldn't finish setting up your workspace. Please try again.";
}
