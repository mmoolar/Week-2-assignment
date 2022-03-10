const akanNameCalculator = (CC, YY, MM, DD, gender) => {
    // BODMAS
    const calculationResult = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
    let wholeNumber = Number(calculationResult.toFixed())

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    if (wholeNumber >= 7) {
        
        wholeNumber = wholeNumber - 1;
    }

 
    if (document.getElementById("birthGender").checked) {
        var gender = 'male';

        return { 'name': maleNames[wholeNumber], 'day': daysOfTheWeek[wholeNumber] };
    } else if (document.getElementById("birthGender2").checked) {
        var gender = 'Female';
    
        return { 'name': femaleNames[wholeNumber], 'day': daysOfTheWeek[wholeNumber] };
    }
}


const handleClick = () => {
    // Step One - Retrieve refrence to HTML elements
    const birthDayBox = document.getElementById("birthDay")
    const birthMonthBox = document.getElementById("birthMonth")
    const birthYearBox = document.getElementById("birthYear")
    const birthGenderBox = document.getElementById("birthGender")

    // Step Two - Retrieve input elements values
    const birthDay = birthDayBox.value;
    const birthMonth = birthMonthBox.value;
    const birthYear = birthYearBox.value;
    const birthGender = birthGenderBox.value;

    // Check user gender
    const allGendersArray = ["Male", "Female"]
    if (allGendersArray.includes(birthGender)) {
        // CC = Century
        // YY = Year
        // 1989
        const centuryVar = String(birthYear).substring(0, 2)
        const yearVar = String(birthYear).substring(2)
            // Check that day and month are valid
        if (birthDay <= 0 || birthDay > 31) {
            alert('Please enter a valid Date')
        } else if (birthMonth <= 0 || birthMonth > 12) {
            alert('Please enter a valid month')
        } else if (birthMonth == 2 && birthDay > 29) {
            alert("invalid day of month")
        } else if (birthYear == 0 || birthYear <= 1900) {
                alert("You're kidding right?!! Enter correct Year and Try again")
        } else if (birthGender == 0 ){
            alert('Please Select your gender')
        } else {
            // Execute calculation
            const akanName = akanNameCalculator(centuryVar, yearVar, birthMonth, birthDay, birthGender);
            alert(`Your Akan name is ${akanName.name} born on ${akanName.day}`)
        }
    } 
}

