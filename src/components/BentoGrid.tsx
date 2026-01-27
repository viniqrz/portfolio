import { type ReactNode } from "react";
import { cn } from "../utils/cn"; // clsx helper

export const BentoGrid = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
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
        "row-span-1 rounded-3xl group/bento hover:shadow-2xl transition duration-300 p-6 backdrop-blur-md bg-white/40 dark:bg-black/40 border border-white/20 dark:border-white/10 justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {children}
      </div>
    </div>
  );
};
