import { notesAPI } from "../services/noteAPI"
import { useState } from "react";
import { useEffect } from "react";
import GenericTable from "../components/GenericTable";
import EmptyState from "../components/EmptyState";
import LoadingSpinner from "../components/LoadingSpinner";
import AlertBox from "../components/AlertBox";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

export default function Notes() {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [editingNoteId, setEditingNoteId] = useState(null);
    const [dataForm, setDataForm] = useState({
        title: "",
        content: "",
        status: "",
    });

    useEffect(() => {
        loadNotes()
    }, [])

    // Memanggil fetchNotes beserta error/loading handling
    const loadNotes = async () => {
        try {
            setLoading(true)
            setError("")
            const data = await notesAPI.fetchNotes()
            setNotes(data)
        } catch (err) {
            setError("Gagal memuat catatan")
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    // Handle perubahan nilai input form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError("");
            setSuccess("");

            if (editingNoteId) {
                await notesAPI.updateNote(editingNoteId, dataForm);
                setSuccess("Catatan berhasil diperbarui!");
            } else {
                await notesAPI.createNote(dataForm);
                setSuccess("Catatan berhasil ditambahkan!");
            }

            setDataForm({ title: "", content: "", status: "" });
            setEditingNoteId(null);
            loadNotes();

            setTimeout(() => setSuccess(""), 3000);
        } catch (err) {
            setError('Terjadi kesalahan: ${err.message}');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const konfirmasi = confirm("Yakin ingin menghapus catatan ini?");
        if (!konfirmasi) return;

        try {
            setLoading(true);
            setError("");
            setSuccess("");

            await notesAPI.deleteNote(id);
            loadNotes();
        } catch (err) {
            setError('Terjadi kesalahan: ${err.message}');
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (note) => {
        setDataForm({
            title: note.title,
            content: note.content,
            status: note.status || "",
        });
        setEditingNoteId(note.id);
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Notes App</h2>
            </div>

            {error && <AlertBox type="error">{error}</AlertBox>}
            {success && <AlertBox type="success">{success}</AlertBox>}

            <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {editingNoteId ? "Edit Catatan" : "Tambah Catatan Baru"}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        value={dataForm.title}
                        onChange={handleChange}
                        placeholder="Judul catatan"
                        disabled={loading}
                        required
                        className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    />

                    <textarea
                        name="content"
                        value={dataForm.content}
                        onChange={handleChange}
                        placeholder="Isi catatan"
                        disabled={loading}
                        required
                        rows="2"
                        className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
                    />

                    <button
                        type="submit"
                        className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                        disabled={loading}
                    >
                        {loading
                            ? "Mohon Tunggu..."
                            : editingNoteId
                            ? "Simpan Perubahan"
                            : "Tambah Catatan"}
                    </button>

                    {editingNoteId && (
                        <button
                            type="button"
                            onClick={() => {
                                setEditingNoteId(null);
                                setDataForm({ title: "", content: "", status: "" });
                            }}
                            className="ml-2 px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-2xl focus:outline-none transition-all duration-200 shadow"
                        >
                            Batal
                        </button>
                    )}
                </form>
            </div>

            {/* Daftar Catatan */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-10">
                <div className="px-6 py-4">
                    <h3 className="text-lg font-semibold">Daftar Catatan ({notes.length})</h3>
                </div>

                {loading && <LoadingSpinner text="Memuat catatan..." />}

                {!loading && notes.length === 0 && !error && (
                    <EmptyState text="Belum ada catatan. Tambah catatan pertama!" />
                )}

                {!loading && notes.length === 0 && error && (
                    <EmptyState text="Terjadi Kesalahan. Coba lagi nanti." />
                )}

                {!loading && notes.length > 0 && (
                    <GenericTable
                        columns={["#", "Judul", "Isi Catatan", "Aksi"]}
                        data={notes}
                        renderRow={(note, index) => (
                            <>
                                <td className="px-6 py-4 font-medium text-gray-700">{index + 1}.</td>
                                <td className="px-6 py-4">
                                    <div className="font-semibold text-emerald-600">
                                        {note.title}
                                    </div>
                                </td>
                                <td className="px-6 py-4 max-w-xs">
                                    <div className="truncate text-gray-600">{note.content}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-3 items-center text-xl text-gray-500">
                                        <button onClick={() => handleEdit(note)} disabled={loading}>
                                            <AiFillEdit className="hover:text-emerald-600 transition-colors" />
                                        </button>
                                        <button onClick={() => handleDelete(note.id)} disabled={loading}>
                                            <AiFillDelete className="text-red-400 hover:text-red-600 transition-colors" />
                                        </button>
                                    </div>
                                </td>
                            </>
                        )}
                    />
                )}
            </div>
        </div>
    );
}