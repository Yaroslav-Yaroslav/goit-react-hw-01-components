import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
export const FriendList = ({ list }) => (
  <ul class="friend-list">
    {list.map(({ id, avatar, name, isOnline }) => (
      <li key={id} class="item">
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);
FriendList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
