const mongoose = require('mongoose');


main()   //.then  it is a promise concept if it is sucessfully run it will print result 
.then(() => {
    console.log("connection successful");
})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User = mongoose.model("User",userSchema);// creating a collection mongodbdata or collection inmongodb

// Delete method Model.deleteOne() & Model.deletemany() & Model.findByIdAndDelete() & Model.findOneAndDelete()

User.findByIdAndDelete("686fa8c67959497398306eae").then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
    
});



// Updating user by Model.updateOne() & Model.updateMany() & Model.findOneAndUpdate() & Model.findByIdAndUpdate()

// {new:true} it is used to send option & it is used to send boolean values 
// and if true ,return the modify document rather than the original 

// User.findOneAndUpdate({name:"Bruce"},{age:42} , {new:true}).then((res) =>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// });



//it is used to print all the users that we have created and it will show in terminal
// We can also use condition to have a specific users 
// to print and condition is used to 
// given inside inside User.find({ age: {$gt:47}}) 

// we can also have a Model.findOne( ) it returns only a single result

// we can also used a most commonly method is User.findById("paste id from windows terminal where the data is having")

// User.findById("686fa8c67959497398306eaf").then((res) => {
//     console.log(res);
// }).catch((err) =>{
//     console.log(res);  
// });


// Inserting multiple users and single also User.insertOne([])
// User.insertMany([
//     {name:"Tony", email:"tony@gmailcom",age:50},
//     {name:"Peter", email:"peter@gmailcom",age:30},
//     {name:"Bruce", email:"bruce@gmailcom",age:47},
// ]).then(res => {
//     console.log(res);
    
// });



// const user2 = new User({
//     name:"Eve",
//     email:"eve@yahoo.in",
//     age:48,
// });

// user2 
// .save()//this is going to send a promise and a result
// .then((res) => {
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
    
// })

// user1.save(); asynchronous method 