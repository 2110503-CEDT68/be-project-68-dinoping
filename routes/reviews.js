const express = require('express');
const {
    getReviews,
    getReview,
    addReview,
    updateReview,
    deleteReview,
    getRestaurantRating
} = require('../controllers/reviews');

const { protect } = require('../middleware/auth');

const router = express.Router({ mergeParams: true });

// Public routes
router.get('/restaurants/:restaurantId/reviews', getReviews);
router.get('/restaurants/:restaurantId/rating', getRestaurantRating);
router.get('/:id', getReview);

// Protected routes (require authentication)
router.post('/restaurants/:restaurantId/reviews', protect, addReview);
router.put('/:id', protect, updateReview);
router.delete('/:id', protect, deleteReview);

module.exports = router;
