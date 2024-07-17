import { Card,CardBody,CardTitle,CardText,CardSubtitle,Button } from 'reactstrap';
import './dashboard-welcome.css';
import EventCards from '../EventCards/EventCards';
import Statistics from '../Statistics/statistics';

function DashboardWelcome() {
    return ( 
        <div className='dashboard-area'>
            <Statistics/>
            <EventCards/>
    </div>
       
     );
}

export default DashboardWelcome;