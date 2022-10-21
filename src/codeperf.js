import './codeperf.css'
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact} from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React from 'react';



function Codeperf() {
    return (
        <Container className='container_codeperf'>
            <Row xs={2} md={4} lg={6}>
                
                        <div className='card_codeperf' id='html'>
                            <h2><FaHtml5 /></h2>
                        </div>
                        <br></br>
                        <div className='card_codeperf' id='css'>
                            <h2><FaCss3Alt /></h2>
                        </div>
                        <br></br>
                        <div className='card_codeperf' id='js'>
                            <h2><FaJs /></h2>
                        </div>
                        <br></br>
                        <div className='card_codeperf' id='nodejs'>
                            <h2><FaNodeJs /></h2>
                        </div>
                        <br></br>
                        <div className='card_codeperf' id='reactjs'>
                            <h2><FaReact /></h2>
                        </div>



            </Row>
        </Container>

    );
}

export default Codeperf