const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

function calculateAverage(data) {
    let sum = 0;

    for (const student of data) {
        sum = sum + student.score;
    }

    return sum / data.length;
}
function findTopStudent(data) {
    let topStudent = data[0];

    for (const student of data) {
        if (student.score > topStudent.score) {
            topStudent = student;
        }
    }

    return topStudent.name;
}
function filterFailed(data, passScore) {
    let failed = [];

    for (const student of data) {
        if (student.score < passScore) {
            failed.push(student.name);
        }
    }

    return failed;
}

function addLetterGrade(data) {
    let result = [];

    for (const student of data) {
        let letter;

        if (student.score >= 90) {
            letter = "A";
        } else if (student.score >= 75) {
            letter = "B";
        } else {
            letter = "C";
        }

        result.push({ ...student, letter: letter });
    }

    return result;
}
console.log("Средний балл:", calculateAverage(grades));
console.log("Лучший студент:", findTopStudent(grades));
console.log("Студенты, не сдавшие экзамен:", filterFailed(grades, 50));
console.log("Оценки:", addLetterGrade(grades));