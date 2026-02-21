"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formStatus, setFormStatus] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("Transmitting...");
        setTimeout(() => setFormStatus("Transmitted!"), 1000);
    };

    return (
        <div className="relative z-10 bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-10">
                <div className="space-y-4">
                    <label className="block text-sm font-black uppercase text-primary/30 tracking-widest ml-2">Full Identity</label>
                    <input type="text" className="w-full p-6 bg-slate-50/50 rounded-3xl outline-none focus:ring-4 ring-accent/50 transition-all font-black text-primary text-lg" placeholder="e.g. Rahul Nair" required />
                </div>
                <div className="space-y-4">
                    <label className="block text-sm font-black uppercase text-primary/30 tracking-widest ml-2">Your Mission</label>
                    <textarea className="w-full p-6 bg-slate-50/50 rounded-3xl h-48 outline-none focus:ring-4 ring-accent/50 transition-all font-black text-primary text-lg resize-none" placeholder="How do you wish to contribute?" required></textarea>
                </div>
                <button type="submit" className="w-full py-8 bg-primary text-white font-black rounded-3xl hover:bg-slate-800 transition-all shadow-[0_20px_40px_rgba(6,78,59,0.3)] active:scale-[0.98] text-xl uppercase tracking-widest">
                    {formStatus || "Transmit Intelligence"}
                </button>
            </form>
        </div>
    );
}
