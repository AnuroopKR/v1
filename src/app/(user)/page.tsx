import dbConnect from "@/lib/db";
import { Event, Achievement, TeamMember } from "@/models";
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
      />
    );
  }

  const dbEvents = await Event.find({ isPast: false }).sort({ date: 1 }).limit(10);
  const dbPastEvents = await Event.find({ isPast: true }).sort({ date: -1 }).limit(10);
  const dbAchievements = await Achievement.find({}).sort({ year: -1 });
  const dbTeamMembers = await TeamMember.find({}).sort({ createdAt: 1 });

  // Serialization helper to convert MongoDB objects to plain objects for client components
  const serialize = (data: any) => data ? JSON.parse(JSON.stringify(data)) : [];

  const events = serialize(dbEvents);
  const pastEvents = serialize(dbPastEvents);
  const achievementData = serialize(dbAchievements);
  const teamMembers = serialize(dbTeamMembers);

  return (
    <LandingPageContent
      events={events}
      pastEvents={pastEvents}
      achievementData={achievementData}
      teamMembers={teamMembers}
    />
  );
}
