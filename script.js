// Get HTML elements
const inputValue     = document.getElementById('inputValue');
const conversionType = document.getElementById('conversionType');
const convertBtn     = document.getElementById('convertBtn');
const resultValue    = document.getElementById('resultValue');
const unitLabel      = document.getElementById('unitLabel');

// Conversion rates
const MILES_TO_KM = 1.60934;
const KM_TO_MILES = 1 / MILES_TO_KM;

// Main conversion function
function convertUnits() {
  const value = parseFloat(inputValue.value);
  
  if (isNaN(value) || value < 0) {
    resultValue.textContent = "0";
    unitLabel.textContent = "km";
    return;
  }
  
  let result = 0;
  let unit = "km";
  
  if (conversionType.value === "milesToKm") {
    result = value * MILES_TO_KM;
    unit = "km";
  } else if (conversionType.value === "kmToMiles") {
    result = value * KM_TO_MILES;
    unit = "miles";
  }
  
  resultValue.textContent = result.toFixed(2);
  unitLabel.textContent = unit;
}

// Run conversion when button is clicked
convertBtn.addEventListener('click', convertUnits);

// Bonus: Live update as user types or changes dropdown
inputValue.addEventListener('input', convertUnits);
conversionType.addEventListener('change', convertUnits);

// Run once on page load (in case of pre-filled value)
convertUnits();