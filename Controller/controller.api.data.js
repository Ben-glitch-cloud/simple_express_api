// Controller functions 
// All funaction are currenty holding dummy data

function DummyData(){
    return {'path': 'Home', 'firstName': 'Tom', 'lastName': 'Smith'}
}

function AboutDummyData(){
    return {'path': 'About', 
    'pageHeading': 'Building an app', 
    'purpose': 'The app will display basic data to the user'}
}

module.exports = { DummyData, AboutDummyData };


