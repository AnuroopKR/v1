"use server";

import dbConnect from "./db";
import { Event, Achievement, TeamMember, Gallery } from "../models";
import { revalidatePath } from "next/cache";

// --- EVENT ACTIONS ---
export async function createEvent(formData: FormData) {
    try {
        await dbConnect();
        const rawData = {
            title: formData.get("title") as string,
            date: formData.get("date") as string,
            time: formData.get("time") as string,
            venue: formData.get("venue") as string,
            description: formData.get("description") as string,
            image: formData.get("image") as string,
            isPast: formData.get("isPast") === "true",
        };
        await Event.create(rawData);
        revalidatePath("/admin/events");
        revalidatePath("/");
        return { success: true };
    } catch (error) {
        console.error("Failed to create event:", error);
        return { success: false, error: "Failed to create event" };
    }
}

export async function deleteEvent(id: string) {
    await dbConnect();
    await Event.findByIdAndDelete(id);
    revalidatePath("/admin/events");
    revalidatePath("/");
}

// --- ACHIEVEMENT ACTIONS ---
export async function createAchievement(formData: FormData) {
    await dbConnect();
    await Achievement.create({
        title: formData.get("title") as string,
        year: formData.get("year") as string,
        desc: formData.get("desc") as string,
    });
    revalidatePath("/admin/achievements");
    revalidatePath("/");
}

export async function deleteAchievement(id: string) {
    await dbConnect();
    await Achievement.findByIdAndDelete(id);
    revalidatePath("/admin/achievements");
    revalidatePath("/");
}

// --- TEAM ACTIONS ---
export async function createTeamMember(formData: FormData) {
    await dbConnect();
    await TeamMember.create({
        name: formData.get("name") as string,
        role: formData.get("role") as string,
        image: formData.get("image") as string,
    });
    revalidatePath("/admin/team");
    revalidatePath("/");
}

export async function deleteTeamMember(id: string) {
    await dbConnect();
    await TeamMember.findByIdAndDelete(id);
    revalidatePath("/admin/team");
    revalidatePath("/");
}

// --- GALLERY ACTIONS ---
export async function createGalleryItem(formData: FormData) {
    try {
        await dbConnect();
        await Gallery.create({
            imageUrl: formData.get("imageUrl") as string,
            caption: formData.get("caption") as string,
        });
        revalidatePath("/admin/gallery");
        revalidatePath("/");
        return { success: true };
    } catch (error) {
        console.error("Failed to create gallery item:", error);
        return { success: false, error: "Failed to add image to gallery" };
    }
}

export async function deleteGalleryItem(id: string) {
    await dbConnect();
    await Gallery.findByIdAndDelete(id);
    revalidatePath("/admin/gallery");
    revalidatePath("/");
}
