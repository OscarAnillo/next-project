import { getAllEvents } from "../../dymmy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

export default function AllEventsPage() {
  const events = getAllEvents();
  return (
    <div>
      <EventsSearch />
      <EventList items={events} />
    </div>
  );
}
