module.exports = {

    //Cứ nhận đối số vào thì map qua và toOject từng phần tử bên trong
    //Multi là 1 list
    mutipleMongooseToObject: function (mongooses) {
        return mongooses.map(mongoose => mongoose.toObject());
    },

    //Cái này có 1 cái
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    } 

};
