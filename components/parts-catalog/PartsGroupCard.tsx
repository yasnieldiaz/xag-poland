"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { PartsGroup } from "./types";

interface PartsGroupCardProps {
  group: PartsGroup;
  productSlug: string;
  isSelected?: boolean;
}

export function PartsGroupCard({ group, productSlug, isSelected }: PartsGroupCardProps) {
  return (
    <Link
      href={`/parts-catalog/${productSlug}/${group.slug}`}
      className={cn(
        "group block bg-white rounded-lg border-2 overflow-hidden transition-all duration-200",
        "hover:border-brand-red hover:shadow-lg",
        isSelected ? "border-brand-red shadow-lg" : "border-gray-200"
      )}
    >
      {/* Image container */}
      <div className="relative aspect-square bg-gray-50 p-4">
        <Image
          src={group.image}
          alt={group.name}
          fill
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Title */}
      <div className="p-3 border-t border-gray-100">
        <p className="text-sm text-center text-navy font-medium leading-tight">
          {group.code}-{group.name}
        </p>
      </div>
    </Link>
  );
}
