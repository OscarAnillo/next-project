import EventItem from "./event-item";

export default function EventList({ items }) {
  return (
    <div>
      <ul>
        {items.map((event) => (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        ))}
      </ul>
    </div>
  );
}
