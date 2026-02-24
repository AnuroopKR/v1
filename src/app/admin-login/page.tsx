"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const res = await signIn("credentials", {
                username,
                password,
                redirect: false,
            });

            if (res?.error) {
                setError("Invalid credentials. Access denied.");
            } else {
                router.push("/admin/dashboard");
            }
        } catch {
            setError("An unexpected error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-primary flex items-center justify-center p-6 text-white relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="w-full max-w-md relative z-10">
                <div className="bg-white/5 backdrop-blur-3xl p-12 rounded-[3.5rem] border border-white/10 shadow-2xl">
                    <div className="text-center mb-10">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={100}
                            height={100}
                            className="mx-auto mb-6 bg-white/10 rounded-full p-2"
                        />
                        <h1 className="text-4xl font-black italic uppercase tracking-tighter">Command <span className="text-accent">Center</span></h1>
                        <p className="text-white/50 font-bold text-xs uppercase tracking-[0.3em] mt-2">Vijnjodaya Heritage Portal</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase text-white/30 tracking-widest ml-2">Identity</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full p-5 bg-white/5 rounded-2xl outline-none focus:ring-4 ring-accent/30 transition-all font-bold"
                                placeholder="Username"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase text-white/30 tracking-widest ml-2">Secret Key</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-5 bg-white/5 rounded-2xl outline-none focus:ring-4 ring-accent/30 transition-all font-bold"
                                placeholder="Password"
                                required
                            />
                        </div>

                        {error && <p className="text-red-400 text-sm font-bold text-center italic">{error}</p>}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-6 bg-accent hover:bg-white text-primary font-black rounded-2xl transition-all shadow-xl active:scale-95 uppercase tracking-widest text-lg disabled:opacity-50"
                        >
                            {isLoading ? "Authenticating..." : "Authorize Access"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
