import React, { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import ProductCardSkeleton from "./ProductCardSkeleton";
import ProductCard from "./ProductCard";
import notify from "../../Utils/notify";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://fakestoreapi.com/products",
        );
        if (!res.ok) throw new Error("خطا در دریافت محصولات");
        const data = await res.json();
        setProducts(data);
        notify('success','Products load successfully.')
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const loadingItems = Array.from({ length: 72 }, (_, i) => (
    <ProductCardSkeleton key={i} />
  ));

  const productItems = products?.map(({ id, title, price, image }) => (
    <ProductCard
      key={id}
      id={id}
      title={title}
      imageUrl={image}
      price={price}
    />
  ));

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-red-500 text-lg">
        <span>⚠️ {error}</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
        {loading ? loadingItems : productItems}
      </div>

      {!loading && products?.length === 0 && (
        <div className="text-center text-gray-400 mt-12">
          هیچ محصولی یافت نشد.
        </div>
      )}
    </div>
  );
}
