import React, { Fragment } from 'react'

function TransactionList() {
    return (
        <Fragment>
            <h3>History</h3>
            <ul className="list">
                <li className="minus">
                Cash <span>-$400</span><button className="delete-btn">x</button>
                </li>  
            </ul>
        </Fragment>
    )
}

export default TransactionList
