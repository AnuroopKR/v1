import { Schema, model, models } from 'mongoose';

// Event Schema
const EventSchema = new Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    venue: { type: String },
    image: { type: String },
    description: { type: String },
    isPast: { type: Boolean, default: false },
}, { timestamps: true });

export const Event = models.Event || model('Event', EventSchema);

// Achievement Schema
const AchievementSchema = new Schema({
    title: { type: String, required: true },
    year: { type: String, required: true },
    desc: { type: String, required: true },
}, { timestamps: true });

export const Achievement = models.Achievement || model('Achievement', AchievementSchema);

// Team Member Schema
const TeamMemberSchema = new Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    image: { type: String },
}, { timestamps: true });

export const TeamMember = models.TeamMember || model('TeamMember', TeamMemberSchema);

// Gallery Schema
const GallerySchema = new Schema({
    imageUrl: { type: String, required: true },
    caption: { type: String },
}, { timestamps: true });

export const Gallery = models.Gallery || model('Gallery', GallerySchema);
