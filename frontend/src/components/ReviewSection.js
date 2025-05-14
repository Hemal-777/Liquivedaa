import React, { useState } from 'react';
import './ReviewSection.css';
const reviews = [
  { id: 1, name: 'Anirban Sen', location: 'Kolkata', rating: 5, review: 'The Ayurvedic consultation was truly life-changing!' },
  { id: 2, name: 'Priyanka Ghosh', location: 'Howrah', rating: 4, review: 'The Ayurvedic massage was particularly relaxing, a great experience overall.' },
  { id: 3, name: 'Subhajit Dutta', location: 'Siliguri', rating: 5, review: 'Traveling from Siliguri was completely worth it for this holistic wellness treatment. I felt completely refreshed.' },
  
  { id: 4, name: 'Rahim Khan', location: 'Lucknow', rating: 5, review: 'The best Ayurvedic treatment I’ve ever had! I came all the way from Lucknow, and it was truly healing and rejuvenating.' },
  { id: 5, name: 'Sadia Begum', location: 'Patna', rating: 4, review: 'Good experience, but there’s still room for improvement in the ambiance.' },
  { id: 6, name: 'Farhana Islam', location: 'Allahabad', rating: 4, review: 'Very informative and calming experience. Worth the trip from Allahabad, I will definitely return for more treatments.' },
  
  { id: 7, name: 'Vivek Kumar', location: 'Varanasi', rating: 5, review: 'Outstanding service! I feel like my overall health has improved significantly.' },
  { id: 8, name: 'Neha Sharma', location: 'Gorakhpur', rating: 4, review: 'The Ayurvedic consultation was helpful, and I felt much better after following the advice.' },
  { id: 9, name: 'Amit Singh', location: 'Kanpur', rating: 4, review: 'The herbal remedies really worked for me. Definitely glad I made the trip from Kanpur.' }
];
const ReviewSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;

  // Calculate the current reviews to display
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  // Pagination logic
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="review-section1">
      <div className="reviews-container1">
        {currentReviews.map((review) => (
          <div className="review-card1" key={review.id}>
            <div className="review-content1">
              <h3>{review.name}</h3>
              <p className="rating1">Rating: {Array(review.rating).fill('').join('')}</p>
              <p className="review-text1">"{review.review}"</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{`${currentPage} of ${totalPages}`}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;