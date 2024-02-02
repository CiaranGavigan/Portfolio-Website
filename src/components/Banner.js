import { Container, Row, Col } from "react-bootstrap"
import { ArrowCircleRight } from "react-bootstrap-icons";
import { headerImg } from "../assets/img/header-img.svg";
import { useState, useEffect } from "react";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const toRotate = ["web Developer", "Web Designer", "UI/UX Designer"];
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        let ticker = setInterval(() =>{
            ticker();
        }, delta )

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1);

        setText(updateText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }
        if(!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Ciaran Gavigan`}<span className="Wrap">Software Developer</span></h1>
                        <p>This is a Test Description replace before production lalalalalalallllllllllllllllllllllllllllllllllllllll</p>
                        <button onClick={()=> console.log('connect')}>Let's connect<ArrowCircleRight size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}