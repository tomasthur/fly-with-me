import React from 'react'
import AccountBalanceHeader from '../Layouts/AccountBalanceHeader';
import AccountBalanceList from '../Layouts/AccountBalanceList';
import BottomMenu from '../Layouts/BottomMenu';

const AccountBalancePage = () => {
  return (
    <div className='container'>
        <AccountBalanceHeader />
        <AccountBalanceList />
        <BottomMenu />
    </div>
  )
}

export default AccountBalancePage