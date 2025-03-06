//your JS code here. If required.
const output = document.getElementById("output");

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function transformArray(array) {
    return delay(3000).then(() => {
        output.innerText = "Initial array: " + array;
        return array;
    }).then((array) => {
        return delay(1000).then(() => {
            const evenNumbers = array.filter((number) => number % 2 === 0);
            output.innerText = "Even numbers: " + evenNumbers;
            return evenNumbers;
        });
    }).then((evenNumbers) => {
        return delay(2000).then(() => {
            const doubledNumbers = evenNumbers.map((number) => number * 2);
            output.innerText = "Doubled numbers: " + doubledNumbers;
            return doubledNumbers;
        });
    });
}

transformArray([1, 2, 3, 4]);
