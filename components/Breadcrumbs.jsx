import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { getBreadcrumbSchema } from "@/lib/seo";

export default function Breadcrumbs({ items }) {
  const schema = getBreadcrumbSchema(items);

  return (
    <nav aria-label="Kruimelpad" className="py-4">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <ol className="flex items-center flex-wrap gap-2 text-xs text-[#526777]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.url} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />}

              {index === 0 && (
                <Home className="w-3.5 h-3.5 text-slate-400 shrink-0 mr-0.5" />
              )}

              {isLast ? (
                <span
                  className="font-bold text-[#102A43] truncate max-w-[200px] sm:max-w-none"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="hover:text-[#1677FF] hover:underline transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
