import React, { Fragment, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState"

function Balance() {
     // UseContext Hook to Pull out anything From GlobalContext
    const context = useContext(GlobalContext);

    // Return an array of amounts
    const amounts = context.transactions.map((transaction) => {
        return transaction.amount;
    });


    // Return the total sum of the amounts
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <Fragment>
            <h4>Your Balance</h4>
            <h1>€{total}</h1>
        </Fragment>
    )
}

export default Balance;
