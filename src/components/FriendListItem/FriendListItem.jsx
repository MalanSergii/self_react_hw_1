import PropTypes from 'prop-types';

import { Item, StatusOnline, UserAvatar, UserName } from "./FriendListItem.styled"

export default function FriendListItem({ avatar, name, isOnline }) {

  return <Item>
    <StatusOnline status={isOnline}>{isOnline}</StatusOnline>
    <UserAvatar src={ avatar} alt="User avatar" width="48" />
    <UserName>{ name}</UserName>
  </Item>
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline:PropTypes.bool.isRequired
}