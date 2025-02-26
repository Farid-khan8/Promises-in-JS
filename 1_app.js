
// ------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------Callback Hell-----------------------------------------------------
h1 = document.querySelector("h1");

h1.style.color = "red"; // for immediate color-change

function colorChange(color, delay) {
    setTimeout(() => {
        h1.style.color = color;
    }, delay);
}

colorChange("red", 1000);
colorChange("orange", 2000);
colorChange("green", 3000);
colorChange("blue", 4000);

//this is not the correct way also we want to change the color after every 1s if the 1st color changed then only proceed to the next else not
//So to tackle this prob we used
//another callback function and used that callback inside the color change

//
function colorChange(color, delay, anotherColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        anotherColorChange();
    }, delay);
}

colorChange("red", 1000, () => {
    colorChange("orange", 1000, () => {
        colorChange("green", 1000, () => {
            colorChange("blue", 1000, () => {
                colorChange("yellow", 1000);
            });
        });
    });
});
//This code works but isn't a very good code
//This JS Callback nesting is called  -> CallBack Hell / asynchronous
//
//
//resolving the callback hell with promises for the color change code
h1 = document.querySelector("h1");

function colorChange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed");
        }, delay);
    });
}

colorChange("red", 1000)
    .then(() => {
        console.log("red color was changed");
        return colorChange("orange", 1000);
    })
    .then(() => {
        console.log("orange color changed");
        return colorChange("green", 1000);
    })
    .then(() => {
        console.log("green color changed");
        return colorChange("blue", 1000);
    })
    .then(() => {
        console.log("blue color changed");
        return colorChange("yellow", 2000);
    })
    .then(() => {
        console.log("yellow color changed");
    });
