import EventItem from './EventItem';
import arrowIc from '@/assets/img/arrow_icon.png';
import './style.scss';

const Events = () => {
  const events = [
    {
      date: '01',
      month: 'Jan',
      title: 'Register Portal',
      time: '09:00 AM - 09:30 AM',
    },
    {
      date: '02',
      month: 'Jan',
      title: 'IT Maintenance',
      time: '10:00 AM - 11:00 AM',
    },
    {
      date: '03',
      month: 'Jan',
      title: 'IT MaintenanceA',
      time: '02:00 PM - 03:00 PM',
    },
    {
      date: '04',
      month: 'Jan',
      title: 'IT MaintenanceB',
      time: '02:00 PM - 03:00 PM',
    },
  ];

  return (
    <div className="events-list">
      <h2>Events</h2>
      <ul className="content-events">
        {events.map((event) => (
          <EventItem key={event.title} {...event} />
        ))}
      </ul>
      <button className="view-more">
        <span>View More</span>
        <img src={arrowIc} alt="icon" />
      </button>
    </div>
  );
};

export default Events;
