function calculateGrade(marks) {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 49 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 48) {
        return 'D';
    } else {
        return 'E';
    }
}

 function studentGradeGenerator() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Enter student marks (0-100): ', (input) => {
        const marks = parseFloat(input);
        
        if (isNaN(marks) || marks < 0 || marks > 100) {
            console.log('Invalid input! Please enter a number between 0 and 100.');
        } else {
            const grade = calculateGrade(marks);
            console.log(`Student Grade: ${grade}`);
        }
        
        readline.close();
    });
}