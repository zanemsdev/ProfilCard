import './reseau.css'
import { FaInstagram, FaDiscord} from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React from 'react';

function Reseau() {
    return (
        <Container className='container_reseau'>
            <Row xs={2} md={4} lg={6}>
                
                        <div className='card_reseau' id='insta'>
                            <a href='https://instagram.com/zanemsdev' target="_blank" rel="noopener noreferrer"><h2><FaInstagram /></h2></a>
                        </div>
                        <br></br>
                        <div className='card_reseau' id='discord'>
                            <a href='https://discord.gg/yqf28dypxQ' target="_blank" rel="noopener noreferrer"><h2><FaDiscord /></h2></a>
                        </div>

            </Row>
        </Container>

    );
}

export default Reseau

      