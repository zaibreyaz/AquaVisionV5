const object = {
        name: "Banana",
        image: "../static/img/banana.png",
        water: "91 liters per serving",
        blue: "12%",
        green: "84%",
        grey: "4%"
};

const objName = document.getElementById("name");
const objImage = document.getElementById("image");
const objWater = document.getElementById("water");
const objBlue = document.getElementById("blue");
const objGreen = document.getElementById("green");
const objGrey = document.getElementById("grey");

objName.innerHTML = object.name;
objImage.src = object.image;
objWater.innerHTML = object.water;
objBlue.innerHTML = object.blue;
objGreen.innerHTML = object.green;
objGrey.innerHTML = object.grey;