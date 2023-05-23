import PropTypes from 'prop-types';

import FriendListItem from "components/FriendListItem"
import {SectionFriends,FriendsList} from './FriendList.styled'


export default function FriendList({ friends }) {
  return <SectionFriends>
    <FriendsList>
      {friends.map(item=><FriendListItem key={item.id}avatar={item.avatar} name={item.name} isOnline={item.isOnline}></FriendListItem>)}
    </FriendsList>
  </SectionFriends>
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number.isRequired
    })
  )
}