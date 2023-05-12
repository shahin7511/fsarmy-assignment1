const { generateRandomPerson } = require("../helper/utility");

const randomPerson = (req, res) => {
    let properties = [];
    if(req.query.properties){
        properties = req.query.properties.split(',');
    }
    
    res.status(200).json({
        'msg': 'Person generated successfully!',
        'person': generateRandomPerson(properties)
    })
}


module.exports = randomPerson;