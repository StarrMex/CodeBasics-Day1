var fahrenheitToCelsiusMain = function (input) {
  var fTemp = input;
  var fToC = ((fTemp - 32) * 5) / 9;
  var myOutputValue = fToC;
  return myOutputValue;
};

var roadTripCostBaseMain = function (input) {
  var travelKM = input;
  var travelMiles = travelKM * 1.6;
  var fuelCost = (travelMiles / 9) * 2.2;
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  var myOutputValue = fuelCost;
  return myOutputValue;
};

var roadTripCostComfortableMain = function (input) {
  var travelKM = input;
  var travelMiles = travelKM * 1.6;
  var fuelCostCar = (travelMiles / 9) * 2.2;
  var fuelCostTrain = (travelMiles / 9) * 2;
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var myOutputValue = fuelCostCar - fuelCostTrain;
  return myOutputValue;
};

var iceMachineMain = function (input) {
  var noOfGuest = input;
  var gramIcePerGuest = noOfGuest * 2 * 4 * 1.5;
  var poundIcePerGuest = gramIcePerGuest * 0.0022;
  var durationIceCube = poundIcePerGuest / 5;
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  var myOutputValue = durationIceCube;
  return myOutputValue;
};

var beerOrderMain = function (input) {
  var avgCustomer = input;
  var totalPintPerQuarter = avgCustomer * 2 * 3 * 30;
  var noOfHalfKeg = totalPintPerQuarter / 124;
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var myOutputValue = noOfHalfKeg;
  return myOutputValue;
};

var cellularDataMain = function (input) {
  var gbPerMonth = input;
  var costPerGB = 19.99 / gbPerMonth;
  var costPerGB50 = 19.99 / gbPerMonth + 19.99 / 50;
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  if (gbPerMonth <= 50) {
    var myOutputValue = costPerGB;
  } else {
    var myOutputValue = costPerGB50;
  }
  return myOutputValue;
};
