import React , {useContext}from 'react'
import { GlobalContext } from '../Context/GlobalState';
import { numberWithCommas } from '../utils/format'

const Transaction = ({ transaction }) => {
  const {deleteTransaction} = useContext(GlobalContext
    )
  const sign= transaction.amount < 0 ? '-' : '+';
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}${numberWithCommas(Math.abs(transaction.amount))}</span>
      <button class="delete-btn" onClick = {() => deleteTransaction(transaction._id)}>x</button>
    </li>
  )
}

export default Transaction;