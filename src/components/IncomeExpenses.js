import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"

function IncomeExpenses() {
    // UseContext Hook to Pull out anything From GlobalContext
    const context = useContext(GlobalContext);

    const amounts = context.transactions.map((transaction) => {
        return transaction.amount;
    });

    const income = amounts
                        // Return only the positive amounts
                        .filter((item) => {
                           return item > 0
                        })
                        // Return the sum of the remaining amounts
                        .reduce((acc, item) => (acc += item), 0)
                        // 2 Numbers after The Decimal
                        .toFixed(2);

    const expense = amounts
                        // Return only the negative amounts
                        .filter((item) => {
                            return item < 0
                        })
                        // Return the sum of the remaining amounts
                        .reduce((acc, item) => (acc += item), 0)
                        // 2 Numbers after The Decimal
                        .toFixed(2);




    return (
        <div className="inc-exp-container">
            <div>
               <h4>Income</h4>
               <p className="money plus">{income}</p>
            </div>
            <div>
               <h4>Expense</h4>
               <p className="money minus">{expense}</p>
            </div>
      </div>
    )
}

export default IncomeExpenses;
