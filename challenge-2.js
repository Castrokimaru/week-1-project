
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    
    if (speed <= speedLimit) {
        return { points: 0, message: 'Ok' };
    } else {
        const points = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        
        if (points > 12) {
            return { points, message: 'License suspended' };
        } else {
            return { points, message: `Points: ${points}` };
        }
    }
}

function speedDetector() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Enter car speed (km/s): ', (input) => {
        const speed = (input);
        
        if (isNaN(speed) || speed < 0) {
            console.log('Invalid input! Please enter a positive number.');
        } else {
            const result = calculateDemeritPoints(speed);
            console.log(result.message);
        }
        
        readline.close();
    });
}

speedDetector();