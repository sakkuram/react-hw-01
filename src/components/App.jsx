import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

import friends from '../friends.json';
import data from '../data.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div className="app-container">
        <Profile />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <div>
          <h1>Transaction History</h1>
          <TransactionHistory items={transactions} />
        </div>
      </div>
    </div>
  );
};
