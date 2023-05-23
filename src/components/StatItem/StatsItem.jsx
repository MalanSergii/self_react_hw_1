import PropTypes from 'prop-types';
import {Item, Label, Percentage } from "./StatItem.styled"

export default function StatItem({ percentage, label, color}) {

  return <Item color={color}>
    <Label >{label}</Label>
    <Percentage>{percentage}%</Percentage>
  </Item>
}

StatItem.propTypes = {
  percentage: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  color:PropTypes.string.isRequired
}

