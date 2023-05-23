import PropTypes from 'prop-types';
import TransactionItem from "components/TransactionItem"
import {Transactions,THead} from './TransactionHistory.styled'

export default function TransactionHistory({items}) {
  return <Transactions>
  <THead>
      <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </THead>
    <tbody>
      {items.map(item => <TransactionItem
        type={item.type}
        amount={item.amount}
        currency={item.currency}
        key={item.id}>
    </TransactionItem>)}
  </tbody>
</Transactions>
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.string.isRequired
    })
  )
}
