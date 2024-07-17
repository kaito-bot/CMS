// import "./home.scss"

// function Home() {
//     return ( <div className="wrapper">
//         <section className="hero">
//           <header>
//             <div className="container">
              
//             </div>
//           </header>
      
//           <div className="jumbotron jumbotron-fluid mb-0">
//             <div className="container">
//               <div className="row justify-content-center text-center">
//                 <div className="col-md-10 col-lg-6">
//                   <h1 className="display-5">The Coolest Co-Working Space in Prague</h1>
      
//                   <p className="lead">Where you choose to work has impact on your productivity and creativity. It also says a lot about your business. We are the right office space.</p>
      
//                   <p className="lead">
//                     <a className="btn btn-primary btn-lg" href="#sec-pricing" role="button">Reserve Your Spot</a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
      
//         <section id="sec-about" className="sec-about pt-5 pb-5">
//           <div className="container">
//             <div className="row justify-content-center text-center">
//               <div className="col-md-10 col-lg-8">
//                 <h1 className="h4">About us</h1>
//                 <p className="mt-4 mb-4">Co-working spaces are brilliant for smaller companies of up to 4 people who want a regular workspace. Cost effective, flexible and full of a vibrant energy that comes from hundreds of like-minded people going it alone.</p>
//               </div>
//             </div>
      
//             <div className="row mt-4">
//               <div className="col-sm-4">
//                 <h4>350</h4>
      
//                 <hr />
      
//                 <h5>
//                   members</h5>
//               </div>
      
//               <div className="col-sm-4">
//                 <h4>60</h4>
      
//                 <hr />
      
//                 <h5>co-working spaces </h5>
//               </div>
      
//               <div className="col-sm-4">
//                 <h4>3</h4>
      
//                 <hr />
      
//                 <h5>members' bars</h5>
//               </div>
//             </div>
//           </div>
//         </section>
      
//         <footer className="footer">
//           <div className="container">
//             <ul className="list-inline mb-0 text-center">
//               <li className="list-inline-item">
//                 <a href=""><span className="fa fa-twitter"></span></a>
//               </li>
              
//               <li className="list-inline-item">
//                 <a href=""><span className="fa fa-google-plus"></span></a>
//               </li>
              
//               <li className="list-inline-item">
//                 <a href=""><span className="fa fa-instagram"></span></a>
//               </li>
              
//               <li className="list-inline-item">
//                 <a href=""><span className="fa fa-envelope-o"></span></a>
//               </li>
//             </ul>
//           </div>
//         </footer>
//       </div> );
// }

// export default Home;

import "./home.scss";
import Dashboard from "../../Pages/Dashboard.component";

function Home() {
  return (
    <div className="wrapper">
      <section className="hero">
        <header>
          <div className="container">
            <div className="logo-container">
              <img src="college-logo.png" alt="College Logo" />
            </div>  
          </div>
        </header>

        {/* Scrolling Banner for Upcoming Events */}
        {/* <div className="scrolling-banner">
          <div className="events">
            <span>Event 1 | </span>
            <span>Event 2 | </span>
            <span>Event 3 | </span>
            <span>Event 4 | </span>
            <span>Event 5 | </span>
          </div>
        </div> */}

        <div className="jumbotron jumbotron-fluid mb-0">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-md-10 col-lg-6">
                <h1 className="display-5">Welcome to Avalon University</h1>
                <p className="lead">Empowering minds, shaping futures. Join us for an unparalleled educational experience.</p>
                <p className="lead">
                  <a className="btn btn-primary btn-lg" href="/dashboard" role="button">Dashboard</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sec-about" className="sec-about pt-5 pb-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-10 col-lg-8">
              <h1 className="h4">About Us</h1>
              <p className="mt-4 mb-4">Avalon University is dedicated to fostering academic excellence, research innovation, and community engagement. Our diverse programs and vibrant campus provide the ideal environment for personal and professional growth.</p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-sm-4">
              <h4>1,000+</h4>
              <hr />
              <h5>Students</h5>
            </div>

            <div className="col-sm-4">
              <h4>300+</h4>
              <hr />
              <h5>Faculty Members</h5>
            </div>

            <div className="col-sm-4">
              <h4>100</h4>
              <hr />
              <h5>Programs</h5>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <ul className="list-inline mb-0 text-center">
            <li className="list-inline-item">
              <a href=""><span className="fa fa-twitter"></span></a>
            </li>
            <li className="list-inline-item">
              <a href=""><span className="fa fa-facebook"></span></a>
            </li>
            <li className="list-inline-item">
              <a href=""><span className="fa fa-instagram"></span></a>
            </li>
            <li className="list-inline-item">
              <a href=""><span className="fa fa-envelope-o"></span></a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Home;
