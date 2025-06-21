import React from 'react';
import { Container } from 'react-bootstrap';

const AboutPage = () => {
    return (
        <Container className="mt-5">
            <h2 className="text-center">Про сайт</h2>
            <p>
                Це інформаційний портал кафедри суспільних наук, розроблений для студентів,
                викладачів та всіх, хто цікавиться нашою діяльністю.
            </p>
        </Container>
    );
};

export default AboutPage;