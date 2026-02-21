import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import {
    Users,
    Calendar,
    Trophy,
    Eye,
    TrendingUp,
    ArrowUpRight
} from "lucide-react";
import dbConnect from "@/lib/db";
import { Event, Achievement, TeamMember } from "@/models";

export default async function DashboardPage() {
    const session = await auth();
    if (!session) redirect("/admin/login");

    const conn = await dbConnect();

    let eventCount = 0;
    let achievementCount = 0;
    let teamCount = 0;

    if (conn) {
        eventCount = await Event.countDocuments();
        achievementCount = await Achievement.countDocuments();
        teamCount = await TeamMember.countDocuments();
    }

    const stats = [
        { name: "Total Events", value: eventCount, icon: Calendar, color: "text-blue-600", bg: "bg-blue-100" },
        { name: "Hall of Fame", value: achievementCount, icon: Trophy, color: "text-amber-600", bg: "bg-amber-100" },
        { name: "Team Members", value: teamCount, icon: Users, color: "text-emerald-600", bg: "bg-emerald-100" },
        { name: "Site Views", value: "1.2k", icon: Eye, color: "text-purple-600", bg: "bg-purple-100" },
    ];

    return (
        <div className="space-y-10">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-black italic uppercase tracking-tighter text-primary">
                        Dashboard <span className="text-accent underline">Overview</span>
                    </h1>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">
                        Welcome back, {session.user?.name}
                    </p>
                </div>
                <div className="flex gap-4">
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-3">
                        <div className="p-2 bg-green-100 rounded-lg text-green-600">
                            <TrendingUp size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase text-slate-400 leading-none">Status</p>
                            <p className="text-sm font-black text-primary uppercase">Systems Live</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.name} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group overflow-hidden relative">
                        <div className={`absolute top-0 right-0 w-32 h-32 ${stat.bg} opacity-20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform`}></div>

                        <div className="relative z-10 flex justify-between items-start">
                            <div className={`p-4 ${stat.bg} ${stat.color} rounded-2xl shadow-inner`}>
                                <stat.icon size={28} />
                            </div>
                            <ArrowUpRight className="text-slate-300 group-hover:text-primary transition-colors" size={20} />
                        </div>

                        <div className="mt-8 relative z-10">
                            <p className="text-4xl font-black text-primary tracking-tighter">{stat.value}</p>
                            <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mt-1">{stat.name}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
                <div className="bg-white p-10 rounded-[3.5rem] shadow-sm border border-slate-100">
                    <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
                        Recent Activity
                        <span className="w-2 h-2 bg-accent rounded-full animate-ping"></span>
                    </h2>
                    <div className="space-y-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex gap-6 items-center p-4 rounded-3xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                <div className="w-12 h-12 bg-slate-100 rounded-2xl border-2 border-white shadow-sm flex items-center justify-center font-black text-primary">
                                    {i}
                                </div>
                                <div>
                                    <p className="font-black text-primary uppercase text-sm">Update performed on {i === 1 ? 'Events' : 'Gallery'}</p>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{2 * i} hours ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-primary p-10 rounded-[3.5rem] shadow-2xl relative overflow-hidden text-white">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                    <h2 className="text-2xl font-black uppercase tracking-tighter mb-4 relative z-10">Quick Launch</h2>
                    <p className="text-white/60 font-medium mb-10 relative z-10">Instantly modify your club&apos;s digital presence.</p>

                    <div className="grid grid-cols-2 gap-4 relative z-10">
                        <Link href="/admin/events/new" className="p-6 bg-white/10 hover:bg-white/20 rounded-3xl border border-white/10 transition-all font-black uppercase tracking-widest text-[10px] text-center">
                            New Event
                        </Link>
                        <Link href="/admin/gallery/new" className="p-6 bg-white/10 hover:bg-white/20 rounded-3xl border border-white/10 transition-all font-black uppercase tracking-widest text-[10px] text-center">
                            Add Image
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
