const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Music = require('./models/userschema');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/prefspractice').then(()=>{
    console.log("Connected to database")
}
).catch((e)=>{
    console.log("error",e);
})

app.get('/',async(req,res)=>{
    res.send("Reached Backend server");
});

app.post('/add',async(req,res)=>{
    const {title,artist,band} = req.body;
    try{
        const music = new Music({title,artist,band});
        await music.save();
        res.status(200).json({message:"Artist added successfully"});
    }
    catch(e){
        res.status(400).json({message:"Error in getting data"});
    }
});

app.get('/all',async(req,res)=>{
    try{
        const artists  = await Music.find();
        res.status(200).json(artists);
    }
    catch(e){
        res.status(404).json({message:"No one found"});
    }
})

app.get('/artists',async(req,res)=>{
    try{
        const artists = await Music.find();
        const a =  [...new Set(artists.map(a=>a.artist))];
        res.status(200).json(a);
    }
    catch(e){
        res.status(400).json({message:"Error in fetching data"});
    }
});

app.get('/artists/bryandams',async(req,res)=>{
    try{
        const artists = await Music.find({artist:"BryanAdams"},{_id:0});
        res.status(200).json(artists);
    }
    catch(e){
        res.status(400).json({message:"Error in fetching data"});
    }

});
app.get('/artists/BillieEilish',async(req,res)=>{
    try{
        const artists = await Music.find({artist:"BillieEilish"},{_id:0});
        res.status(200).json(artists);
    }
    catch(e){
        res.status(400).json({message:"Error in fetching data"});
    }

});
app.get('/artists/beatles',async(req,res)=>{
    try{
        const artists = await Music.find({artist:"TheBeatles"},{_id:0});
        res.status(200).json(artists);
    }
    catch(e){
        res.status(400).json({message:"Error in fetching data"});
    }

});
app.get('/artists/billyjoel',async(req,res)=>{
    try{
        const artists = await Music.find({artist:"billyjoel"});
        if(artists.length==0){
            return res.status(404).send({message:"No artists found"});
        }
        res.status(200).json(artists);
    }
    catch(e){
        res.status(400).json({message:"Error in fetching data"});
    }

});

app.listen(3000,()=>{
    console.log("Connected to 3000 port");
});
