


import React, { useState, useEffect } from 'react';
import { Upload, CheckCircle, Trash2, Edit, X } from 'lucide-react';
import { specialsApi } from '../api/api';

interface Special {
  _id: string;
  title: string;
  description: string;
  validUpTo: string;
  imageLink: string;
}

export default function AdminSpecials() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // Form State
  const [title, setTitle] = useState('');
  const [validUpTo, setValidUpTo] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // List State
  const [specials, setSpecials] = useState<Special[]>([]);

  // Fetch Specials
  const fetchSpecials = async () => {
    try {
      const data = await specialsApi.getAll();
      setSpecials(data);
    } catch (err) { console.error(err); }
  };

  useEffect(() => {
    if (isAuthenticated) fetchSpecials();
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      fetchSpecials();
    } else {
      alert('Incorrect Password');
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setValidUpTo('');
    setImageFile(null);
    setEditingId(null);
  };

  const handleEdit = (special: Special) => {
    setEditingId(special._id);
    setTitle(special.title);
    setDescription(special.description);
    // Format date for input "YYYY-MM-DD"
    const date = new Date(special.validUpTo);
    setValidUpTo(date.toISOString().split('T')[0]);
    setImageFile(null); // Keep existing image unless new one uploaded
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!editingId && !imageFile) return alert("Please select an image for new specials");

    setUploading(true);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('validUpTo', validUpTo);
    if (imageFile) {
      formData.append('image', imageFile);
    }

    try {
      if (editingId) {
        await specialsApi.update(editingId, formData, import.meta.env.VITE_ADMIN_PASSWORD);
        alert("Special Updated!");
      } else {
        await specialsApi.create(formData, import.meta.env.VITE_ADMIN_PASSWORD);
        alert("Special Published!");
      }
      resetForm();
      fetchSpecials();
    } catch (error: unknown) {
      console.error(error);
      alert("Request failed: " + (error instanceof Error ? error.message : String(error)));
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this special?")) return;

    try {
      await specialsApi.delete(id, import.meta.env.VITE_ADMIN_PASSWORD);
      fetchSpecials();
    } catch (err) { console.error(err); }
  };

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f1d33] p-4">
        <form onSubmit={handleLogin} className="bg-[#0a1628] p-8 rounded-xl border border-[#d4af37] w-full max-w-sm text-center">
          <h2 className="text-2xl font-bold text-[#d4af37] mb-6">Admin Access</h2>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-3 mb-4 bg-[#0f1d33] border border-[#d4af37]/50 rounded text-white" placeholder="Password" />
          <button className="w-full bg-[#d4af37] text-black font-bold py-3 rounded">Login</button>
        </form>
      </div>
    );
  }

  // DASHBOARD SCREEN
  return (
    <div className="min-h-screen py-20 bg-[#0f1d33] text-[#f5f5dc]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-[#d4af37]">Manage Specials</h2>
          <button onClick={() => setIsAuthenticated(false)} className="text-sm text-red-400 hover:text-red-300">Logout</button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-[#0a1628] p-8 rounded-xl border border-[#d4af37]/30 space-y-6 mb-12 relative">
          {editingId && (
            <div className="absolute top-4 right-4 bg-blue-900/50 text-blue-200 px-3 py-1 rounded text-xs border border-blue-500/30 flex items-center gap-2">
              Editing Mode <button type="button" onClick={resetForm}><X size={14} /></button>
            </div>
          )}

          <input required type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Special Title" className="w-full p-3 bg-[#0f1d33] border border-[#d4af37]/30 rounded text-white focus:border-[#d4af37] outline-none transition-colors" />

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-xs text-[#d4af37] uppercase font-bold tracking-wider mb-1 block">Valid Until</label>
              <input required type="date" value={validUpTo} onChange={e => setValidUpTo(e.target.value)} className="w-full p-3 bg-[#0f1d33] border border-[#d4af37]/30 rounded text-white focus:border-[#d4af37] outline-none transition-colors" />
            </div>
          </div>

          <textarea required value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" className="w-full p-3 bg-[#0f1d33] border border-[#d4af37]/30 rounded text-white h-24 focus:border-[#d4af37] outline-none transition-colors" />

          <div className="border border-dashed border-[#d4af37]/30 p-4 rounded text-center hover:bg-[#0f1d33]/50 transition-colors">
            <p className="text-xs text-gray-400 mb-2">{editingId ? "Upload to replace image (optional)" : "Upload Image (Required)"}</p>
            <input type="file" onChange={e => setImageFile(e.target.files ? e.target.files[0] : null)} className="text-white text-sm" accept="image/*" />
          </div>

          <button disabled={uploading} className="w-full bg-[#d4af37] py-3 text-black font-bold rounded flex items-center justify-center gap-2 hover:bg-[#e6c158] transition-colors">
            {uploading ? 'Processing...' : <>{editingId ? <CheckCircle size={20} /> : <Upload size={20} />} {editingId ? "Update Special" : "Publish Special"}</>}
          </button>
        </form>

        {/* List */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-[#d4af37] mb-6 border-b border-[#d4af37]/30 pb-2">Existing Specials</h3>

          <div className="grid gap-4">
            {specials.length === 0 && <p className="text-gray-400 text-center">No specials found.</p>}

            {specials.map(special => (
              <div key={special._id} className="flex items-center justify-between bg-[#0a1628] p-4 rounded-lg border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-colors">
                <div className="flex items-center gap-4">
                  <img src={special.imageLink} alt={special.title} className="w-16 h-16 object-cover rounded bg-gray-800" />
                  <div>
                    <h4 className="font-bold text-[#f5f5dc] text-lg">{special.title}</h4>
                    <p className="text-sm text-[#d4af37]">Valid: {new Date(special.validUpTo).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleEdit(special)}
                    className="p-2 text-blue-400 hover:bg-blue-900/20 rounded-full transition-colors border border-transparent hover:border-blue-400/30"
                    title="Edit"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(special._id)}
                    className="p-2 text-red-400 hover:bg-red-900/20 rounded-full transition-colors border border-transparent hover:border-red-400/30"
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}