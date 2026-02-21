"use client";
import "../globals.css";
import { useState } from "react";
import Link from "next/link";
import {
    LayoutDashboard,
    Calendar,
    Trophy,
    Users,
    Image as ImageIcon,
    LogOut,
    Menu,
    X
} from "lucide-react";
import { signOut } from "next-auth/react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const navItems = [
        { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
        { name: "Events", href: "/admin/events", icon: Calendar },
        { name: "Achievements", href: "/admin/achievements", icon: Trophy },
        { name: "Team Members", href: "/admin/team", icon: Users },
        { name: "Gallery", href: "/admin/gallery", icon: ImageIcon },
    ];

    return (

        <html lang="en">
            <body>
                <div className="min-h-screen bg-slate-50 flex">
                    {/* Sidebar */}
                    <aside
                        className={`bg-primary text-white transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-20"
                            } flex flex-col h-screen fixed top-0 left-0 z-50`}
                    >
                        <div className="p-6 flex items-center justify-between">
                            {isSidebarOpen && (
                                <span className="font-black text-xl tracking-tighter uppercase italic">
                                    Vijnjodaya <span className="text-accent">Admin</span>
                                </span>
                            )}
                            <button
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>

                        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/10 transition-all group"
                                >
                                    <item.icon size={22} className="group-hover:text-accent transition-colors" />
                                    {isSidebarOpen && <span className="font-bold uppercase tracking-widest text-xs">{item.name}</span>}
                                </Link>
                            ))}
                        </nav>

                        <div className="p-4 mt-auto border-t border-white/10">
                            <button
                                onClick={() => signOut({ callbackUrl: "/" })}
                                className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-red-500/20 text-red-400 transition-all group"
                            >
                                <LogOut size={22} />
                                {isSidebarOpen && <span className="font-bold uppercase tracking-widest text-xs">Sing Out</span>}
                            </button>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-20"} p-8`}>
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
