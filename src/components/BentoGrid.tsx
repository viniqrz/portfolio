import { type ReactNode } from "react";
import { cn } from "../utils/cn"; // clsx helper

export const BentoGrid = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1124px] mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoItem = ({
  className,
  children,
  header,
}: {
  className?: string;
  children?: ReactNode;
  header?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-3xl group/bento hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 p-6 glass-card flex flex-col space-y-4 h-full",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};
