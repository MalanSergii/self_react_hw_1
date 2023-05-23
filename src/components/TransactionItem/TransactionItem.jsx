import PropTypes from "prop-types";
import { BodyTr } from './TransactionItem.styled'

export default function TransactionItem({ type, amount, currency}) {
  return <BodyTr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
  </BodyTr>
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
}