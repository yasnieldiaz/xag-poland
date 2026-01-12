"use client";

import { PartsGroupCard } from "./PartsGroupCard";
import { Product } from "./types";

interface PartsGroupGridProps {
  product: Product;
}

export function PartsGroupGrid({ product }: PartsGroupGridProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="container-main">
          <nav className="text-sm text-gray-500 mb-2">
            <span className="hover:text-brand-red cursor-pointer">Home</span>
            <span className="mx-2">/</span>
            <span className="hover:text-brand-red cursor-pointer">Parts Catalog</span>
            <span className="mx-2">/</span>
            <span className="text-navy font-medium">{product.name}</span>
          </nav>
          <h1 className="text-2xl font-bold text-navy">{product.name}</h1>
        </div>
      </div>

      {/* Groups grid */}
      <div className="container-main py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
          {product.groups.map((group) => (
            <PartsGroupCard
              key={group.id}
              group={group}
              productSlug={product.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
