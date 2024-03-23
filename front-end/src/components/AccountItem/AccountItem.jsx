import React from 'react';
import '../../index.css'

function AccountItem({ title, amount, description }) {
  return (
    <div className='transaction'>
      <section className="account-item">
        <div className="account-content-wrapper">
          <h3 className="account-title"> {title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </div>
  );
}

export default AccountItem;