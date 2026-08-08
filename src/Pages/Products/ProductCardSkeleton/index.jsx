import React from "react";

export default function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100/80 flex flex-col h-full animate-pulse">
      {/* بخش تصویر (جای‌خالی) */}
      <div className="w-full h-48 bg-gray-200"></div>

      {/* بخش محتوا (جای‌خالی) */}
      <div className="p-4 flex flex-col flex-1">
        {/* عنوان (۲ خط) */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>

        {/* قیمت */}
        <div className="mt-3 flex items-baseline gap-1">
          <div className="h-6 bg-gray-200 rounded w-1/3"></div>
          <div className="h-3 bg-gray-200 rounded w-1/6"></div>
        </div>

        {/* دکمه */}
        <div className="mt-4 w-full h-10 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
}