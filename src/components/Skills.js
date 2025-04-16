import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from '../assets/img/color-sharp.png';
import java from '../assets/img/java.svg';
import javaScript from '../assets/img/javascript.svg';
import cPP from '../assets/img/cplusplus.svg';
import cSharp from '../assets/img/csharp.svg';
import php from '../assets/img/php.svg';
import typeScript from '../assets/img/typescript.svg';
import mysql from '../assets/img/mysql.svg';
import nodeJs from '../assets/img/node-js.svg';
import git from '../assets/img/git.svg';





export const Skills = () => {
    const responsive = {
        superLargeDesktop: {

            breakpoint: {max: 3000, min: 3000},
            items: 5
            
        },

        desktop: {
            breakpoint: {max: 3000  , min: 1024},
            items: 5
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
                            <h5>Java</h5>
                        </div>
                        <div className="c++">
                            <img src={cPP} alt="C++" />
                            <h5>C++</h5>
                        </div>
                        <div className="javascript">
                            <img src={javaScript} alt="JavaScript" />
                            <h5>Java Script</h5>
                        </div>
                        <div className="c#">
                            <img src={cSharp} alt="C#" />
                            <h5>C#</h5>
                        </div>
                        <div className="php">
                            <img src={php} alt="PHP" />
                            <h5>PHP</h5>
                        </div>
                        <div className="typeScript">
                            <img src={typeScript} alt="TypeScript" />
                            <h5>TypeScript</h5>
                        </div>
                        <div className="mysql">
                            <img src={mysql} alt="MySQL" />
                            <h5>MySQL</h5>
                        </div>
                        <div className="node-js">
                            <img src={nodeJs} alt="NodeJS" />
                            <h5>NodeJs</h5>
                        </div>
                        <div className="git">
                            <img src={git} alt="GIT" />
                            <h5>GIT</h5>
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