import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import './AyurvedaTreatment.css'

const AyurvedicSolutionsPage = () => {
  const services = [
    { 
      title: 'Skin & Hair Problems', 
      image: 'young-woman-with-acne-dry-skin-black-dots-skin-zoom-circle-young-girl-beauty-portrait-close-up_1-4364886 2.png',
      solution: ' Skin and hair problems can range from conditions like acne, dry skin, blackheads, eczema, psoriasis, dandruff, and hair loss. These issues are often related to imbalances in the body that manifest externally, affecting the health and appearance of the skin and hair. Common triggers include environmental factors, hormonal imbalances, poor diet, and stress.'

    },
    { 
      title: 'Joint Problems', 
      image: 'joint-pain-atoz-optimists-healthcare 1.png',
      solution: 'Description: Joint problems can include conditions such as arthritis, stiffness, inflammation, and joint pain. These issues are typically associated with wear and tear on the joints, autoimmune disorders like rheumatoid arthritis, or injuries. Common symptoms include pain, swelling, limited mobility, and discomfort, which can worsen with age or physical activity.'
    },
    { 
      title: 'Digestive Disorders', 
      image: 'ImageForArticle_22799_16572812576525563 1.png',
      solution: 'Description: Neurological issues refer to disorders that affect the brain, spinal cord, and nerves. These include conditions such as anxiety, depression, migraines, epilepsy, and neurodegenerative diseases like Parkinson’s and Alzheimers. Symptoms can range from headaches, dizziness, and cognitive decline to mood changes and impaired motor functions'
    },
    { 
      title: 'Neurological Issues', 
      image: '2382452 1.png',
      solution: 'Description: Neurological issues refer to disorders that affect the brain, spinal cord, and nerves. These include conditions such as anxiety, depression, migraines, epilepsy, and neurodegenerative diseases like Parkinson’s and Alzheimers. Symptoms can range from headaches, dizziness, and cognitive decline to mood changes and impaired motor functions.'
    },
    { 
      title: 'Endocrine Disorders', 
      image: 'large_20190919_040243_397859_cuong_giap_chuyen_s_max_1800x1800_jpg_edc05c8ed4 1.png',
      solution: 'Description: Endocrine disorders are related to imbalances in hormone production and regulation. These can include thyroid problems (hyperthyroidism or hypothyroidism), diabetes, adrenal gland dysfunction, and hormonal imbalances that affect metabolism, reproductive health, and stress responses. Symptoms often include fatigue, weight fluctuations, mood changes, and irregular menstruation.'
    },
    { 
      title: 'Anorectal Problems', 
      image: 'shutterstock_721605601-300x200 1.png',
      solution: 'Description: Endocrine disorders are related to imbalances in hormone production and regulation. These can include thyroid problems (hyperthyroidism or hypothyroidism), diabetes, adrenal gland dysfunction, and hormonal imbalances that affect metabolism, reproductive health, and stress responses. Symptoms often include fatigue, weight fluctuations, mood changes, and irregular menstruation.'
    },
    { 
      title: 'Gynaecological Disorders', 
      image: 'Gynaecological Disorders 1.png',
      solution: 'Description: Gynaecological disorders affect the female reproductive system and include conditions such as menstrual irregularities, polycystic ovarian syndrome (PCOS), endometriosis, uterine fibroids, and infertility. Symptoms can vary but may include irregular periods, pelvic pain, hormonal imbalances, and issues related to pregnancy and conception.'
    },
    { 
      title: 'Metabolic Disorders', 
      image: 'Metabolic Disorders 1.png',
      solution: 'Description: Metabolic disorders refer to conditions that affect the body’s ability to process nutrients and energy, such as diabetes, obesity, and hyperlipidemia. These disorders often result from issues in how the body metabolizes glucose, fats, or proteins, leading to symptoms like weight gain, fatigue, frequent urination, excessive thirst, and abnormal cholesterol levels.'
    }
  ];

  return (
    <Container className="ayurvedic-solutions-page">
      <h1>Ayurvedic Solutions for Common Health Problems</h1>
      <p>Ayurveda offers holistic treatments that focus on balancing the body’s doshas (Vata, Pitta, and Kapha) to restore health and well-being. Below are some Ayurvedic solutions for various common health issues.</p>
      
      <Row>
        {services.map((service, index) => (
          <Col md={4} key={index} className="service-col">
            <Card className="solution-card">
              <Card.Img variant="top" src={require(`/public/images/${service.image}`)} alt={service.title} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>
                  {service.solution}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AyurvedicSolutionsPage;