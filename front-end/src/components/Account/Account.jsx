import React, { Fragment } from 'react';
import '../../index.css';
import AccountItem from '../AccountItem/AccountItem';

function Account() {
  const accounts = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance"
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance"
    }
  ];

  return (
    <Fragment>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        {accounts.map((account, index) => (
          <AccountItem
            key={index}
            title={account.title}
            amount={account.amount}
            description={account.description}
          />
        ))}
      </section>
    </Fragment>
  );
}

export default Account;
