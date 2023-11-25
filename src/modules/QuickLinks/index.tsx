import { Link } from 'react-router-dom';
import trainingIc from '@/assets/img/icon.png';
import organizationIc from '@/assets/img/icon-1.png';
import taskIc from '@/assets/img/icon-2.png';
import globalSaleIc from '@/assets/img/icon-3.png';
import birthdayIc from '@/assets/img/icon-4.png';
import healthIc from '@/assets/img/icon-5.png';
import serviceIc from '@/assets/img/icon-6.png';
import truckIc from '@/assets/img/icon-7.png';
import ideaIc from '@/assets/img/icon-8.png';

import './style.scss';

const QuickLinks = () => {
  return (
    <div className="quick-links">
      <h2>Quick Links</h2>
      <ul className="group-link">
        <li>
          <Link to="/">
            <img src={trainingIc} alt="icon" />
            <span>Training</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={organizationIc} alt="icon" />
            <span>Organization</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={taskIc} alt="icon" />
            <span>Task</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={globalSaleIc} alt="icon" />
            <span>Global Sales</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={birthdayIc} alt="icon" />
            <span>Birthday</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={healthIc} alt="icon" />
            <span>Health</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={serviceIc} alt="icon" />
            <span>Service Desk</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={truckIc} alt="icon" />
            <span>Truck</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={ideaIc} alt="training icon" />
            <span>Idea</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
