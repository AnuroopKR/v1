import dbConnect from "@/lib/db";
import { Gallery } from "@/models";
import { Plus, Trash2, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { deleteGalleryItem } from "@/lib/actions";
import Image from "next/image";

export default async function GalleryAdminPage() {
    await dbConnect();
    const items = await Gallery.find({}).sort({ createdAt: -1 });

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-black italic uppercase tracking-tighter text-primary">
                        Manage <span className="text-accent underline">Gallery</span>
                    </h1>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">
                        Curate the club&apos;s visual heritage
                    </p>
                </div>
                <Link
                    href="/admin/gallery/new"
                    className="flex items-center gap-2 px-6 py-4 bg-primary text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-xl active:scale-95 uppercase tracking-widest text-sm"
                >
                    <Plus size={20} />
                    Add Image
                </Link>
            </div>

            {items.length === 0 ? (
                <div className="bg-white p-20 rounded-[3.5rem] border-2 border-dashed border-slate-200 text-center">
                    <ImageIcon className="mx-auto text-slate-200 mb-6" size={64} />
                    <h3 className="text-2xl font-black text-slate-300 uppercase italic">No Images Found</h3>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mt-2">Start by archiving your first memory</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item) => (
                        <div key={item._id.toString()} className="bg-white p-4 rounded-[2.5rem] shadow-sm border border-slate-100 group hover:shadow-xl transition-all relative overflow-hidden">
                            <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-inner bg-slate-100 mb-4">
                                <Image src={item.imageUrl} alt={item.caption || "Gallery Image"} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>

                            <div className="px-2 pb-2 flex justify-between items-center">
                                <div>
                                    <p className="text-primary font-black uppercase text-sm truncate max-w-[150px]">
                                        {item.caption || "Untilted Moment"}
                                    </p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                                        Archived {(item.createdAt as Date).toLocaleDateString()}
                                    </p>
                                </div>
                                <form action={deleteGalleryItem.bind(null, item._id.toString())}>
                                    <button className="p-4 bg-red-50 text-red-400 hover:bg-red-500 hover:text-white rounded-2xl transition-all">
                                        <Trash2 size={20} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
