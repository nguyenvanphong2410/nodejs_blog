module.exports = {

    //Cứ nhận đối số vào thì map qua và toOject từng phần tử bên trong
    mutipleMongooseToObject: function (mongooses) {
        return mongooses.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }

};
