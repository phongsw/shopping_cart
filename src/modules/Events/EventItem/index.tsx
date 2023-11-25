interface EventItemProps {
  date?: string;
  month?: string;
  title?: string;
  time?: string;
}

const EventItem = ({ date, month, title, time }: EventItemProps) => {
  return (
    <li>
      <div className="left-date">
        <span className="date">{date}</span>
        <span className="month">{month}</span>
      </div>
      <div className="event-content">
        <h3>{title}</h3>
        <span>{time}</span>
      </div>
    </li>
  );
};

export default EventItem;
