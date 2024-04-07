let currentNumberDisplay = "";
let currentNumber = "";
let finalNumber = "0";
let operation = "";
let equal = "";

function clearDisplay() {
  currentNumber = "0";
  currentNumberDisplay = "";
  finalNumber = "0";
  operation = "";
  isEqualSignOn = false;
  $(".displayScreen").text(currentNumber);
  $(".operatorDisplay").text("");
  currentNumber = "";
  return;
}

function reset() {
  currentNumber = "0";
  currentNumberDisplay = "";
  currentNumber = "";
}

function performOperation(sign, num) {
  $(".operatorDisplay").text(sign);

  if (sign === "+") {
    finalNumber = Number(num) + Number(finalNumber);
    currentNumberDisplay = finalNumber;
  } else if (sign === "-") {
    if (finalNumber === "0") {
      finalNumber = Number(num) - Number(finalNumber);
    } else {
      finalNumber = Number(finalNumber) - Number(num);
    }
    currentNumberDisplay = finalNumber;
  } else if (sign === "x") {
    if (finalNumber === "0") {
      finalNumber = "1";
    }

    finalNumber = Number(num) * Number(finalNumber);
    currentNumberDisplay = finalNumber;
    console.log("www");
  } else if (sign === "/") {
    if (finalNumber === "0") {
      finalNumber = "1";
      finalNumber = Number(num) / Number(finalNumber);
      currentNumberDisplay = finalNumber;
    } else {
      finalNumber = Number(finalNumber) / Number(num);
      currentNumberDisplay = finalNumber;
    }
  }

  $(".displayScreen").text(currentNumberDisplay);
  currentNumberDisplay = "";
}
$("button").on("click", function (e) {
  $(".operatorDisplay").text("");
  let id = e.target.id;
  if (id === "ce") {
    clearDisplay();
  } else if (id === "+" || id === "-" || id === "x" || id == "/") {
    operation = id;
    performOperation(id, currentNumberDisplay);
  } else if (id === "=") {
    equal = id;
    performOperation(operation, currentNumberDisplay);
    $(".operatorDisplay").text(equal);
    operation = "";
    reset();
  } else if (currentNumberDisplay.length < 9) {
    if (equal === "=" && operation === "") {
      finalNumber = "0";
      equal = "";
    }
    if (id === "." && currentNumberDisplay.length == 0) {
      return;
    }
    currentNumberDisplay = currentNumberDisplay + id;
    $(".displayScreen").text(currentNumberDisplay);
  }
});

function getDate() {
  const d = new Date();
  return d;
}

$("h3").text(getDate);
