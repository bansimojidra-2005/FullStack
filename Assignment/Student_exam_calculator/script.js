function calculate() {

    // Student details
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let studentClass = document.getElementById("class").value;

    let m1 = Number(document.getElementById("num1").value);
    let m2 = Number(document.getElementById("num2").value);
    let m3 = Number(document.getElementById("num3").value);

    // Calculate total and percentage
    let total = m1 + m2 + m3;
    let percentage = total / 3;

    // Grade
    let grade;

    if (percentage >= 90)
        grade = "A+";
    else if (percentage >= 80)
        grade = "A";
    else if (percentage >= 70)
        grade = "B";
    else if (percentage >= 60)
        grade = "C";
    else if (percentage >= 50)
        grade = "D";
    else
        grade = "F";

    // Status
    let status;

    if (m1 >= 40 && m2 >= 40 && m3 >= 40)
        status = "Student is passed in all subjects";
    else
        status = "Student is Failed in one or more subjects";

    // Print
    document.getElementById("total").innerHTML =
        "Name: " + name + "<br>" +
        "Roll No: " + roll + "<br>" +
        "Class: " + studentClass + "<br>" +
        "Total: " + total;

    document.getElementById("percentage").innerHTML = percentage;

    document.getElementById("grade").innerHTML = grade;

    document.getElementById("result").innerHTML = status;
}