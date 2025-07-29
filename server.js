const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const app = express();
const PORT = 5000;

// Enable CORS & JSON parsing
app.use(cors());
app.use(express.json());

// Serve static images
app.use("/images", express.static(path.join(__dirname, "images")));

// Multer setup for uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/cars"); // Folder to save uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // unique file name
  }
});
const upload = multer({ storage });

// JSON Data (can be in a separate file)
const data = {
  carCard: [
    {
      "id": 1,
      "cId": 1,
      "cImg": "/images/cars/posche-111.jpg",
      "cName": "Porsche Cayenne",
      "cText": "The Porsche Cayenne Coupe mixes sporty style with serious performance. Its sleek design and strong engine make every drive exciting. Inside, luxury and technology meet, creating a premium experience. It’s perfect for those who want thrill and comfort in one.",
      "cSlogan": "Drive with power, style, and freedom on every open road.",
      "cCurrency": "RUPEES",
      "cMoney": " 5000",
      "cDay": " DAY",
      "cYear": "2022",
      "cButton": "See Full Details",
      "cModel": "SUV",
      "cBrand": "POSCHE",
      "cFuel": "Petrol",
      "cLocation": "",
      "img1": "/images/cars/coupe-img/coupe-right.avif",
      "img2": "/images/cars/coupe-img/coupe-front.avif",
      "img3": "/images/cars/coupe-img/coupe-back.webp",
      "mileage": "5800",
      "type": "Automatic",
      "person": "4",
      "bags": "4",
      "buttonEdit": "Edit",
      "buttonDelete": "Delete",
      "cAvailability": "Check Availability",
      "cStatus": "Available"
    },
    {
      "id": 2,
      "cId": 2,
      "cImg": "/images/cars/bmw.jpg",
      "cName": "BMW M4",
      "cText": "The BMW M4 is built for speed and precision. With its aggressive look and powerful engine, it delivers pure driving excitement. Inside, luxury materials and smart tech keep the driver at the center of it all. Every drive feels like a race.",
      "cSlogan": "Built for performance, designed for comfort, made for adventures.",
      "cCurrency": "AED",
      "cMoney": " 1300",
      "cDay": " DAY",
      "cYear": "2020",
      "cButton": "See Full Details",
      "cModel": "Luxury",
      "cBrand": "BMW",
      "cFuel": "Petrol",
      "cLocation": "",
      "img1": "/images/cars/bmw-m4/m4-right.webp",
      "img2": "/images/cars/bmw-m4/m4-front.webp",
      "img3": "/images/cars/bmw-m4/m4-left.webp",
      "mileage": "4700",
      "type": "Automatic",
      "person": "5",
      "bags": "6",
      "buttonEdit": "Edit",
      "buttonDelete": "Delete",
      "cAvailability": "Check Availability",
      "cStatus": "Available"
    },
    {
      "id": 3,
      "cId": 3,
      "cImg": "/images/cars/ferarri.jpg",
      "cName": "Ferrari 458",
      "cText": "The Ferrari 458 captures Italian passion with stunning looks and thrilling speed. Its roaring V8 engine and sleek design make it unforgettable. Inside, it’s all about the driver, with a cockpit that feels ready for the track.",
      "cSlogan": "Rule the roads with elegance, strength, and unmatched precision.",
      "cCurrency": "AED",
      "cMoney": " 3900",
      "cDay": " DAY",
      "cYear": "2021",
      "cButton": "See Full Details",
      "cModel": "Luxury",
      "cBrand": "FERARI",
      "cFuel": "Petrol",
      "cLocation": "",
      "img1": "/images/cars/ferarri-458/458-right.webp",
      "img2": "/images/cars/ferarri-458/458-back.webp",
      "img3": "/images/cars/ferarri-458/458-left.webp",
      "mileage": "6100",
      "type": "Manual",
      "person": "2",
      "bags": "2",
      "buttonEdit": "Edit",
      "buttonDelete": "Delete",
      "cAvailability": "Check Availability",
      "cStatus": "Not Available"
    },
    {
      "id": 4,
      "cId": 4,
      "cImg": "/images/cars/posche-992.jpg",
      "cName": "Porsche 992",
      "cText": "The Porsche 992 keeps the spirit of the 911 alive with modern upgrades. Its classic shape meets powerful performance and new tech. Whether on city streets or winding roads, it delivers an incredible driving experience.",
      "cSlogan": "Every drive inspires — experience thrill, style, and complete control.",
      "cCurrency": "AED",
      "cMoney": " 2100",
      "cDay": " DAY",
      "cYear": "2024",
      "cButton": "See Full Details",
      "cModel": "Luxury",
      "cBrand": "POSCHE",
      "cFuel": "Petrol",
      "cLocation": "",
      "img1": "/images/cars/posche-922/911-right.jpg",
      "img2": "/images/cars/posche-922/911-back.jpg",
      "img3": "/images/cars/posche-922/911-left.jpg",
      "mileage": "5500",
      "type": "Automatic",
      "person": "2",
      "bags": "3",
      "buttonEdit": "Edit",
      "buttonDelete": "Delete",
      "cAvailability": "Check Availability",
      "cStatus": "Available"
    },
    {
      "id": 5,
      "cId": 5,
      "cImg": "/images/cars/bmw-18 .jpg",
      "cName": "BMW I8",
      "cText": "The BMW i8 looks like the future and drives like a dream. Its hybrid powertrain offers both efficiency and excitement. With its dramatic design and butterfly doors, the i8 stands out wherever it goes.",
      "cSlogan": "Your journey begins with innovation, power, and pure driving pleasure.",
      "cCurrency": "AED",
      "cMoney": " 4500",
      "cDay": " DAY",
      "cYear": "2025",
      "cButton": "See Full Details",
      "cModel": "Luxury",
      "cBrand": "BMW",
      "cFuel": "Petrol",
      "cLocation": "",
      "img1": "/images/cars/bmw-i8/i8-right.jpg",
      "img2": "/images/cars/bmw-i8/i8-frontdoor.jpg",
      "img3": "/images/cars/bmw-i8/i8-front.jpg",
      "mileage": "6800",
      "type": "Manual",
      "person": "2",
      "bags": "2",
      "buttonEdit": "Edit",
      "buttonDelete": "Delete",
      "cAvailability": "Check Availability",
      "cStatus": "Available"
    },
    {
      "id": 6,
      "cId": 6,
      "cImg": "/images/cars/audi-rs.jpg",
      "cName": "Audi RS Q3",
      "cText": "The Audi RS Q3 is a compact SUV with serious power. Its sporty design and turbocharged engine make every drive thrilling. Inside, it's packed with luxury and technology, blending everyday usability with performance.",
      "cSlogan": "Engineered to excite, designed to impress, made to move you.",
      "cCurrency": "AED",
      "cMoney": " 2000",
      "cDay": " DAY",
      "cYear": "2020",
      "cButton": "See Full Details",
      "cModel": "SUV",
      "cBrand": "AUDI",
      "cFuel": "Petrol",
      "cLocation": "",
      "img1": "/images/cars/audi-rs/rs-right.webp",
      "img2": "/images/cars/audi-rs/rs-front.jpeg",
      "img3": "/images/cars/audi-rs/rs-left.webp",
      "mileage": "4500",
      "type": "Automatic",
      "person": "5",
      "bags": "6",
      "buttonEdit": "Edit",
      "buttonDelete": "Delete",
      "cAvailability": "Check Availability",
      "cStatus": "Not Available"
    },
    {
      "id": 7,
      "cId": 7,
      "cImg": "/images/cars/posche-992.jpg",
      "cName": "Porsche 992",
      "cText": "The Porsche 992 keeps the spirit of the 911 alive with modern upgrades. Its classic shape meets powerful performance and new tech. Whether on city streets or winding roads, it delivers an incredible driving experience.",
      "cSlogan": "From city streets to highways, dominate every mile confidently.",
      "cCurrency": "AED",
      "cMoney": " 2100",
      "cDay": " DAY",
      "cYear": "2022",
      "cButton": "See Full Details",
      "cModel": "Luxury",
      "cBrand": "POSCHE",
      "cFuel": "Petrol",
      "cLocation": "",
      "img1": "/images/cars/posche-922/911-right.jpg",
      "img2": "/images/cars/posche-922/911-back.jpg",
      "img3": "/images/cars/posche-922/911-left.jpg",
      "mileage": "5500",
      "type": "Automatic",
      "person": "2",
      "bags": "3",
      "buttonEdit": "Edit",
      "buttonDelete": "Delete",
      "cAvailability": "Check Availability",
      "cStatus": "Available"
    },
    {
      "id": 8,
      "cId": 8,
      "cImg": "/images/cars/benz-g-63.jpg",
      "cName": "Mercedes Benz G 63",
      "cText": "The Mercedes-Benz G 63 is bold, powerful, and luxurious. Its rugged design hides a plush interior and a mighty V8 engine. It’s just as ready for off-road adventures as it is for city streets.",
      "cSlogan": "Smooth ride, bold design — feel the difference with every turn.",
      "cCurrency": "AED",
      "cMoney": " 2900",
      "cDay": " DAY",
      "cYear": "2021",
      "cButton": "See Full Details",
      "cModel": "SUV",
      "cBrand": "MERCEDEZ",
      "cFuel": "Petrol",
      "cLocation": "",
      "img1": "/images/cars/mercedez-benz/gclass-right.jpg",
      "img2": "/images/cars/mercedez-benz/gclass-back.jpg",
      "img3": "/images/cars/mercedez-benz/gclass-left.jpg",
      "mileage": "7700",
      "type": "Automatic",
      "person": "5",
      "bags": "6",
      "buttonEdit": "Edit",
      "buttonDelete": "Delete",
      "cAvailability": "Check Availability",
      "cStatus": "Not Available"
    },
    {
      "id": 9,
      "cId": 9,
      "cImg": "/images/cars/benz-g-63.jpg",
      "cName": "Mercedes Benz G 63",
      "cText": "The Mercedes-Benz G 63 is bold, powerful, and luxurious. Its rugged design hides a plush interior and a mighty V8 engine. It’s just as ready for off-road adventures as it is for city streets.",
      "cSlogan": "Smooth ride, bold design — feel the difference with every turn.",
      "cCurrency": "AED",
      "cMoney": " 2900",
      "cDay": " DAY",
      "cYear": "2021",
      "cButton": "See Full Details",
      "cModel": "SUV",
      "cBrand": "MERCEDEZ",
      "cFuel": "Petrol",
      "cLocation": "",
      "img1": "/images/cars/mercedez-benz/gclass-right.jpg",
      "img2": "/images/cars/mercedez-benz/gclass-back.jpg",
      "img3": "/images/cars/mercedez-benz/gclass-left.jpg",
      "mileage": "7700",
      "type": "Automatic",
      "person": "5",
      "bags": "6",
      "buttonEdit": "Edit",
      "buttonDelete": "Delete",
      "cAvailability": "Check Availability",
      "cStatus": "Not Available"
    },
    {
      "id": 10,
      "cId": 10,
      "cImg": "/images/cars/benz-g-63.jpg",
      "cName": "Mercedes Benz G 63",
      "cText": "The Mercedes-Benz G 63 is bold, powerful, and luxurious. Its rugged design hides a plush interior and a mighty V8 engine. It’s just as ready for off-road adventures as it is for city streets.",
      "cSlogan": "Smooth ride, bold design — feel the difference with every turn.",
      "cCurrency": "AED",
      "cMoney": " 2900",
      "cDay": " DAY",
      "cYear": "2021",
      "cButton": "See Full Details",
      "cModel": "SUV",
      "cBrand": "MERCEDEZ",
      "cFuel": "Petrol",
      "cLocation": "",
      "img1": "/images/cars/mercedez-benz/gclass-right.jpg",
      "img2": "/images/cars/mercedez-benz/gclass-back.jpg",
      "img3": "/images/cars/mercedez-benz/gclass-left.jpg",
      "mileage": "7700",
      "type": "Automatic",
      "person": "5",
      "bags": "6",
      "buttonEdit": "Edit",
      "buttonDelete": "Delete",
      "cAvailability": "Check Availability",
      "cStatus": "Not Available"
    }
  ],
  viewCustomerBookings: [
    {
      "id": 1,
      "image": "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg?t=st=1746616953~exp=1746620553~hmac=055b386edebef3831a394e0b3a55438611662163d422c374a510350f668fdb5e&w=740",
      "name": "Rehman",
      "mobile": "9020109201",
      "email": "rehman@gmail.com",
      "gender": "Male",
      "address": "Pune",
      "licence": "2020 DF 20 BCX",
      "cName": "Mercedes Benz G 63"
    },
    {
      "id": 2,
      "image": "https://img.freepik.com/free-vector/woman-floral-traditional-costume_1308-176159.jpg?t=st=1746617076~exp=1746620676~hmac=99a16cec226847a250f76655e6ea4a413209c98cf6fc4c541e2124828d4e6305&w=740",
      "name": "Disha",
      "mobile": "9020109201",
      "email": "disha@gmail.com",
      "gender": "Female",
      "address": "Pune",
      "licence": "2020 RK 20 BCX",
      "cName": "Mercedes Benz G 63"
    },
    {
      "id": 3,
      "image": "https://img.freepik.com/free-vector/smiling-woman-with-braided-hair_1308-175650.jpg?t=st=1746617207~exp=1746620807~hmac=0a8eb94285c8db58eb853be424deb47ad179594e5504bda45e2f3950412173fe&w=740",
      "name": "Palak",
      "mobile": "9020109201",
      "email": "palak@gmail.com",
      "gender": "Female",
      "address": "Fune",
      "licence": "2020 SM 20 BCX",
      "cName": "Porsche 992"
    },
    {
      "id": 4,
      "image": "https://img.freepik.com/free-vector/woman-floral-costume-illustration_1308-173499.jpg?t=st=1746617338~exp=1746620938~hmac=4a5f0a4fc49ab04c662d4a53eb83ace5beb58bbc12f27a59e010c1f2e3daf287&w=740",
      "name": "Poonam",
      "mobile": "9020109201",
      "email": "poonam@gmail.com",
      "gender": "Female",
      "address": "Pune",
      "licence": "2020 BS 20 BCX",
      "cName": "BMW M4"
    },
    {
      "id": 5,
      "image": "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg?t=st=1746616953~exp=1746620553~hmac=055b386edebef3831a394e0b3a55438611662163d422c374a510350f668fdb5e&w=740",
      "name": "Rehman",
      "mobile": "9020109201",
      "email": "rehman@gmail.com",
      "gender": "Male",
      "address": "Pune",
      "licence": "2020 DF 20 BCX",
      "cName": "Mercedes Benz G 63"
    },
    {
      "id": 6,
      "image": "https://img.freepik.com/free-vector/woman-floral-traditional-costume_1308-176159.jpg?t=st=1746617076~exp=1746620676~hmac=99a16cec226847a250f76655e6ea4a413209c98cf6fc4c541e2124828d4e6305&w=740",
      "name": "Disha",
      "mobile": "9020109201",
      "email": "disha@gmail.com",
      "gender": "Female",
      "address": "Pune",
      "licence": "2020 RK 20 BCX",
      "cName": "Mercedes Benz G 63"
    },
    {
      "id": 7,
      "image": "https://img.freepik.com/free-vector/smiling-woman-with-braided-hair_1308-175650.jpg?t=st=1746617207~exp=1746620807~hmac=0a8eb94285c8db58eb853be424deb47ad179594e5504bda45e2f3950412173fe&w=740",
      "name": "Palak",
      "mobile": "9020109201",
      "email": "palak@gmail.com",
      "gender": "Female",
      "address": "Fune",
      "licence": "2020 SM 20 BCX",
      "cName": "Porsche 992"
    },
    {
      "id": 8,
      "image": "https://img.freepik.com/free-vector/woman-floral-costume-illustration_1308-173499.jpg?t=st=1746617338~exp=1746620938~hmac=4a5f0a4fc49ab04c662d4a53eb83ace5beb58bbc12f27a59e010c1f2e3daf287&w=740",
      "name": "Poonam",
      "mobile": "9020109201",
      "email": "poonam@gmail.com",
      "gender": "Female",
      "address": "Pune",
      "licence": "2020 BS 20 BCX",
      "cName": "BMW M4"
    },
    {
      "image": "/images/form-images/defaultAvatar.jpg",
      "name": "Disha",
      "mobile": "123456789",
      "email": "disha@gmail.com",
      "gender": "Female",
      "address": "Dhule",
      "licence": "27 DRF 2001",
      "cName": "BMW I8",
      "id": 9
    },
    {
      "image": "/images/form-images/defaultAvatar.jpg",
      "name": "Palak",
      "mobile": "987654321",
      "email": "palak@gmail.com",
      "gender": "Female",
      "address": "Kuran Bk.",
      "licence": "27 DRF 2001",
      "cName": "Porsche Cayenne",
      "id": 10
    },
    {
      "image": "/images/form-images/defaultAvatar.jpg",
      "name": "Disha Fulpagare",
      "mobile": "1234567",
      "email": "disha@gmail.com",
      "gender": "Female",
      "address": "Dhule",
      "licence": "27 DRF 2001",
      "cName": "Porsche Cayenne",
      "id": 11
    },
    {
      "image": "/images/form-images/defaultAvatar.jpg",
      "name": "Palak Kadu",
      "mobile": "23456",
      "email": "",
      "gender": "",
      "address": "",
      "licence": "",
      "cName": "Audi RS Q3",
      "id": 12
    },
    {
      "image": "/images/form-images/defaultAvatar.jpg",
      "name": "Kalyani Lahane",
      "mobile": "12345689",
      "email": "kalyani@gmail.com",
      "gender": "Female",
      "address": "Pune",
      "licence": "27 DRF 2001",
      "cName": "Porsche Cayenne",
      "id": 13
    },
    {
      "image": "/images/form-images/defaultAvatar.jpg",
      "name": "Kalyani Lahane",
      "mobile": "987654321",
      "email": "kalyani@gmail.com",
      "gender": "Female",
      "address": "",
      "licence": "27 DRF 2006",
      "cName": "Mercedes Benz G 63",
      "id": 14
    },
    {
      "image": "/images/form-images/defaultAvatar.jpg",
      "name": "Kalyani Lahane",
      "mobile": "987654321",
      "email": "kalyani@gmail.com",
      "gender": "Female",
      "address": "",
      "licence": "27 DRF 2006",
      "cName": "Mercedes Benz G 63",
      "id": 15
    }
  ]
};

// Routes
app.get("/api/cars", (req, res) => res.json(data.carCard));
// Get a car by ID
app.get("/api/cars/:id", (req, res) => {
  const car = data.carCard.find(c => c.id === parseInt(req.params.id));
  if (!car) return res.status(404).json({ message: "Car not found" });
  res.json(car);
});

// Create a new car
app.post("/api/cars", (req, res) => {
  const newId = data.carCard.length > 0 ? Math.max(...data.carCard.map(c => c.id)) + 1 : 1;
  const newCar = { ...req.body, id: newId };
  data.carCard.push(newCar);
  res.status(201).json(newCar);
});

// Update (replace) a car by ID
app.put("/api/cars/:id", (req, res) => {
  const idx = data.carCard.findIndex(c => c.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ message: "Car not found" });
  data.carCard[idx] = { ...req.body, id: data.carCard[idx].id }; // preserve id
  res.json(data.carCard[idx]);
});

// Partial update a car by ID
app.patch("/api/cars/:id", (req, res) => {
  const car = data.carCard.find(c => c.id === parseInt(req.params.id));
  if (!car) return res.status(404).json({ message: "Car not found" });
  Object.assign(car, req.body);
  res.json(car);
});

// Delete a car by ID
app.delete("/api/cars/:id", (req, res) => {
  const idx = data.carCard.findIndex(c => c.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ message: "Car not found" });
  const removed = data.carCard.splice(idx, 1);
  res.json({ message: "Car deleted", car: removed[0] });
});

// Update (replace) a booking by ID
app.put("/api/bookings/:id", (req, res) => {
  const idx = data.viewCustomerBookings.findIndex(b => b.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ message: "Booking not found" });
  data.viewCustomerBookings[idx] = { ...req.body, id: data.viewCustomerBookings[idx].id }; // preserve id
  res.json(data.viewCustomerBookings[idx]);
});

// Partial update a booking by ID
app.patch("/api/bookings/:id", (req, res) => {
  const booking = data.viewCustomerBookings.find(b => b.id === parseInt(req.params.id));
  if (!booking) return res.status(404).json({ message: "Booking not found" });
  Object.assign(booking, req.body);
  res.json(booking);
});

// Delete a booking by ID
app.delete("/api/bookings/:id", (req, res) => {
  const idx = data.viewCustomerBookings.findIndex(b => b.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ message: "Booking not found" });
  const removed = data.viewCustomerBookings.splice(idx, 1);
  res.json({ message: "Booking deleted", booking: removed[0] });
});

app.get("/api/bookings", (req, res) => res.json(data.viewCustomerBookings));

app.get("/api/bookings/:id", (req, res) => {
  const booking = data.viewCustomerBookings.find(b => b.id === parseInt(req.params.id));
  booking ? res.json(booking) : res.status(404).json({ message: "Booking not found" });
});

// Create a new booking
app.post("/api/bookings", (req, res) => {
  const newId = data.viewCustomerBookings.length > 0 ? Math.max(...data.viewCustomerBookings.map(b => b.id)) + 1 : 1;
  const newBooking = { ...req.body, id: newId };
  data.viewCustomerBookings.push(newBooking);
  res.status(201).json(newBooking);
});

// Upload API
app.post("/api/uploads", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const filePath = `/images/cars/${req.file.filename}`;
  res.json({ message: "Image uploaded successfully", path: filePath });
});

// Start server
app.listen(PORT, () => console.log(`🚗 Server running on http://localhost:${PORT}`));
