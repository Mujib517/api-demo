const Review = require('../models').Review;


class ReviewRepository {

    add(review) {
        return Review.create(review);
    }

}


module.exports = new ReviewRepository();
