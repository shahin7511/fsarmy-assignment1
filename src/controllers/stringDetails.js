const { generateStringDetails } = require("../helper/utility");

const stringDetails = (req, res) => {    
    res.status(200).json({
        'msg': 'String details generated successfully!',
        'string_details': generateStringDetails(req.query.string),
        
    })
}


module.exports = stringDetails;