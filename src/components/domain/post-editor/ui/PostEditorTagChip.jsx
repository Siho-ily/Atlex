import { X } from "lucide-react";

const CHIP_STYLES = {
  manual:
    "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-100 hover:bg-emerald-100",
  automatic: "bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-200",
};
const REMOVE_TAG_LABEL_SUFFIX = " \uD0DC\uADF8 \uC0AD\uC81C";

export default function PostEditorTagChip({
  label,
  onRemove,
  variant = "automatic",
}) {
  const className = [
    "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition",
    CHIP_STYLES[variant],
  ].join(" ");

  if (!onRemove) {
    return <span className={className}>{label}</span>;
  }

  return (
    <button
      type="button"
      onClick={onRemove}
      className={className}
      aria-label={label + REMOVE_TAG_LABEL_SUFFIX}
    >
      <span>{label}</span>
      <X className="h-3.5 w-3.5" />
    </button>
  );
}
