import express from 'express';
const app = express()


const room = [
    {

        room_id: [1, 2, 3, 4, 5],
        price_per_hour: "50.00",
        amenities: [
            "WiFi",
            "TV",
            "Air conditioning",
        ],

    }

]

const customer = [{
    customer_id: "1",
    customer_name: "John Doe",
    customer_email: "johndoe@example.com"
}]


const roombooking = [{
    customer_name: "mm",
    start_time: "1pm",
    end_time: "3pm",
    roomid: "ll"

}]

const booked_data = [{
    customer_id: "1",
    room_id: "1",
    customer_name: "mm",
    start_time: "1pm",
    end_time: "3pm",
    roomid: "ll",
    room_name: "3"
}]
//creating room
app.get('/room', (req, res) => {

    res.send(room);
    console.log(room);
})

//booking room

app.post('/room/booking', (req, res) => {
    booking.push(req.body);
    res.send(booking);
    console.log(room);
})


//booked data
app.get('/room/data', (req, res) => {

    res.send(booked_data);
    console.log(booked_data);
})

//how many booked custemers
app.get('/room/:bookeddata', (req, res) => {
    const { name } = req.params;
    const customer_total = booked_data.filter(id => id.customer_name === name);
    const total_number = customer_total.length;
    res.send(total_number);
    console.log((total_number));
})




app.listen(3000)
