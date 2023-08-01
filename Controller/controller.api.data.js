// Controller functions 
// All funaction are currenty holding dummy data

function DummyData(){
    return {'path': 'Home', 'firstName': 'Ben', 'lastName': 'Lawrence'}
}

function AboutDummyData(){
    return {'path': 'About', 
    'Info': 'More data', 
    'More info': 'More data to come'}
}

module.exports = { DummyData, AboutDummyData };

//module.exports.DummyData = DummyData; < exports rather than export
