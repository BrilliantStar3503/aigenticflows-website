interface EmailInputProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  label?: string;
  autoFocus?: boolean;
}

export function EmailInput({ id, value, onChange, error, label = "Email address", autoFocus }: EmailInputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[12.5px] font-medium text-neutral-700">
        {label}
      </label>
      <input
        id={id}
        type="email"
        autoComplete="email"
        autoFocus={autoFocus}
        placeholder="you@company.com"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`h-11 rounded-xl border bg-white px-3.5 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:ring-2 ${
          error
            ? "border-red-300 focus:border-red-400 focus:ring-red-100"
            : "border-neutral-200 focus:border-brand-red focus:ring-brand-red/15"
        }`}
      />
      {error && (
        <span id={`${id}-error`} className="text-[11.5px] font-medium text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}
