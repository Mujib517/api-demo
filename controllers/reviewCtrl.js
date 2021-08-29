const reviewRepository = require("../repositories/reviewRepository");

class ReviewCtrl {

    hasValidationErrors(e) {
        return e.errors && e.errors.length === 0
    }

    async post(req, res) {
        try {
            await reviewRepository.add(req.body);

            res.status(201).send();
        } catch (e) {
            if (this.hasValidationErrors(e)) res.status(500).send(e.errors);
            else res.status(500).send("Internal Server Error");
        }
    }
}

module.exports = new ReviewCtrl();