import type { ReactNode } from "react";

interface TabletScaleProps {
  children: ReactNode;
}

export function TabletScale({ children }: TabletScaleProps) {
  return (
    <div className="[zoom:0.3] min-[400px]:[zoom:0.36] sm:[zoom:0.5] md:[zoom:0.82] lg:[zoom:0.94] xl:[zoom:1]">
      {children}
    </div>
  );
}
