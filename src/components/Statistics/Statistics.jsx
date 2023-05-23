import PropTypes from 'prop-types';
import StatItem from 'components/StatItem';
import {StatisticSection, StatTitle, ListStatistics} from "./Statistics.styled"
import { colors } from 'data/colors';

export default function Statistics({ title, stats }) {
  return <StatisticSection>
  <StatTitle>{title}</StatTitle>
    <ListStatistics>
      {stats.map((item, index) => <StatItem
        color={colors[index]}
        key={item.id}
        label={item.label}
        percentage={item.percentage} ></StatItem>)}
    </ListStatistics>
</StatisticSection>
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired
  }))
}