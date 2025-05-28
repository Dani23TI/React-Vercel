import React, { useState } from "react";
import produkData from "../data/produk.json";
import { FaShoppingCart, FaTimesCircle, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

export default function CekProduk() {
  const [kode, setKode] = useState("");
  const [pesan, setPesan] = useState(null);
  const [error, setError] = useState("");

  const handleCek = (e) => {
    e.preventDefault();

    if (!kode) {
      setError("Kode produk tidak boleh kosong.");
      setPesan(null);
      return;
    }

    if (kode.length < 4) {
      setError("Kode produk minimal 4 karakter.");
      setPesan(null);
      return;
    }

    setError("");

    const produk = produkData.find((item) => item.kode_produk === kode.toUpperCase());

    if (!produk) {
      setPesan({
        status: "notfound",
        message: `❌ Kode produk tidak ditemukan.`,
      });
    } else if (produk.stok === 0) {
      setPesan({
        status: "outofstock",
        message: `⚠️ Produk ${produk.nama_produk} saat ini sedang habis.`,
      });
    } else {
      setPesan({
        status: "available",
        message: `✅ Produk ${produk.nama_produk} tersedia dengan harga Rp${produk.harga}.`,
        stok: produk.stok,
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Cek Ketersediaan Produk</h2>
      <form onSubmit={handleCek}>
        <input
          type="text"
          value={kode}
          onChange={(e) => setKode(e.target.value)}
          placeholder="Masukkan Kode Produk (contoh: PRD001)"
          className="w-full border px-4 py-2 rounded mb-2"
        />
        <button type="submit" className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
          Cek Produk
        </button>
      </form>

      {error && <p className="text-red-600 mt-2">{error}</p>}

      {pesan && (
        <div className="mt-6 p-4 rounded text-center shadow border">
          {pesan.status === "available" && (
            <>
              <FaCheckCircle className="text-green-600 text-4xl mx-auto mb-2" />
              <p className="text-lg font-semibold text-green-700">{pesan.message}</p>
              <p className="text-gray-700">Stok tersedia: <strong>{pesan.stok}</strong></p>
              <FaShoppingCart className="text-gray-600 text-2xl mt-2 mx-auto" />
            </>
          )}

          {pesan.status === "outofstock" && (
            <>
              <FaExclamationTriangle className="text-yellow-600 text-4xl mx-auto mb-2" />
              <p className="text-lg font-semibold text-yellow-700">{pesan.message}</p>
              <img src="/images/out-of-stock.png" alt="Out of Stock" className="w-20 mx-auto mt-2" />
            </>
          )}

          {pesan.status === "notfound" && (
            <>
              <FaTimesCircle className="text-red-600 text-4xl mx-auto mb-2" />
              <p className="text-lg font-semibold text-red-700">{pesan.message}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
