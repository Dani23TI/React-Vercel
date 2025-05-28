import React, { useState } from "react";
import members from "../data/members.json";
import { FaCheckCircle, FaTimesCircle, FaMedal } from "react-icons/fa";

export default function CekMember() {
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState(null);
  const [error, setError] = useState("");

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email tidak boleh kosong.");
      setPesan(null);
      return;
    }

    if (!validateEmail(email)) {
      setError("Format email tidak valid.");
      setPesan(null);
      return;
    }

    setError("");

    const member = members.find((m) => m.email.toLowerCase() === email.toLowerCase());

    if (member) {
      setPesan({
        status: "found",
        nama: member.nama,
        tipe: member.tipe_member,
      });
    } else {
      setPesan({ status: "notfound" });
    }
  };

  const getBadgeStyle = (tipe) => {
    switch (tipe) {
      case "silver":
        return "text-gray-600 bg-gray-200";
      case "gold":
        return "text-yellow-700 bg-yellow-100";
      case "platinum":
        return "text-blue-700 bg-blue-100";
      default:
        return "";
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Cek Keanggotaan</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Masukkan email member"
          className="w-full border px-4 py-2 rounded mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Cek Member
        </button>
      </form>

      {error && <p className="text-red-600 mt-2">{error}</p>}

      {pesan && pesan.status === "found" && (
        <div className={`mt-6 p-4 text-center rounded shadow ${getBadgeStyle(pesan.tipe)}`}>
          <FaCheckCircle className="text-green-600 text-3xl mx-auto mb-2" />
          <p className="text-lg font-semibold">
            🧾 Selamat datang, {pesan.nama}! Anda adalah member{" "}
            <span className="capitalize font-bold">{pesan.tipe}</span>.
          </p>
          <FaMedal className="mx-auto text-2xl mt-2" />
        </div>
      )}

      {pesan && pesan.status === "notfound" && (
        <div className="mt-6 p-4 text-center rounded bg-red-100 text-red-700 shadow">
          <FaTimesCircle className="text-red-600 text-3xl mx-auto mb-2" />
          <p className="text-lg font-semibold">❌ Email tidak terdaftar sebagai member.</p>
        </div>
      )}
    </div>
  );
}
