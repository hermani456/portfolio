import { cn } from "@/lib/utils";

const Container = ({ id, children, className }) => {
  return (
    <div id={id} className={cn("max-w-screen-2xl px-5 mx-auto scroll-mt-28", className)}>
      {children}
    </div>
  );
};

export default Container;
