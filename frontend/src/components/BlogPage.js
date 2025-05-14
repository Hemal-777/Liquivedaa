import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Pagination } from 'react-bootstrap';
import './BlogPage.css'; // BlogPage custom CSS

const BlogPage = () => {
  // Blog post data with 15 posts
  const blogPosts = [
    { title: 'Get Ayurvedic Treatment for Fatty Liver', image: 'download (3).jpg', date: 'Aug 08, 2024', excerpt: 'Discover how Ayurveda can help treat fatty liver...' },
    { title: 'How to Get Rid of a Cold using Ayurveda', image: 'download (5).jpg', date: 'Aug 06, 2024', excerpt: 'Natural remedies to treat common cold symptoms using Ayurveda...' },
    { title: 'Boost Immunity with Ayurvedic',image:'download (6).jpg', date: 'Aug 05, 2024', excerpt: 'Learn about powerful herbs to strengthen immunity...' },
    { title: 'Detoxify your Liver with Ayurveda', image: 'download (7).jpg', date: 'Aug 04, 2024', excerpt: 'Ayurvedic solutions for a healthy liver detox...' },
    { title: 'Natural Eye Care with Ayurveda', image: 'images (4).jpg', date: 'Aug 03, 2024', excerpt: 'Top Ayurvedic practices for improving eye health...' },
    { title: 'Ayurvedic Diet for Better Digestion', image: 'images (5).jpg', date: 'Aug 02, 2024', excerpt: 'An Ayurvedic guide to improving digestion...' },
    { title: 'Using Turmeric in Ayurveda', image: 'download (9).jpg', date: 'Aug 01, 2024', excerpt: 'The benefits of turmeric and how it’s used in Ayurvedic practices...' },
    { title: 'Ayurvedic Solutions for Better Sleep', image: 'download (10).jpg', date: 'Jul 31, 2024', excerpt: 'Natural ways to enhance sleep quality using Ayurveda...' },
    { title: 'Treating Sinusitis with Ayurveda', image: 'download (11).jpg', date: 'Jul 30, 2024', excerpt: 'Ayurvedic methods to relieve sinusitis symptoms...' },
  ]
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // Logic for displaying the posts on current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Logic for pagination buttons
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(blogPosts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container className="blog-page">
      <Row>
        {/* Main Blog Content */}
        <Col lg={8} md={12}>
          <h3 className="breadcrumb">Home / Blog</h3>
          {currentPosts.map((post, index) => (
            <Card key={index} className="blog-card">
              <Row noGutters>
                <Col md={5}>
                  <Card.Img
                    variant="top"
                    src={require(`/public/images/${post.image}`)}
                    className="blog-image"
                  />
                </Col>
                <Col md={7}>
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <p className="publish-date">
                      Publish Date <span>{post.date}</span>
                    </p>
                    <Card.Text>{post.excerpt}</Card.Text>
                    <Button variant="outline-dark" className="read-more-btn">
                      Read More
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}

          {/* Pagination */}
          <Pagination>
            {pageNumbers.map((number) => (
              <Pagination.Item
                key={number}
                active={number === currentPage}
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </Pagination.Item>
            ))}
          </Pagination>
        </Col>

        {/* Sidebar */}
        <Col lg={4} md={12}>
          <Card className="appointment-card">
            <Card.Body>
              <h4>Book FREE Doctor Appointment</h4>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="formPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" placeholder="Enter your phone" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Button variant="dark" block>
                  Book Free Appointment
                </Button>
              </Form>
            </Card.Body>
          </Card>

          <Card className="category-card">
            <Card.Body>
              <h4>Category</h4>
              <ul className="category-list">
                <li>Ayurveda & Well-being</li>
                <li>ENT</li>
                <li>Liver and Gall</li>
                <li>Immunity</li>
                <li>Digestive Health</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default BlogPage;