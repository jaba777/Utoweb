import React from 'react'
import Slider from '../components/Slider';
import SliderData from '../SliderData';
import './Home.css';
import Courses from '../Courses';
import target from '../Images/target.png';
import Step from '../Images/step.jpg';
import based from '../Images/based.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InterviewImg from '../Images/codding.png';


const Home = () => {

    const Sliderdates=SliderData;
    const CoursesMassive=Courses;

  return (
    <>

     <section className='trainings'>
            <h1>Cyber Security Training</h1>

        <Container className='train-container'>

            <div className="train-box">
                <div className="train-icon">
                    <img src={target} alt="" />
                </div>
                <div className="train-text">
                    <h6>Interactive</h6>
                    <p>Practice on live targets, put your knowledge to the test</p>
                </div>
            </div>

            <div className="train-box">
                <div className="train-icon">
                    <img src={based} alt="" />
                </div>
                <div className="train-text">
                    <h6>Browser based</h6>
                    <p>Train through your browser utilizing a web-based workstation</p>
                </div>
            </div>

            <div className="train-box">
                <div className="train-icon">
                    <img src={Step} alt="" />
                </div>
                <div className="train-text">
                    <h6>For everyone</h6>
                    <p>Courses for every skill level, ranging from fundamental to expert</p>
                </div>
            </div>

        </Container>


     </section>


        { /*<h6>LATEST NEWS</h6>

        <Slider Sliderdates={Sliderdates} />*/}


    <Container className='courses-container'>

        <h3>Cyber Security Courses</h3>

        <Row className='justify-content-md-center box-container'>
              
             
        {CoursesMassive.map((item,index)=>{

            return(
                <Col key={index} className='courses-box' lg={3}>
                <div className='courses-img'>
                   <img src={item.image} alt="img" />
                </div>

                 <div className='courses-info'>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                 </div>
                 
                </Col>
            )
        })}

        </Row>

    </Container>

    <Container className='interview'>

        <div className="interview-container">

        <div className="interviw-text">

            <h2>Interview like it’s <span>2022</span></h2>

                <p>Ditch out of reach and out of touch interview questions about golf balls and 747s — and turn off your clunky screen share for good. Code, create, and collaborate with an IDE built to showcase real-world skills in a real-world environment.</p>

                <div className='learn-btn'>
                    <button>learn more</button>
                </div>

            </div>


            <div className='interview-image'>
                <img src={InterviewImg} alt="" />   
            </div>

            
        </div>
     

    </Container>
      
    </>
  )
}

export default Home
