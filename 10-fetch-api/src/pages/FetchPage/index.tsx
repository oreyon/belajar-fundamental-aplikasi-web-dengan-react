import React, { useEffect, useState } from 'react';
import { getRestaurant, getRestaurants, postRestaurantReview } from '../../libs/api/restaurant.sevice';


interface Restaurant {
  id: string;
  name: string;
  description: string;
  pictureId: string;
  customerReviews: { name: string; review: string }[];
}

const FetchPage: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await getRestaurants();
    setRestaurants(data);
  };

  const handleSeeDetail = async (id: string) => {
    const restaurant = await getRestaurant(id);
    setSelectedRestaurant(restaurant);
  };

  const handlePostReview = async () => {
    if (!selectedRestaurant) return;
    await postRestaurantReview(selectedRestaurant.id, name, review);
    const updatedRestaurant = await getRestaurant(selectedRestaurant.id);
    setSelectedRestaurant(updatedRestaurant);
    setName('');
    setReview('');
  };

  const handleBackToList = () => {
    setSelectedRestaurant(null);
  };

  if (selectedRestaurant) {
    return (
      <div className="restaurant">
        <div className="restaurant-info">
          <img src={`https://restaurant-api.dicoding.dev/images/medium/${selectedRestaurant.pictureId}`} alt={selectedRestaurant.name} />
          <h2>{selectedRestaurant.name}</h2>
          <p>{selectedRestaurant.description}</p>
        </div>

        <div className="reviews-list">
          <h3>Customer Reviews</h3>
          {selectedRestaurant.customerReviews.map((review, idx) => (
            <div className="review-item" key={idx}>
              <h4>{review.name}</h4>
              <p>{review.review}</p>
            </div>
          ))}
        </div>

        <div className="review-input">
          <h3>Give Review</h3>
          <input
            id="inputName"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            id="inputReview"
            type="text"
            placeholder="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <button onClick={handlePostReview}>Post Review</button>
        </div>

        <button onClick={handleBackToList} className="button-back">
          Back to list
        </button>
      </div>
    );
  }

  return (
    <div className="restaurant-list">
      <h1 className={"flex justify-center text-2xl border-4"}>Restaurant App</h1>
      <p>List of restaurants fetched from the API</p>
      {restaurants.map((restaurant) => (
        <div className="restaurant-item" key={restaurant.id}>
          <img
            src={`https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}`}
            alt={restaurant.name}
          />
          <h2>{restaurant.name}</h2>
          <p>{restaurant.description}</p>
          <button onClick={() => handleSeeDetail(restaurant.id)}>See detail</button>
        </div>
      ))}
    </div>
    
  );
};

export default FetchPage;
