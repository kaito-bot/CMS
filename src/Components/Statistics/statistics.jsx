import { Card,CardBody,CardTitle,CardText,CardSubtitle,Button } from 'reactstrap';
import './statistics.css'

function Statistics() {
    return ( <div className='Statistics'>
        <div className='Stats-cards'>
        <Card>
      <CardBody>
        <CardTitle tag="h1">
          Students
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Until 2024
        </CardSubtitle>
        <CardText className='cardtext'>
           1000+
        </CardText>
        
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle tag="h1">
          Staff members
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Until 2024
        </CardSubtitle>
        <CardText className='cardtext'>
          300+
        </CardText>
        
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle tag="h1">
          Courses
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText className='cardtext'>
          300+
        </CardText>
        
      </CardBody>
    </Card>
   </div></div>
     );
}

export default Statistics;