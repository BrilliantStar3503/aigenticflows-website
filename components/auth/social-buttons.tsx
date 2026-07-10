function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M15.68 8.18c0-.57-.05-1.11-.14-1.64H8v3.1h4.3a3.7 3.7 0 0 1-1.6 2.43v2h2.6c1.52-1.4 2.38-3.47 2.38-5.9Z"
      />
      <path
        fill="#34A853"
        d="M8 16c2.16 0 3.97-.72 5.3-1.94l-2.6-2c-.72.48-1.64.77-2.7.77-2.08 0-3.84-1.4-4.47-3.29H.85v2.07A8 8 0 0 0 8 16Z"
      />
      <path fill="#FBBC05" d="M3.53 9.54a4.8 4.8 0 0 1 0-3.08V4.4H.85a8 8 0 0 0 0 7.2l2.68-2.06Z" />
      <path
        fill="#EA4335"
        d="M8 3.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A7.94 7.94 0 0 0 8 0 8 8 0 0 0 .85 4.4l2.68 2.06C4.16 4.58 5.92 3.18 8 3.18Z"
      />
    </svg>
  );
}

function MicrosoftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <rect x="0" y="0" width="7.2" height="7.2" fill="#F25022" />
      <rect x="8.8" y="0" width="7.2" height="7.2" fill="#7FBA00" />
      <rect x="0" y="8.8" width="7.2" height="7.2" fill="#00A4EF" />
      <rect x="8.8" y="8.8" width="7.2" height="7.2" fill="#FFB900" />
    </svg>
  );
}

export function SocialButtons() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        type="button"
        className="flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white py-2.5 text-[13px] font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
      >
        <GoogleIcon />
        Google
      </button>
      <button
        type="button"
        className="flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white py-2.5 text-[13px] font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
      >
        <MicrosoftIcon />
        Microsoft
      </button>
    </div>
  );
}
