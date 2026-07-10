"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  seconds?: number;
  onResend: () => void;
}

export function CountdownTimer({ seconds = 60, onResend }: CountdownTimerProps) {
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    if (remaining <= 0) return;
    const interval = setInterval(() => {
      setRemaining((value) => Math.max(0, value - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [remaining]);

  if (remaining > 0) {
    return (
      <span className="text-[12.5px] text-neutral-400">
        Resend available in <span className="font-semibold text-neutral-600">{remaining}s</span>
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        onResend();
        setRemaining(seconds);
      }}
      className="text-[12.5px] font-semibold text-brand-red hover:underline"
    >
      Resend email
    </button>
  );
}
