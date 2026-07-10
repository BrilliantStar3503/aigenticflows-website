interface ForgotPasswordProps {
  onClick: () => void;
}

export function ForgotPassword({ onClick }: ForgotPasswordProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-[12.5px] font-medium text-brand-red hover:underline"
    >
      Forgot password?
    </button>
  );
}
