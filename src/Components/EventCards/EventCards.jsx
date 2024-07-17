import { Card,CardBody,CardTitle,CardText,CardSubtitle,Button } from 'reactstrap';
import './eventcards.css';


function EventCards() {
    return ( <div className='event-cards'>
        <div className='events-title'>
        <h1>Upcoming Events</h1>
    </div>
    <div className='dashboard-event-cards'>
        <Card
       style={{
         width: '18rem'
       }}
     >
       <img
         alt="Sample"
         src='https://picsum.photos/300/200?random=3'
         height={100}
       />
       <CardBody>
         <CardTitle tag="h4">
           Spandan
         </CardTitle>
         <CardSubtitle
           className="mb-2 text-muted"
           tag="h6"
         >
           26th July,2024
         </CardSubtitle>
         <CardText>
          The most awaited techno-cultural fest
         </CardText>
       </CardBody>
     </Card>
     <Card
       style={{
         width: '18rem'
       }}
     >
       <img
         alt="Sample"
         src="https://picsum.photos/300/200?random=1"
         height={100}
       />
       <CardBody>
         <CardTitle tag="h4">
           Swaranjali
         </CardTitle>
         <CardSubtitle
           className="mb-2 text-muted"
           tag="h6"
         >
          29th September,2024
         </CardSubtitle>
         <CardText >
          Inter-college Music competition
         </CardText>
        
       </CardBody>
     </Card>
     <Card
       style={{
         width: '18rem'
       }}
     >
       <img
         alt="Sample"
         src="https://picsum.photos/300/200?random=2"
         height={100}
       />
       <CardBody>
         <CardTitle tag="h4">
           Treasure Hunt
         </CardTitle>
         <CardSubtitle
           className="mb-2 text-muted"
           tag="h6"
         >
           12th November,2024
         </CardSubtitle>
         <CardText>
          Take part in treasure hunt and Win amazing prizes
         </CardText>
         
       </CardBody>
     </Card>
     <Card
       style={{
         width: '18rem'
       }}
     >
       <img
         alt="Sample"
         src="https://picsum.photos/300/200?random=4"
         height={100}
       />
       <CardBody>
         <CardTitle tag="h4">
           Void Hacks
         </CardTitle>
         <CardSubtitle
           className="mb-2 text-muted"
           tag="h6"
         >
          20th September,2024
         </CardSubtitle>
         <CardText>
          Buckle up to take part in country's biggest Hackathon
         </CardText>
         
       </CardBody>
     </Card>
     <Card
       style={{
         width: '18rem'
       }}
     >
       <img
         alt="Sample"
         src="https://picsum.photos/300/200?random=6"
         height={100}
       />
       <CardBody>
         <CardTitle tag="h4">
           Vinirmah
         </CardTitle>
         <CardSubtitle
           className="mb-2 text-muted"
           tag="h6"
         >
           10th December,2024
         </CardSubtitle>
         <CardText>
         Fashion Show         
         </CardText>
         
       </CardBody>
     </Card>
     <Card
       style={{
         width: '18rem'
       }}
     >
       <img
         alt="Sample"
         src="https://picsum.photos/300/200?random=7"
         height={100}
       />
       <CardBody>
         <CardTitle tag="h4">
          Nataraj
         </CardTitle>
         <CardSubtitle
           className="mb-2 text-muted"
           tag="h6"
         >
          20th December,2024
         </CardSubtitle>
         <CardText>
          Make the world dance on your moves
         </CardText>
         
       </CardBody>
     </Card>
       
             </div> ;
    </div>
    );
    
}

export default EventCards;