import Profile from "./Profile";
import Statistics from './Statistics'
import FriendList from "./FriendList";
import TransactionHistory from "components/TransactionHistory"

import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json"

// import friends from '../data/'


export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>

      <Statistics title="Upload stats" stats={data}></Statistics>

      <FriendList friends={friends}></FriendList>

      <TransactionHistory items={transactions}></TransactionHistory>
      </>
  );
};

