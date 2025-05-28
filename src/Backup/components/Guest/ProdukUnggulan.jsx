import React from "react";
import products from "../../data/products.json";

export default function ProdukUnggulan() {
  return (
    <section id="produk" className="px-8 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Produk Unggulan</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item) => (
          <div key={item.id} className="border rounded shadow p-4 text-center">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-red-500 font-bold">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}