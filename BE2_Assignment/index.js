const { initializeDatabase } = require("./db/db.connect");
const Car = require("./models/car.models");

initializeDatabase();


// 1. CREATE CAR

const carData = {
  brand: "Ford",
  model: "Mustang",
  year: 2019,
  bodyStyle: "Convertible",
  fuelType: "Gasoline",
  transmission: "Automatic",
  engine: "5.0L V8",
  mileage: 25000,
  color: "Red",
  price: 3500000,
  condition: "Used",
  description: "Exciting Ford Mustang convertible with powerful V8 engine.",
  photos: [
    "https://example.com/mustang-photo1.jpg",
    "https://example.com/mustang-photo2.jpg",
    "https://example.com/mustang-photo3.jpg",
  ],
};


// 2. CREATE SECOND CAR

const secondCarData = {
  brand: "Honda",
  model: "Civic",
  year: 2018,
  bodyStyle: "Coupe",
  fuelType: "Gasoline",
  transmission: "Manual",
  engine: "1.5L Turbocharged Inline-4",
  mileage: 40000,
  color: "Black",
  price: 1800000,
  condition: "Used",
  description: "Sporty Civic coupe with low mileage and manual transmission.",
  photos: [
    "https://example.com/civic-photo1.jpg",
    "https://example.com/civic-photo2.jpg",
    "https://example.com/civic-photo3.jpg",
  ],
};


// CREATE FUNCTION

async function createCar(carData) {
  try {
    const newCar = new Car(carData);

    const savedCar = await newCar.save();

    console.log("New Car:", savedCar);
  } catch (error) {
    console.log("Error creating car:", error);
  }
}


// 3. READ ALL CARS

async function getAllCars() {
  try {
    const cars = await Car.find();

    console.log("All Cars:", cars);
  } catch (error) {
    console.log("Error fetching cars:", error);
  }
}


// 4. READ CARS BY BRAND

async function getCarsByBrand(brand) {
  try {
    const cars = await Car.find({
      brand: brand,
    });

    console.log("Cars by brand:", cars);
  } catch (error) {
    console.log("Error fetching cars by brand:", error);
  }
}


// 5. READ CARS BY COLOR

async function getCarsByColor(color) {
  try {
    const cars = await Car.find({
      color: color,
    });

    console.log("Cars by color:", cars);
  } catch (error) {
    console.log("Error fetching cars by color:", error);
  }
}


// 6. UPDATE PRICE BY MODEL

async function updateCarPriceByModel(model, newPrice) {
  try {
    const updatedCar = await Car.findOneAndUpdate(
      { model: model },
      { price: newPrice },
      { new: true }
    );

    console.log("Updated Car:", updatedCar);
  } catch (error) {
    console.log("Error updating car price:", error);
  }
}


// 7. UPDATE CONDITION BY MODEL

async function updateCarConditionByModel(model, newCondition) {
  try {
    const updatedCar = await Car.findOneAndUpdate(
      { model: model },
      { condition: newCondition },
      { new: true }
    );

    console.log("Updated Car:", updatedCar);
  } catch (error) {
    console.log("Error updating car condition:", error);
  }
}


// 8. DELETE CAR BY ID

async function deleteCarById(carId) {
  try {
    const deletedCar = await Car.findByIdAndDelete(carId);

    console.log("Deleted Car:", deletedCar);
  } catch (error) {
    console.log("Error deleting car:", error);
  }
}


// 9. DELETE CAR BY BODY STYLE

async function deleteCarByBodyStyle(bodyStyle) {
  try {
    const deletedCar = await Car.findOneAndDelete({
      bodyStyle: bodyStyle,
    });

    console.log("Deleted Car:", deletedCar);
  } catch (error) {
    console.log("Error deleting car:", error);
  }
}


// FUNCTION CALLS


// 1 & 2. Create two cars

// createCar(carData);
// createCar(secondCarData);


// 3. Get all cars

// getAllCars();


// 4. Get cars by brand

// getCarsByBrand("Ford");


// 5. Get cars by color

// getCarsByColor("Black");


// 6. Update Corolla price

// updateCarPriceByModel("Corolla", 2300000);


// 7. Update Model S condition

// updateCarConditionByModel("Model S", "Used");


// 8. Delete Tesla by ID

// deleteCarById("6a756df7f03d72d94c395bc5");


// 9. Delete car by body style

// deleteCarByBodyStyle("Coupe");