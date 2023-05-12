const { randomNumberInRange } = require('../helper/utility')
module.exports = (req, res) => {
    res.status(200).json({
        'msg': 'Number generated successfully!',
        'number': randomNumberInRange(req.params.min, req.params.max)
    })
}