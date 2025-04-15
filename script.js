function calculateScore() {
    let totMarks = getMarks();
    let averageMark = findAverageMark(totMarks);
    let grade = calculateGrade(averageMark);
    document.getElementById("total").innerText = totMarks;
    document.getElementById("average").innerText = averageMark;
    document.getElementById("grade").innerText = grade;
}

function getMarks() {
    let totMarks = 0
    for (let i = 1; i <= 5; i++) {
        mark = prompt("Please Enter mark for Subject" + i)       
        if (mark > 0) {
            totMarks = getTotalMarks(totMarks, mark)
        } else {
           break;
        }
    }   
    return totMarks
}

function getTotalMarks(totMarks, mark) {
    mark= Number(mark);
    if (mark > 0) {
        totMarks += mark;
    }
    return totMarks;
}

function findAverageMark(totMarks) {
    return totMarks / 5;
}

function calculateGrade(averageMark) {
    if (averageMark >= 90) {
        return "A+"
    }
    if (averageMark >= 80 && averageMark <= 89) {
        return "A"
    }
    if (averageMark >= 70 && averageMark <= 79) {
        return "B"
    }
    if (averageMark >= 60 && averageMark <= 69) {
        return "C"
    }
    if (averageMark >= 50 && averageMark <= 59) {
        return "D"
    }
    else {
        return "F"
    }
}