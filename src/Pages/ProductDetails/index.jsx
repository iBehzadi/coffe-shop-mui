import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading";

export default function ProductDetails() {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    })();
  }, [id]);

  if (!product) return <Loading />;

  // محاسبه‌ی تعداد ستاره‌های پر (برای رتبه‌بندی)
  const renderStars = (rate) => {
    const fullStars = Math.floor(rate);
    const halfStar = rate % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <div className="flex items-center gap-0.5 text-yellow-400 text-lg">
        {Array.from({ length: fullStars }).map((_, i) => (
          <span key={`full-${i}`}>★</span>
        ))}
        {halfStar === 1 && <span>★</span>}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300">
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100/80">
        <div className="flex flex-col md:flex-row">
          {/* بخش تصویر */}
          <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-8 md:p-12">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-w-md h-auto object-contain mix-blend-multiply"
              loading="lazy"
            />
          </div>

          {/* بخش اطلاعات */}
          <div className="md:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col">
            {/* دسته‌بندی */}
            <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider self-start mb-3">
              {product.category}
            </span>

            {/* عنوان */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight mb-3">
              {product.title}
            </h1>

            {/* رتبه‌بندی */}
            <div className="flex items-center gap-3 mb-4">
              {renderStars(product.rating?.rate || 0)}
              <span className="text-sm text-gray-500">
                ({product.rating?.count || 0} نظر)
              </span>
            </div>

            {/* قیمت */}
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold text-amber-600">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-sm text-gray-400 line-through">
                ${(product.price * 1.2).toFixed(2)}
              </span>
              <span className="text-sm text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">
                {Math.round((1 - 1 / 1.2) * 100)}% تخفیف
              </span>
            </div>

            {/* توضیحات */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6 border-t border-gray-100 pt-4">
              {product.description}
            </p>

            {/* دکمه‌ها */}
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg text-base font-medium transition-colors duration-200 shadow-sm hover:shadow-md">
                افزودن به سبد خرید
              </button>
              <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg text-base font-medium transition-colors duration-200 border border-gray-200">
                خرید سریع
              </button>
            </div>

            {/* اطلاعات اضافی (اختیاری) */}
            <div className="mt-4 text-xs text-gray-400 flex items-center gap-4 border-t border-gray-100 pt-4">
              <span>✓ ارسال رایگان</span>
              <span>✓ تضمین کیفیت</span>
              <span>✓ بازگشت ۷ روزه</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}