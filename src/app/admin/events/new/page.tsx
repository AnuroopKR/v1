"use client";

import { createEvent } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

export default function NewEventPage() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.currentTarget);
        const result = await createEvent(formData);

        if (result?.success) {
            router.push("/admin/events");
        } else {
            alert(result?.error || "An unexpected error occurred");
        }
        setIsLoading(false);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-10">
            <div className="flex items-center gap-6">
                <Link href="/admin/events" className="p-4 bg-white rounded-2xl shadow-sm border border-slate-200 hover:bg-slate-50 transition-all text-slate-400 hover:text-primary">
                    <ArrowLeft size={24} />
                </Link>
                <div>
                    <h1 className="text-4xl font-black italic uppercase tracking-tighter text-primary">
                        Initiate <span className="text-accent underline">New Event</span>
                    </h1>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">
                        Add a new milestone to the Vijnjodaya timeline
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-slate-100 space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-2">Event Title</label>
                        <input name="title" required className="w-full p-6 bg-slate-50 rounded-3xl outline-none focus:ring-4 ring-accent/30 transition-all font-black text-primary" placeholder="e.g. Annual Sports Meet" />
                    </div>
                    <div className="space-y-4">
                        <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-2">Image URL</label>
                        <input name="image" className="w-full p-6 bg-slate-50 rounded-3xl outline-none focus:ring-4 ring-accent/30 transition-all font-black text-primary" placeholder="https://unsplash.com/..." />
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    <div className="space-y-4">
                        <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-2">Date</label>
                        <input name="date" type="date" required className="w-full p-6 bg-slate-50 rounded-3xl outline-none focus:ring-4 ring-accent/30 transition-all font-black text-primary" />
                    </div>
                    <div className="space-y-4">
                        <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-2">Time</label>
                        <input name="time" type="time" required className="w-full p-6 bg-slate-50 rounded-3xl outline-none focus:ring-4 ring-accent/30 transition-all font-black text-primary" />
                    </div>
                    <div className="space-y-4">
                        <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-2">Status</label>
                        <select name="isPast" className="w-full p-6 bg-slate-50 rounded-3xl outline-none focus:ring-4 ring-accent/30 transition-all font-black text-primary appearance-none">
                            <option value="false">Upcoming</option>
                            <option value="true">Past Event</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-4">
                    <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-2">Venue</label>
                    <input name="venue" required className="w-full p-6 bg-slate-50 rounded-3xl outline-none focus:ring-4 ring-accent/30 transition-all font-black text-primary" placeholder="Kottoor Backwaters" />
                </div>

                <div className="space-y-4">
                    <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-2">Intelligence (Description)</label>
                    <textarea name="description" required className="w-full p-6 bg-slate-50 rounded-3xl h-48 outline-none focus:ring-4 ring-accent/30 transition-all font-black text-primary resize-none" placeholder="Describe the significance of this event..."></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-8 bg-primary text-white font-black rounded-3xl hover:bg-slate-800 transition-all shadow-[0_20px_50px_rgba(15,23,42,0.3)] active:scale-95 uppercase tracking-widest text-xl flex items-center justify-center gap-4 disabled:opacity-50"
                >
                    <Save size={24} />
                    {isLoading ? "Synchronizing..." : "Publish Event"}
                </button>
            </form>
        </div>
    );
}
