import dbConnect from "@/lib/db";
import { Event, Achievement, TeamMember, Gallery } from "@/models";
import LandingPageContent from "@/components/LandingPageContent";

export default async function LandingPage() {
  const conn = await dbConnect();

  if (!conn) {
    // Return LandingPageContent with empty/default data if DB is not connected
    return (
      <LandingPageContent
        events={[]}
        pastEvents={[]}
        achievementData={[]}
        teamMembers={[]}
        galleryItems={[]}
      />
    );
  }

  const dbEvents = await Event.find({ isPast: false }).sort({ date: 1 }).limit(10);
  const dbPastEvents = await Event.find({ isPast: true }).sort({ date: -1 }).limit(10);
  const dbAchievements = await Achievement.find({}).sort({ year: -1 });
  const dbTeamMembers = await TeamMember.find({}).sort({ createdAt: 1 });
  const dbGallery = await Gallery.find({}).sort({ createdAt: -1 }).limit(12);

  // Serialization helper to convert MongoDB objects to plain objects for client components
  const serialize = (data: unknown) => data ? JSON.parse(JSON.stringify(data)) : [];

  const events = serialize(dbEvents);
  const pastEvents = serialize(dbPastEvents);
  const achievementData = serialize(dbAchievements);
  const teamMembers = serialize(dbTeamMembers);
  const galleryItems = serialize(dbGallery);

  return (
    <LandingPageContent
      events={events}
      pastEvents={pastEvents}
      achievementData={achievementData}
      teamMembers={teamMembers}
      galleryItems={galleryItems}
    />
  );
}
