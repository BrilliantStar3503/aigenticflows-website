interface PasswordStrengthProps {
  password: string;
}

function getStrength(password: string): { score: number; label: string; color: string } {
  if (password.length === 0) return { score: 0, label: "", color: "bg-neutral-200" };

  let score = 0;
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1;
  if (/\d/.test(password) && /[^A-Za-z0-9]/.test(password)) score += 1;

  const levels = [
    { label: "Weak", color: "bg-red-400" },
    { label: "Fair", color: "bg-brand-gold" },
    { label: "Good", color: "bg-blue-400" },
    { label: "Strong", color: "bg-emerald-500" },
  ];

  const clamped = Math.min(score, 4);
  return { score: clamped, ...levels[Math.max(clamped - 1, 0)] };
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const { score, label, color } = getStrength(password);
  if (password.length === 0) return null;

  return (
    <div className="mt-1.5 flex items-center gap-2">
      <div className="flex flex-1 gap-1">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`h-1 flex-1 rounded-full ${index < score ? color : "bg-neutral-200"}`}
          />
        ))}
      </div>
      <span className="text-[10.5px] font-medium text-neutral-400">{label}</span>
    </div>
  );
}
