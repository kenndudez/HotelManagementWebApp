const express=require('express')
const port = process.env.PORT || 3000
const compression=require('compression')
const path=require('path');
const app = express()
const cors = require('cors');
app.use(express.urlencoded())

app.use(cors())
app.use(express.json());
// view engine setup
app.set('views', path.join(__dirname, 'static', 'views'))
app.set('view engine', 'ejs')
app.use(compression())
app.use('/public', express.static(path.join(__dirname, 'static', 'public')))

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


let corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));
let db=admin.firestore();
let a=db.collection('users')

app.post('/create',async (req,res)=>{
    let docRef=db.collection('user').doc(req.body.user.name)
    await docRef.set({
      email: req.body.user.email,
      password: req.body.user.password,
    });
     res.json({message:'done'});
  })

  //Post Customer
  app.post('/customer',async (req,res)=>{
    let docRef=db.collection('customer')
    await docRef.add({
        
        middlename: req.body.middlename,
        phonenumber: req.body.phonenumber,
        address: req.body.address,
        email : req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    });
   res.json({message:'done'});
  })


  //Post Room
  app.post('/room',async (req,res)=>{
    let docRef=db.collection('room')
    await docRef.add({
        roomname: req.body.roomname,
        roomnumber: req.body.roomnumber,
        roomprice: req.body.roomprice,
        roomtype : req.body.roomtype
    });
   res.json({message:'done'});
  })

   //Post Book
   app.post('/book',async (req,res)=>{
    let docRef=db.collection('book')
    await docRef.add({
    phonenumber : req.body.phonenumber,
    address : req.body.address,
    middlename : req.body.middlename,
    lastname : req.body.lastname,
    firstname : req.body.firstname,
    email : req.body.email,
    roomname : req.body.roomname,
    roomtype : req.body.roomtype,
    checkin : req.body.checkin,
    checkout : req.body.checkout,
    numberofadults : req.body.numberofadults,
    numberofchildren : req.body.numberofchildren,
    roomprice : req.body.roomprice
    });
   res.json({message:'done'});
  })

  
  //Get Customers
  app.get('/getcustomer', async (req, res) => {
    let cstomer=[]
     const customers = await db.collection('customer').get()
    if (customers.docs.length > 0) {
      for (const customer of customers.docs) {
        cstomer.push(customer.data())
    }}
    res.json(cstomer)
  })

   //Get Rooms
   app.get('/getroom', async (req, res) => {
    let rom=[]
     const rooms = await db.collection('room').get()
    if (rooms.docs.length > 0) {
      for (const room of rooms.docs) {
        rom.push(room.data())
    }}
    res.json(rom)
  })

  //Get Booking
  app.get('/getbook', async (req, res) => {
    let bok=[]
     const books = await db.collection('book').get()
    if (books.docs.length > 0) {
      for (const book of books.docs) {
        bok.push(book.data())
    }}
    res.json(bok)
  })

//Delete Customer 
app.post('/delete',async (req,res) => {
    await db.collection('customer').doc(req.body.firstname).delete()
    res.json({message:'done'});
  })
 
app.listen(port, (req,res)=>{
console.info(`Running on ${port}`)
})