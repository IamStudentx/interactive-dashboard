# Interactive Productivity Dashboard
This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.

## TODO: Future Enhancements
- [ ] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [x] Add a weekly task goal calculator
    multiples daily goal by five and adds bonus.

## Imperial/Mtric Converter
    Takes inches, centimeters, meters, feet, yards, miles, and kilometers as input and converts to either previosuly listed measurements. 

### Logic and Pseudocode
BEGIN

    INPUT measurement
    INPUT decision

    FUNCTION conversion(measurement, decision)

        IF decision = "inch to centimeter" THEN

            centimeter = measurement * 2.54

            OUTPUT "Your conversion of " + measurement + " inches to centimeters is " + centimeter + " centimeters"

        ELSE IF decision = "foot to centimeter" THEN

            centimeter = measurement * 30.48

            OUTPUT "Your conversion of " + measurement + " feet to centimeters is " + centimeter + " centimeters"

        ELSE IF decision = "yard to meter" THEN

            meter = measurement * 0.91

            OUTPUT "Your conversion of " + measurement + " yards to meters is " + meter + " meters"

        ELSE IF decision = "mile to kilometer" THEN

            kilometer = measurement * 1.61

            OUTPUT "Your conversion of " + measurement + " miles to kilometers is " + kilometer + " kilometers"

        ELSE IF decision = "centimeter to inch" THEN

            inch = measurement * 0.39

            OUTPUT "Your conversion of " + measurement + " centimeters to inches is " + inch + " inches"

        ELSE IF decision = "centimeter to foot" THEN

            foot = measurement * 0.0328

            OUTPUT "Your conversion of " + measurement + " centimeters to feet is " + foot + " feet"

        ELSE IF decision = "meter to yard" THEN

            yard = measurement * 1.09

            OUTPUT "Your conversion of " + measurement + " meters to yards is " + yard + " yards"

        ELSE IF decision = "kilometer to mile" THEN

            mile = measurement * 0.62

            OUTPUT "Your conversion of " + measurement + " kilometers to miles is " + mile + " miles"

        ELSE

            OUTPUT "Invalid conversion selection"

        END IF

    END FUNCTION

END