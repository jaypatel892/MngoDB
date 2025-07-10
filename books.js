const mongoose = require('mongoose');


main()   //.then  it is a promise concept if it is sucessfully run it will print result 
.then(() => {
    console.log("connection successful");
})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

// Schema validations with types & with updates also
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxlength:20,
        },
    author:{
        type:String,
    },
    price: {
        type:Number,
        min: [1, "Price is too low for Amazon selling"],
    },
    discount:{
        type:Number,
        default:0,
    },

    category:{
        type:String,
        enum: ["fiction","non-fiction"],
    },

    genre: [String] // it used to store in the form of array
});

const Book = mongoose.model("Book",bookSchema);//model created


Book.findByIdAndUpdate("686fbd9eddb38208b054d934" , {price: -500} ,{runValidators:true})//{runValidators:true} it is used to check validators
.then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err.errors.price.properties.message); //err.errors it used to check the exact erroes
    
});




// let book1 = new Book({
//     title:"Marvel Comics",
//     // author:"Harper Lee",
//     price:"500",
//     // category: "fiction",
//     genre:["Comics", "superheroes","fiction"],
// });

// //to save book use .save()
// book1.save().then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// });