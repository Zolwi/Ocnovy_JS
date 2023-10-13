function calculateLoanRepayment(loanAmount, interestRate, loanTerm) {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfMonths = loanTerm * 12;
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfMonths));
    const totalPayment = monthlyPayment * numberOfMonths;
    const totalInterest = totalPayment - loanAmount;
  
    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2)
    };
  }
  const loanAmount = 200000; 
  const interestRate = 10;
  const loanTerm = 2;

  const result = calculateLoanRepayment(loanAmount, interestRate, loanTerm);

  console.log("Ежемесячный платеж: " + result.monthlyPayment + " рублей");
  console.log("Общая сумма выплаты: " + result.totalPayment + " рублей");
  console.log("Переплата по кредиту: " + result.totalInterest + " рублей");
  