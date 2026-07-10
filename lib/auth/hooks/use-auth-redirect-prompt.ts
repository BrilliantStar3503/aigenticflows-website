"use client";

import { useEffect } from "react";

/** Opens the login modal automatically when middleware redirects an unauthenticated user here. */
export function useAuthRedirectPrompt(openLogin: () => void) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("authRedirect")) {
      openLogin();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
