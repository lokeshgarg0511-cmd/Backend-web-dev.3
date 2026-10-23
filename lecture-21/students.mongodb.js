use("University")
// """ insert method"""
// db.studentdb.insert([
//     {
//     name: "Alex",
//     section: "k",
//     course: "Btech",
//     semester:5,
//     marks:65,
//     contact:9572564589,
//     city:"Grugram"
//     },
//     {
//     name: "jhon",
//     section: "d",
//     course: "BBA",
//     semester:1,
//     marks:85,
//     contact:9542658489,
//     city:"Delhi"
//     }
// ])
// """ insertone method""" //adding only one 
// """ insertMany method""" //adding more than one by using array 

//  db.studentdb.find()// to find all the data

// """db.studentdb.findone()"""" // to findthe first one.
// """db.studentdb.find({course:"BCA"})"""// to find the data


// updates files for one 

// db.studentdb.updateOne(
//     {name:"atishay"},
//     {
//         $set:{
//             course: "BCA",
//             marks: 90,
//             name:"anaya"
//         }
//     }
// )

//  update many data

// db.studentdb.updateMany(
//     {name:"atishay"},
//     {
//         $set:{
//             course: "BCA",
//             marks: 90,
//             name:"anaya"
//         }
//     }
// )

//  delete one file 
//  delete Many file file 

// db.studentdb.deleteOne({
//     _id: ObjectId('6ad85585ee398b5ba2da54eb')
// })


// db.studentdb.find(
//     {
//         city:{
//             $eq:"palwal"
//         }
//     }

// )

// and operator==>
// db.studentdb.find( // and
//     {marks:{$gt:80},city:{$eq:"Delhi"}}
// )    

//  or operator ==>
// db.studentdb.find( // or
//     {$or:[{marks:{$gt:80}} , {city:{$eq:"Delhi"}}]}

// )

// projection==>
// db.studentdb.find({},{_id:0, name:1, marks:1,section:1}) find in all data 
// db.studentdb.find({section:"k"},{_id:0, name:1, marks:1,section:1}) find from the given data


// db.studentdb.find().skip(0).limit(3)


db.studentdb.find().sort({marks:-1}) // -1 for decending,1 for accending