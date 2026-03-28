import dbConnect from "@/lib/db";
import { Event } from "@/models";
import EditEventClient from "./EditEventClient";
import { notFound } from "next/navigation";

export default async function EditEventPage(props: { params: Promise<{ id: string }> }) {
    // Await params based on Next.js 15 rules
    const params = await props.params;
    
    await dbConnect();
    const event = await Event.findById(params.id);
    
    if (!event) {
        return notFound();
    }
    
    // Pass serialized MongoDB document data to the client component
    return <EditEventClient event={JSON.parse(JSON.stringify(event))} />;
}
