import { type ReactNode } from "react";
import { cn } from "../utils/cn"; // clsx helper
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.01, translateY: -5 }}
      className={cn(
        "rounded-3xl group/bento hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 p-6 glass-card flex flex-col space-y-4 h-full cursor-default",
        className
      )}
    >
      {header}
      <div className="h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};
