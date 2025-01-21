// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css"; 
// import "swiper/css/autoplay"; 
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useMediaQuery } from "react-responsive";
// import "./headlines.css";

// const CustomComponent = () => {
//   const isMobile = useMediaQuery({ maxWidth: 767 });

//   return (
//     <Container fluid className="hde-p-5" style={{marginTop:"1rem"}}>
//       <Row className="mb-5 align-items-center">
//         <Col md={6}>
//           <h1 className="fw-bold" style={{color:"black"}}>Medical Mission Blogs</h1>
//         </Col>
//       </Row>
//       <p className="hd-text-light fs-5">
//         Over healthcare organisations are joining hands with us to provide successful careers to our students after completing one of the many paramedical courses from Medical Mission.
//       </p>

//       {isMobile ? (
//         <Swiper
//           spaceBetween={20}
//           slidesPerView={1}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           modules={[Autoplay]} 
//         >
//           <SwiperSlide>
//             <Card className="shadow border-0">
//               <Card.Img variant="top" src="/Images/blogsn1.jpg"/>
//               <Card.Body>
//                 <Card.Title>Healing Beyond Borders</Card.Title>
//               </Card.Body>
//             </Card>
//           </SwiperSlide>
//           <SwiperSlide>
//             <Card className="shadow border-0">
//               <Card.Img variant="top"  src="/Images/blogsn2.jpg" />
//               <Card.Body>
//                 <Card.Title>Bridging Lives with Care</Card.Title>
//               </Card.Body>
//             </Card>
//           </SwiperSlide>
//           <SwiperSlide>
//             <Card className="shadow border-0">
//               <Card.Img variant="top" src="/Images/blogsn3.jpg"/>
//               <Card.Body>
//                 <Card.Title>The Care Chronicles</Card.Title>
//               </Card.Body>
//             </Card>
//           </SwiperSlide>
//         </Swiper>
//       ) : (
//         <Row className="g-4">
//           <Col xs={12} sm={4}>
//             <Card className="shadow border-0">
//               <Card.Img variant="top" src="/Images/blogsn1.jpg" />
//               <Card.Body>
//                 <Card.Title>Healing Beyond Borders</Card.Title>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col xs={12} sm={4}>
//             <Card className="shadow border-0">
//               <Card.Img variant="top" src="/Images/blogsn2.jpg" />
//               <Card.Body>
//                 <Card.Title>Bridging Lives with Care</Card.Title>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col xs={12} sm={4}>
//             <Card className="shadow border-0">
//               <Card.Img variant="top" src="/Images/blogsn3.jpg" />
//               <Card.Body>
//                 <Card.Title>The Care Chronicles</Card.Title>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       )}
//     </Container>
//   );
// };

// export default CustomComponent;



import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/autoplay"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { useMediaQuery } from "react-responsive";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';  // For blur effect on load
import "./headlines.css";  // Keeping your existing CSS as is

const CustomComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Container fluid className="hde-p-5" style={{ marginTop: "1rem" }}>
      <Row className="mb-5 align-items-center">
        <Col md={6}>
          <h1 className="fw-bold" style={{ color: "black" }}>Medical Mission Blogs</h1>
        </Col>
      </Row>
      <p className="hd-text-light fs-5">
        Over healthcare organisations are joining hands with us to provide successful careers to our students after completing one of the many paramedical courses from Medical Mission.
      </p>

      {isMobile ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]} 
        >
          <SwiperSlide>
            <Card className="shadow border-0">
              <LazyLoadImage
                src="/Images/blogsn1.jpg"
                alt="Healing Beyond Borders"
                effect="blur"
                placeholderSrc="/Images/placeholder.jpg"  // Optional placeholder image
                threshold={100}  // Set the threshold for triggering image load
                className="card-img-top"  // Same class name to keep styling as Card.Img
              />
              <Card.Body>
                <Card.Title>Healing Beyond Borders</Card.Title>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="shadow border-0">
              <LazyLoadImage
                src="/Images/blogsn2.jpg"
                alt="Bridging Lives with Care"
                effect="blur"
                placeholderSrc="/Images/placeholder.jpg"
                threshold={100}
                className="card-img-top"
              />
              <Card.Body>
                <Card.Title>Bridging Lives with Care</Card.Title>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="shadow border-0">
              <LazyLoadImage
                src="/Images/blogsn3.jpg"
                alt="The Care Chronicles"
                effect="blur"
                placeholderSrc="/Images/placeholder.jpg"
                threshold={100}
                className="card-img-top"
              />
              <Card.Body>
                <Card.Title>The Care Chronicles</Card.Title>
              </Card.Body>
            </Card>
          </SwiperSlide>
        </Swiper>
      ) : (
        <Row className="g-4">
          <Col xs={12} sm={4}>
            <Card className="shadow border-0">
              <LazyLoadImage
                src="/Images/blogsn1.jpg"
                alt="Healing Beyond Borders"
                effect="blur"
                placeholderSrc="/Images/placeholder.jpg"
                threshold={100}
                className="card-img-top"
              />
              <Card.Body>
                <Card.Title>Healing Beyond Borders</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={4}>
            <Card className="shadow border-0">
              <LazyLoadImage
                src="/Images/blogsn2.jpg"
                alt="Bridging Lives with Care"
                effect="blur"
                placeholderSrc="/Images/placeholder.jpg"
                threshold={100}
                className="card-img-top"
              />
              <Card.Body>
                <Card.Title>Bridging Lives with Care</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={4}>
            <Card className="shadow border-0">
              <LazyLoadImage
                src="/Images/blogsn3.jpg"
                alt="The Care Chronicles"
                effect="blur"
                placeholderSrc="/Images/placeholder.jpg"
                threshold={100}
                className="card-img-top"
              />
              <Card.Body>
                <Card.Title>The Care Chronicles</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CustomComponent;
