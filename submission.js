// Birth year: Number type, or a digit String, positive integer < than 2026.
function printAgeIn2026(birthYear){
    let age = 2026 - Number(birthYear);

    console.log("This person will turn " + age + " in 2026.")
    return age;
}

// Age: Number type, or a digit String, positive integer.
function printAgeIn10Years(age){
    let newAge = Number(age) + 10;

    console.log("This person will be " + newAge + " in 10 years.")
    return newAge;
}

// Age: String or Number representing an integer.
function checkIfAdult(age){
    let isAdult = Number(age) >= 18;

    
    console.log("The person is " + (isAdult ? "" : "not")  + " adult.")
    return isAdult;
}


function checkIfZero(number){
    let isZero = number === 0;

    
    console.log("The input is " + (isZero ? "" : "not")  + " 0.")
    return isZero;
}

// string: non-empty String. number: Number, will not be NaN.
function checkIfEquivalent(string, number){
    let isEquivalent = Number(string) === number;

    
    console.log("The string is " + (isEquivalent ? "" : "not")  + " equivalent to the number.")
    return isEquivalent;
}

// unreadCount: positive integer Number, null, or undefined.
function unreadAlert(unreadCount){
    unreadCount && console.log("You have " + unreadCount + " messages.")
}

// unreadCount: may be any type.
function unreadAlertValidated(unreadCount){
    typeof unreadCount === "number" && unreadCount > 0 && console.log("You have " + unreadCount + " messages.")
}

// unreadCount: String, Number, null, or undefined.
function unreadAlertStringInput(unreadCount){
    unreadCount && Number(unreadCount) > 0 && console.log("You have " + unreadCount + " messages.")
}

// score: Number, null, or undefined.
function showScore(score){
    let correctedScore = score ?? "N/A";

    console.log("The score is:" + score)
    return correctedScore;
}

// username: String (including empty string), or undefined.
function printWelcomeMessage(username){
    let userOrPlaceholder = username || "Mustang";

    console.log("Welcome, " + userOrPlaceholder + "!")
    return userOrPlaceholder;
}