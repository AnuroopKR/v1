import dbConnect from "@/lib/db";
import { Achievement } from "@/models";
import { Plus, Trash2, Trophy } from "lucide-react";
import { createAchievement, deleteAchievement } from "@/lib/actions";

export default async function AchievementsAdminPage() {
    await dbConnect();
    const achievements = await Achievement.find({}).sort({ year: -1 });

    return (
        <div className="space-y-12">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-black italic uppercase tracking-tighter text-primary">
                        Hall of <span className="text-accent underline">Fame</span>
                    </h1>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">
                        Documentation of club victories and milestones
                    </p>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-1">
                    <form action={createAchievement} className="bg-white p-10 rounded-[3.5rem] shadow-sm border border-slate-100 space-y-8 sticky top-8">
                        <h2 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3">
                            Add Victory
                            <Trophy size={24} className="text-accent" />
                        </h2>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-2">Achievement Title</label>
                                <input name="title" required className="w-full p-5 bg-slate-50 rounded-2xl outline-none focus:ring-4 ring-accent/30 transition-all font-bold text-primary" placeholder="District Cup 2024" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-2">Year</label>
                                <input name="year" required className="w-full p-5 bg-slate-50 rounded-2xl outline-none focus:ring-4 ring-accent/30 transition-all font-bold text-primary" placeholder="2024" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-2">Description</label>
                                <textarea name="desc" required className="w-full p-5 bg-slate-50 rounded-2xl h-32 outline-none focus:ring-4 ring-accent/30 transition-all font-bold text-primary resize-none" placeholder="Details of the victory..."></textarea>
                            </div>
                        </div>
                        <button type="submit" className="w-full py-6 bg-primary text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-xl active:scale-95 uppercase tracking-widest text-sm flex items-center justify-center gap-3">
                            <Plus size={20} />
                            Record Victory
                        </button>
                    </form>
                </div>

                <div className="lg:col-span-2 space-y-6">
                    {achievements.length === 0 ? (
                        <div className="bg-white/50 p-20 rounded-[3.5rem] border-2 border-dashed border-slate-200 text-center">
                            <h3 className="text-xl font-black text-slate-300 uppercase italic">The Archives are Empty</h3>
                        </div>
                    ) : (
                        achievements.map((item) => (
                            <div key={item._id.toString()} className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100 flex items-center justify-between group hover:shadow-lg transition-all">
                                <div className="flex items-center gap-8">
                                    <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 font-black text-2xl group-hover:bg-accent group-hover:text-primary transition-all">
                                        {item.year.slice(-2)}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-primary uppercase tracking-tighter">{item.title}</h3>
                                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{item.year}</p>
                                        <p className="text-slate-500 font-medium mt-2 italic">&quot;{item.desc}&quot;</p>
                                    </div>
                                </div>
                                <form action={deleteAchievement.bind(null, item._id.toString())}>
                                    <button className="p-4 bg-red-50 text-red-400 hover:bg-red-500 hover:text-white rounded-2xl transition-all opacity-0 group-hover:opacity-100">
                                        <Trash2 size={22} />
                                    </button>
                                </form>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
