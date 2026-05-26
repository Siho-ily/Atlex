import { Button } from "@/components/common/ui/button";

export default function BlogMainHeaderAction({ children, label }) {
  return (
    <Button
      variant="outline"
      aria-label={label}
      className="h-auto cursor-default gap-2 rounded-full bg-card px-4 py-3 font-semibold text-card-foreground"
    >
      {children}
      <span>{label}</span>
    </Button>
  );
}
