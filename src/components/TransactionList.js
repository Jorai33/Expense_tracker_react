import React, { Fragment, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

function TransactionList() {
    // UseContext Hook to Pull out anything From GlobalContext
    const context = useContext(GlobalContext);

    return (
        <Fragment>
            <h3>History</h3>
            <ul className="list">
                {context.transactions.map((transaction) => {
                   return (<Transaction key={transaction.id} transaction={transaction} />)
                })}
            </ul>
        </Fragment>
    )
}

export default TransactionList
