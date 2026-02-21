import dbConnect from "@/lib/db";
import { TeamMember } from "@/models";
import { Plus, Trash2, Users } from "lucide-react";
import { createTeamMember, deleteTeamMember } from "@/lib/actions";
import Image from "next/image";

export default async function TeamAdminPage() {
    await dbConnect();
    const members = await TeamMember.find({}).sort({ createdAt: 1 });

    return (
        <div className="space-y-12">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-black italic uppercase tracking-tighter text-primary">
                        Leadership <span className="text-accent underline">Core</span>
                    </h1>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">
                        Manage the architects of Vijnjodaya
                    </p>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-1">
                    <form action={createTeamMember} className="bg-white p-10 rounded-[3.5rem] shadow-sm border border-slate-100 space-y-8 sticky top-8">
                        <h2 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3">
                            Add Member
                            <Users size={24} className="text-accent" />
                        </h2>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-2">Full Identity</label>
                                <input name="name" required className="w-full p-5 bg-slate-50 rounded-2xl outline-none focus:ring-4 ring-accent/30 transition-all font-bold text-primary" placeholder="Prashanth K" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-2">Role/Position</label>
                                <input name="role" required className="w-full p-5 bg-slate-50 rounded-2xl outline-none focus:ring-4 ring-accent/30 transition-all font-bold text-primary" placeholder="President" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-2">Image URL</label>
                                <input name="image" className="w-full p-5 bg-slate-50 rounded-2xl outline-none focus:ring-4 ring-accent/30 transition-all font-bold text-primary" placeholder="https://i.pravatar.cc/..." />
                            </div>
                        </div>
                        <button type="submit" className="w-full py-6 bg-primary text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-xl active:scale-95 uppercase tracking-widest text-sm flex items-center justify-center gap-3">
                            <Plus size={20} />
                            Enlist Member
                        </button>
                    </form>
                </div>

                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {members.length === 0 ? (
                        <div className="col-span-full bg-white/50 p-20 rounded-[3.5rem] border-2 border-dashed border-slate-200 text-center">
                            <h3 className="text-xl font-black text-slate-300 uppercase italic">No Leadership Data</h3>
                        </div>
                    ) : (
                        members.map((member) => (
                            <div key={member._id.toString()} className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-lg transition-all relative">
                                <div className="relative w-32 h-32 mb-6">
                                    <div className="absolute inset-0 bg-accent rounded-[2.5rem] rotate-6 group-hover:rotate-12 transition-transform shadow-lg opacity-20"></div>
                                    <Image
                                        src={member.image || "/logo.png"}
                                        alt={member.name}
                                        fill
                                        className="object-cover rounded-[2.5rem] border-4 border-white relative z-10 shadow-xl"
                                    />
                                </div>
                                <h3 className="text-2xl font-black text-primary uppercase tracking-tighter mb-1">{member.name}</h3>
                                <p className="text-xs font-black uppercase tracking-widest text-accent-dark">{member.role}</p>

                                <form action={deleteTeamMember.bind(null, member._id.toString())} className="absolute top-6 right-6">
                                    <button className="p-3 bg-red-50 text-red-400 hover:bg-red-500 hover:text-white rounded-xl transition-all opacity-0 group-hover:opacity-100">
                                        <Trash2 size={18} />
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
