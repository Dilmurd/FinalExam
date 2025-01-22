import "./Comments.scss";
import { useState, useEffect } from "react";
import { PiCheckCircleFill } from "react-icons/pi";
import Rating from "@mui/material/Rating";
import { useCreateReviewMutation } from "../../redux/slice/slice";
import settings from "../../assets/settings.png";

function Comments() {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [userName, setUserName] = useState("");
  const [rating, setRating] = useState<number | null>(5);
  const [reviews, setReviews] = useState<Array<{ name: string; text: string; rating: number; date: string }>>([]);
  const [createReview, { isLoading }] = useCreateReviewMutation();

  useEffect(() => {
    const savedReviews = localStorage.getItem("reviews");
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, []);

  useEffect(() => {
    if (reviews.length > 0) {
      localStorage.setItem("reviews", JSON.stringify(reviews));
    }
  }, [reviews]);

  const handleSubmit = async () => {
    if (!reviewText.trim() || !userName.trim()) {
      alert("Please write a review and provide your name before submitting.");
      return;
    }

    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const newReview = {
      name: userName,
      text: reviewText,
      rating: rating ?? 5,
      date: `Posted on ${currentDate}`,
    };

    try {
      await createReview(newReview).unwrap();
      setReviews((prevReviews) => [newReview, ...prevReviews]);

      setReviewText("");
      setUserName("");
      setRating(5);
      setModalOpen(false);
      alert("Review successfully added!");
    } catch (error) {
      console.log(error);
      
      alert("Something went wrong while adding your review.");
    }
  };

  return (
    <main>
      <section className="comments">
        <div className="container">
          <div className="comments__tabs">
            <p className="comments__tab">Product Details</p>
            <p className="comments__tab active">Rating & Reviews</p>
            <p className="comments__tab">FAQs</p>
          </div>
          <div className="comments__top">
            <div className="comments__reviews">
              <p className="comments__review">All Reviews</p>
              <p className="comments__view">({reviews.length})</p>
            </div>
            <div className="comments__sets">
              <div className="comments__icon">
                <img src={settings} alt="" />
              </div>
              <button className="comments__btnss">Latest</button>
              <button
                className="comments__btn"
                onClick={() => setModalOpen(true)}
              >
                Write a Review
              </button>
            </div>
          </div>
          <div className="customer__wrapper">
            {reviews.map((review, index) => (
              <div key={index} className="customer__card">
                <Rating name="read-only" value={review.rating} readOnly />
                <div className="customer__user">
                  <p className="customer__title">{review.name}</p>
                  <PiCheckCircleFill />
                </div>
                <p className="customer__desc">{review.text}</p>
                <p className="customer__date">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
        {modalOpen && (
          <div className="modal">
            <div className="modal__content">
              <h3>Write a Review</h3>
              <input
                className="modal__input"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name"
              />
              <textarea
                className="modal__textarea"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write your review here..."
              />
              <div className="modal__rating">
                <Rating
                  name="simple-controlled"
                  value={rating}
                  onChange={(_, newValue) => setRating(newValue)}
                />
              </div>
              <div className="modal__actions">
                <button
                  className="modal__actions__btn"
                  onClick={() => setModalOpen(false)}
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button
                  className="modal__actions__btn"
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Comments;
