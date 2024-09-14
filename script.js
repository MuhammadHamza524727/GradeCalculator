// Make veriables to prompt Students per subject marks
let english = Number(
    prompt("Please Enter Your English Marks out of 100:")
);
let urdu = Number(prompt("Please Enter Your Urdu Marks out of 100:"));
let mathamatics = Number(
    prompt("Please Enter Your Mathematics Marks out of 100:")
);
let physics = Number(
    prompt("Please Enter Your Physics Marks out of 100:")
);
let chemistry = Number(
    prompt("Please Enter Your Chemistry Marks out of 100:")
);
let biology = Number(
    prompt("Please Enter Your Biology Marks out of 100:")
);

// make veriables total subject marks
let totalmarks = 100*5;

// all  subjects add marks and get obtain  mark
let obtainMarks = english + urdu + mathamatics + physics + chemistry + biology;

// percentage of total marks devided by obtain marks multiply by 100
let percentage = (obtainMarks/ totalmarks)* 100
let   grade = percentage

    // using if else statement giving your grade
if (percentage >= 80) {
    grade = "A+ \n “Congratulations on your well-deserved success! You're an inspiration!”";
} else if (percentage >= 70) {
    grade = "A \n  “A person who never made a mistake never tried anything new. \n --Albert Einstein--”";
}
else if (percentage >= 60) {
    grade = "B \n “Genius is 10% inspiration, 90% perspiration.”";
}
else if (percentage >= 50) {
    grade = "C \n “Genius is 10% inspiration, 90% perspiration.”";
} else {
    grade = ("F \n “Failure is another stepping stone to greatness.”");
}

alert("MARKSHEET\nEnglish: " + 
    english +
    "/100\n Urdu: " + 
    urdu + 
    "/100\n mathematics: " +
    mathamatics +
    "/100\n Physics: " +
    physics +
    "/100\n Chemistry: " +
    chemistry +
    "/100\n Biology: " +
    biology +
    "/100\n Obtain Marks: " +
    obtainMarks +
    "/500\n Percentage: " +
    percentage +
    "%\n Grade: " +
    grade 
    
     

);

