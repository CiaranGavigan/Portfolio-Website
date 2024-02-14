import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from '../assets/img/color-sharp.png';
import java from '../assets/img/java.svg';
import javaScript from '../assets/img/javascript.svg';
import cPP from '../assets/img/cplusplus.svg';
import cSharp from '../assets/img/csharp.svg';
import php from '../assets/img/php.svg';





export const Skills = () => {
    const responsive = {
        superLargeDesktop: {

            breakpoint: {max: 3000, min: 3000},
            items: 5
            
        },

        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },

        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },

        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }

    };

    return(
        <section className="skill" id="skills">
            <container>
               <Row>
                <Col>
                <div className="skill-box">
                    <h2>
                        Skills
                    </h2>
                    <p>This is a test paragraph for scaling lalallaaaaaaalalallallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllalallallalalalalalalalalal this is just for test blah blah blah </p>
                    <Carousel responsive={responsive} infinite={true} className="skills-slider">
                    <div className="java">
                            <img src={java} alt="Java" />
                            <h5>Web Development</h5>
                        </div>
                        <div className="c++">
                            <img src={cPP} alt="C++" />
                            <h5>Web Development</h5>
                        </div>
                        <div className="javascript">
                            <img src={javaScript} alt="JavaScript" />
                            <h5>Web Development</h5>
                        </div>
                        <div className="c#">
                            <img src={cSharp} alt="C#" />
                            <h5>Web Development</h5>
                        </div>
                        <div className="php">
                            <img src={php} alt="PHP" />
                            <h5>Web Development</h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
               </Row>
            </container>
            <img className="background-image-left" src="colorSharp" />
        </section>
    )

}