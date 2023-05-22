import PropTypes from 'prop-types';

import {UserProfile, MainInfo, UserName, OtherInfo, Picture,StatList,Stat} from "./Profile.styled"

export default function Profile({username, tag, location, avatar, stats}) {
  return <UserProfile>
    <MainInfo>
      <Picture src={avatar} alt="User avatar" />
      <UserName>{username}</UserName>
      <OtherInfo>@{tag}</OtherInfo>
      <OtherInfo>{location}</OtherInfo>
    </MainInfo>

    <StatList className="stats">
    <Stat>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </Stat>
    <Stat>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </Stat>
    <Stat>
      <span className="label">Likes</span>
      <span className="quantity">{ stats.likes}</span>
    </Stat>
  </StatList>

  </UserProfile>
  
} 

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,
  avatar:PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes:PropTypes.number.isRequired
  })
}