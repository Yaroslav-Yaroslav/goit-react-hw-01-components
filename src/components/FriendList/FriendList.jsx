import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
export const FriendList = ({ list }) => (
  <ul className={css.friendList}>
    {list.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
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
