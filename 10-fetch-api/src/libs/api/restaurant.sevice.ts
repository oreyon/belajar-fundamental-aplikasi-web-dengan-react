/**
 * Data restoran diambil dari RESTful API:
 *  https://restaurant-api.dicoding.dev/
 *
 * Silakan baca dokumentasi untuk mengetahui-
 * cara penggunaannya.
 */

async function getRestaurants() {
  // TODO 1
  const response = await fetch('https://restaurant-api.dicoding.dev/list');
  const responseBody = await response.json();
  console.log('responseBody', responseBody);
  
  if (response.ok) {
    return responseBody.restaurants;
  } else {
    throw new Error(responseBody.message || 'Failed to fetch restaurants');
  }
}

async function getRestaurant(id:string) {
  // TODO 2
   const response = await fetch(`https://restaurant-api.dicoding.dev/detail/${id}`);
  const responseBody = await response.json();
  console.log('responseBody', responseBody);
  if (response.ok) {
    return responseBody.restaurant;
  } else {
    throw new Error(responseBody.message || 'Failed to fetch restaurant details');
  }
}

async function postRestaurantReview(id:string, name:string, review:string) {
  // TODO 3
  const response = await fetch(`https://restaurant-api.dicoding.dev/review`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      name,
      review,
    }),
  });
  const responseBody = await response.json();
  console.log('responseBody', responseBody);
  if (response.ok) {
    return responseBody;
  } else {
    throw new Error(responseBody.message || 'Failed to post restaurant review');
  }
}

export { getRestaurant, getRestaurants, postRestaurantReview };
