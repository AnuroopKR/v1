"use client";

import { createGalleryItem } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, Save, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export default function NewGalleryItemPage() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.currentTarget);
        const result = await createGalleryItem(formData);

        if (result?.success) {
            router.push("/admin/gallery");
        } else {
            alert(result?.error || "An unexpected error occurred");
        }
        setIsLoading(false);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-10">
            <div className="flex items-center gap-6">
                <Link href="/admin/gallery" className="p-4 bg-white rounded-2xl shadow-sm border border-slate-200 hover:bg-slate-50 transition-all text-slate-400 hover:text-primary">
                    <ArrowLeft size={24} />
                </Link>
                <div>
                    <h1 className="text-4xl font-black italic uppercase tracking-tighter text-primary">
                        Add <span className="text-accent underline">Gallery Image</span>
                    </h1>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">
                        Expand the Vijnjodaya visual archives
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-slate-100 space-y-10">
                <div className="space-y-4">
                    <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-2">Image URL</label>
                    <div className="relative">
                        <input
                            name="imageUrl"
                            required
                            className="w-full p-6 pl-14 bg-slate-50 rounded-3xl outline-none focus:ring-4 ring-accent/30 transition-all font-black text-primary"
                            placeholder="https://images.unsplash.com/..."
                        />
                        <ImageIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                    </div>
                </div>

                <div className="space-y-4">
                    <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-2">Caption (Optional)</label>
                    <input
                        name="caption"
                        className="w-full p-6 bg-slate-50 rounded-3xl outline-none focus:ring-4 ring-accent/30 transition-all font-black text-primary"
                        placeholder="e.g. Winners of the 2024 Football Cup"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-8 bg-primary text-white font-black rounded-3xl hover:bg-slate-800 transition-all shadow-[0_20px_50px_rgba(15,23,42,0.3)] active:scale-95 uppercase tracking-widest text-xl flex items-center justify-center gap-4 disabled:opacity-50"
                >
                    <Save size={24} />
                    {isLoading ? "Synchronizing..." : "Archive Image"}
                </button>
            </form>
        </div>
    );
}
