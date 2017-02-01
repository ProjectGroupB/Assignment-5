//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
    db: {
        uri: 'mongodb://BootcampUser:bootcampPassword@ds117109.mlab.com:17109/ufdirectorydatabase', //place the URI of your mongo database here.
    },
    googleMaps: {
        key: 'AIzaSyDxOk0l1RPS82wUFIWe09e7WOnM62QjwUE'
    },
    port: 8080
};
