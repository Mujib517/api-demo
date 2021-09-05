const client = require('../db/elasticsearchConnect');

const get = async (req, res) => {
    const data = await client.search({ index: 'persons' });
    const hits = data.hits.hits;

    const result = hits.map(hit => hit._source);
    res.status(200).json(result);
}

const post = async (req, res) => {
    const body = req.body;

    await client.index({
        index: 'persons',
        body
    });

    res.status(201).send("Created");
}


module.exports = {
    get,
    post
}