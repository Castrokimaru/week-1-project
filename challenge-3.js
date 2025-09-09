function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    return 1700;
}

function calculateNSSF(grossSalary) {
    const tierIMax = 7000;
    const tierIIMax = 36000;
    const contributionRate = 0.06;
    
    if (grossSalary <= tierIMax) {
        return grossSalary * contributionRate;
    } else if (grossSalary <= tierIIMax) {
        return tierIMax * contributionRate;
    } else {
        return tierIIMax * contributionRate;
    }
}

function calculatePAYE(taxableIncome) {
    let tax = 0;
    
    if (taxableIncome > 32333) {
        tax += (taxableIncome - 32333) * 0.3;
        taxableIncome = 32333;
    }
    
    if (taxableIncome > 24000) {
        tax += (taxableIncome - 24000) * 0.25;
        taxableIncome = 24000;
    }
    
    tax += taxableIncome * 0.1;
    

    const personalRelief = 2400;
    tax = Math.max(0, tax - personalRelief);
    
    return tax;
}

function netSalaryCalculator() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Enter basic salary: ', (basicSalaryInput) => {
        const basicSalary = parseFloat(basicSalaryInput);
        
        readline.question('Enter benefits: ', (benefitsInput) => {
            const benefits = parseFloat(benefitsInput);
            

            if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
                console.log('Invalid input! Please enter positive numbers for both basic salary and benefits.');
            } else {
            
                const grossSalary = basicSalary + benefits;
                
                const nhifDeduction = calculateNHIF(grossSalary);
                const nssfDeduction = calculateNSSF(grossSalary);
                const paye = calculatePAYE(grossSalary - nssfDeduction); 
                
                const totalDeductions = nhifDeduction + nssfDeduction + paye;
                const netSalary = grossSalary - totalDeductions;
                
    
                console.log('\n--- Salary Calculation Results ---');
                console.log(`Gross Salary: ${grossSalary.toFixed(2)}`);
                console.log(`NHIF Deduction: ${nhifDeduction.toFixed(2)}`);
                console.log(`NSSF Deduction: ${nssfDeduction.toFixed(2)}`);
                console.log(`PAYE (Tax): ${paye.toFixed(2)}`);
                console.log(`Total Deductions: ${totalDeductions.toFixed(2)}`);
                console.log(`Net Salary: ${netSalary.toFixed(2)}`);
            }
            
            readline.close();
        });
    });
}

netSalaryCalculator();