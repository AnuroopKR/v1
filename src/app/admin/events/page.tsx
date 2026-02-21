import dbConnect from "@/lib/db";
import { Event } from "@/models";
import { Plus, Trash2, Edit, Calendar } from "lucide-react";
import Link from "next/link";
import { deleteEvent } from "@/lib/actions";
import Image from "next/image";

export default async function EventsAdminPage() {
    await dbConnect();
    const events = await Event.find({}).sort({ createdAt: -1 });

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-black italic uppercase tracking-tighter text-primary">
                        Manage <span className="text-accent underline">Events</span>
                    </h1>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">
                        Schedule and organize club activities
                    </p>
                </div>
                <Link
                    href="/admin/events/new"
                    className="flex items-center gap-2 px-6 py-4 bg-primary text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-xl active:scale-95 uppercase tracking-widest text-sm"
                >
                    <Plus size={20} />
                    Create Event
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {events.length === 0 ? (
                    <div className="bg-white p-20 rounded-[3.5rem] border-2 border-dashed border-slate-200 text-center">
                        <Calendar className="mx-auto text-slate-200 mb-6" size={64} />
                        <h3 className="text-2xl font-black text-slate-300 uppercase italic">No Events Found</h3>
                        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mt-2">Start by creating your first event</p>
                    </div>
                ) : (
                    events.map((event) => (
                        <div key={event._id.toString()} className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 flex items-center gap-8 group hover:shadow-xl transition-all">
                            <div className="relative w-32 h-32 rounded-3xl overflow-hidden shadow-inner bg-slate-100 shrink-0">
                                {event.image ? (
                                    <Image src={event.image} alt={event.title} fill className="object-cover" />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-slate-300">
                                        <Calendar size={32} />
                                    </div>
                                )}
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-2">
                                    <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${event.isPast ? 'bg-slate-100 text-slate-400' : 'bg-green-100 text-green-600'}`}>
                                        {event.isPast ? 'Past' : 'Upcoming'}
                                    </span>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">📅 {event.date} • {event.time}</span>
                                </div>
                                <h3 className="text-2xl font-black text-primary uppercase tracking-tighter">{event.title}</h3>
                                <p className="text-sm text-slate-500 font-medium line-clamp-1 italic">{event.description}</p>
                            </div>

                            <div className="flex gap-2">
                                <button className="p-4 bg-slate-50 text-slate-400 hover:text-primary hover:bg-slate-100 rounded-2xl transition-all">
                                    <Edit size={20} />
                                </button>
                                <form action={deleteEvent.bind(null, event._id.toString())}>
                                    <button className="p-4 bg-red-50 text-red-400 hover:bg-red-500 hover:text-white rounded-2xl transition-all">
                                        <Trash2 size={20} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
