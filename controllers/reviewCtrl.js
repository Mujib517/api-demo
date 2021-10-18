const reviewRepository = require("../repositories/reviewRepository");

const hasValidationErrors = (e) => {
    return e.errors && e.errors.length === 0
}

class ReviewCtrl {

    async post(req, res) {
        try {
            await reviewRepository.add(req.body);

            res.status(201).send();
        } catch (e) {
            if (hasValidationErrors(e)) res.status(500).send(e.errors);
            else res.status(500).send("Internal Server Error");
        }
    }
}

module.exports = new ReviewCtrl();