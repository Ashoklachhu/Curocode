import type { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}

/** Consistent eyebrow + heading + intro block used by every homepage section. */
export default function SectionHeading({ eyebrow, title, intro, align = "left" }: Props) {
  const centered = align === "center";
  return (
    <div className={centered ? "max-w-2xl mx-auto text-center" : "max-w-2xl"}>
      <p className="text-sand-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-[1.1] tracking-tight">
        {title}
      </h2>
      {intro && <p className="mt-5 text-stone-400 text-base sm:text-lg leading-relaxed">{intro}</p>}
    </div>
  );
}
