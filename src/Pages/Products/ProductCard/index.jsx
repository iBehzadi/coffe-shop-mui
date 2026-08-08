import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ id, title, price, imageUrl }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product-details/${id}/${title.replaceAll(" ", "-")}`);
  };
  return (
    <div
      onClick={handleClick}
      className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100/80 flex flex-col h-full"
    >
      <div className="w-full h-48 bg-gray-50 flex items-center justify-center p-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 min-h-[2.5rem] leading-relaxed">
          {title}
        </h3>

        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-lg font-bold text-amber-600">
            {price?.toLocaleString()}
          </span>
          <span className="text-xs text-gray-400">تومان</span>
        </div>

        <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow">
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}
