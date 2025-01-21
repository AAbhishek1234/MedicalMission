// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./team.css"; 

// const Team = () => {
//   const alumniData = [
//     {
//       name: "Umesh Bharti",
//       designation: "Director",
//       photo: "/Images/CEO.jpg",
//     },
//     {
//       name: "Rashmi Chauhan",
//       designation: "Administration Head",
//       photo: "/Images/team3.jpg",
//     },
//     {
//       name: "Rubasha Ahmad",
//       designation: "Faculty Trainer",
//       photo: "/Images/faculty2.jpg",
//     },
//     {
//       name: "Md. Babar",
//       designation: "Faculty Trainer",
//       photo: "/Images/faculty1.jpg",
//     },
//     {
//       name:" Vikas",
//       designation:"Marketing Manager",
//       photo:"/Images/Vikasc.jpg"
//     },
//     {
//       name: "Ranjeet",
//       designation: "Marketing Head",
//       photo: "/Images/ranjeete.jpg",
//     },

//     {
//       name:"Dr. Sanjay Sardana",
//       designation:"Business Head",
//       photo:"/Images/Sanjay.jpg"
//     }
//   ];

//   return (
//     <Container fluid className="team-container py-5" id="team">
//       <div className="team-header text-center mb-5">
//         <h1 className="team-title"> Our Team</h1>
//       </div>

//       <Row className="g-4">
//         {alumniData.map((alumnus, index) => (
//           <Col xs={12} sm={6} md={4} lg={3} key={`alumnus-${index}`}>
//             <Card className="team-card">
//               <Card.Img
//                 variant="top"
//                 src={alumnus.photo}
//                 alt={alumnus.name}
//                 className="team-card-img"
//               />
//               <Card.Body>
//                 <Card.Title className="team-card-title">
//                   {alumnus.name}
//                 </Card.Title>
//                 <Card.Subtitle className="team-card-subtitle">
//                   {alumnus.designation}
//                 </Card.Subtitle>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Team;


















import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Import the blur effect
import "bootstrap/dist/css/bootstrap.min.css";
import "./team.css"; // Import the external CSS

const Team = () => {
  const alumniData = [
    {
      name: "Umesh Bharti",
      designation: "Director",
      photo: "/Images/CEO.jpg",
    },
    {
      name: "Rashmi Chauhan",
      designation: "Administration Head",
      photo: "/Images/team3.jpg",
    },
    {
      name: "Rubasha Ahmad",
      designation: "Faculty Trainer",
      photo: "/Images/faculty2.jpg",
    },
    {
      name: "Md. Babar",
      designation: "Faculty Trainer",
      photo: "/Images/faculty1.jpg",
    },
    {
      name: "Vikas",
      designation: "Marketing Manager",
      photo: "/Images/Vikasc.jpg",
    },
    {
      name: "Ranjeet",
      designation: "Marketing Head",
      photo: "/Images/ranjeete.jpg",
    },
    {
      name: "Dr. Sanjay Sardana",
      designation: "Business Head",
      photo: "/Images/Sanjay.jpg",
    },
  ];

  return (
    <Container fluid className="team-container py-5" id="team">
      <div className="team-header text-center mb-5">
        <h1 className="team-title"> Our Team</h1>
      </div>

      <Row className="g-4">
        {alumniData.map((alumnus, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={`alumnus-${index}`}>
            <Card className="team-card">
              {/* Lazy loaded image */}
              <LazyLoadImage
                src={alumnus.photo}
                alt={alumnus.name}
                className="team-card-img"
                effect="blur" // Blur effect during loading
                placeholderSrc="/Images/placeholder.jpg" // Placeholder image path
                threshold={100} // Lazy-load threshold for early loading
                width="100%" // Responsive width
                height="auto" // Maintain aspect ratio
              />
              <Card.Body>
                <Card.Title className="team-card-title">
                  {alumnus.name}
                </Card.Title>
                <Card.Subtitle className="team-card-subtitle">
                  {alumnus.designation}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Team;
