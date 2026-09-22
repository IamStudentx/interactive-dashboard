function conversion(measurement, decision) {
    if (decision == 1) {
        var centimeter = measurement * 2.54;
        return "Your conversion of " + measurement + " inches to centimeters is " + centimeter + " centimeters";

    } else if (decision == 2) {
        var centimeter = measurement * 30.48;
        return "Your conversion of " + measurement + " feet to centimeters is " + centimeter + " centimeters";

    } else if (decision == 3) {
        var meter = measurement * 0.91;
        return "Your conversion of " + measurement + " yards to meters is " + meter + " meters";

    } else if (decision == 4) {
        var kilometer = measurement * 1.61;
        return "Your conversion of " + measurement + " miles to kilometers is " + kilometer + " kilometers";

    } else if (decision == 5) {
        var inch = measurement * 0.39;
        return "Your conversion of " + measurement + " centimeters to inches is " + inch + " inches";

    } else if (decision == 6) {
        var foot = measurement * 0.0328;
        return "Your conversion of " + measurement + " centimeters to feet is " + foot + " feet";

    } else if (decision == 7) {
        var yard = measurement * 1.09;
        return "Your conversion of " + measurement + " meters to yards is " + yard + " yards";

    } else if (decision == 8) {
        var mile = measurement * 0.62;
        return "Your conversion of " + measurement + " kilometers to miles is " + mile + " miles";

    } else {
        return "Invalid conversion selection";
    }
}

let button = document.getElementById("convert-button");

button.addEventListener("click", function(event) {

    event.preventDefault();

    let input_value = parseFloat(document.getElementById("measurement").value);

    let conversion_type = document.getElementsByTagName("select")[0];

    let decision = conversion_type.value;

    let output = document.getElementById("conversion-result");

    output.innerHTML = conversion(input_value, decision);

});