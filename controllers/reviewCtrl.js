const reviewRepository = require("../repositories/reviewRepository");

class ReviewCtrl {

    async post(req, res) {
        try {
            await reviewRepository.add(req.body);

            res.status(201).send();
        } catch (e) {
            console.log(e);
            res.status(500);
            res.send("Internal Server Error");
        }
    }
}

module.exports = new ReviewCtrl();