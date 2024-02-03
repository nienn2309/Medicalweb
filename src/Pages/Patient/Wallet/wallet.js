import React, { useState } from 'react';
import './wallet.scss'; 

const Wallet = () => {
    const [walletBalance, setWalletBalance] = useState(500); // Initial wallet balance
    const [transactionHistory, setTransactionHistory] = useState([
        { date: '2024-02-01', description: 'Payment Refund Received', amount: 200 },
        { date: '2024-01-28', description: 'Medicine Purchase', amount: -100 }
       
    ]);
    const [billingReminders, setBillingReminders] = useState([
        { date: '2024-02-05', description: 'Consultation Fee', amountDue: 150 },
        { date: '2024-02-05', description: 'Consultation Fee', amountDue: 150 },
        { date: '2024-02-05', description: 'Consultation Fee', amountDue: 150 },
        { date: '2024-02-05', description: 'Consultation Fee', amountDue: 150 },
        { date: '2024-02-05', description: 'Consultation Fee', amountDue: 150 }
        
    ]);
    const [paymentReminders, setPaymentReminders] = useState([
        { date: '2024-02-10', description: 'Outstanding Invoice', amountDue: 250 }
        
    ]);
    const [addAmount, setAddAmount] = useState('');

    const handlePayReminder = (index) => {
        
        const reminderToPay = billingReminders[index];
        
        console.log(`Paid ${reminderToPay.amountDue} for ${reminderToPay.description} on ${reminderToPay.date}`);
    };
    

    const handleAddToWallet = (e) => {
        e.preventDefault();
        const amount = parseFloat(addAmount);
        if (!isNaN(amount) && amount > 0) {
            setWalletBalance(prevBalance => prevBalance + amount);
            // Update transaction history
            const newTransaction = { date: new Date().toISOString().slice(0, 10), description: 'Added to Wallet', amount };
            setTransactionHistory(prevHistory => [newTransaction, ...prevHistory]);
            setAddAmount(''); // Clear input field after adding to wallet
        } else {
            alert('Please enter a valid positive number.');
        }
    };

    return (
        <div className="wallet-container"> {/* Added className */}
            <h1>Patient Wallet</h1>

            {/* Wallet Balance Container */}
            <div className="balance-container">
                <i class="fa-solid fa-wallet"></i>
                <h2>Wallet Balance: ${walletBalance}</h2>
            
            </div>
            <div className="walletform">            
                <form onSubmit={handleAddToWallet}>
                    <label htmlFor="walletAmount">Add Amount:</label>
                        <input
                            type="number"
                            id="walletAmount"
                            name="walletAmount"
                            value={addAmount}
                            onChange={(e) => setAddAmount(e.target.value)}
                            required
                        />
                    <button type="submit" className="add-button">Add to Wallet</button>
                </form>
            </div>


            

            <h2>Transaction History</h2>
            <table className="wallet-table"> 
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionHistory.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>${transaction.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Billing Reminders</h2>
            <table className="wallet-table"> 
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount Due</th>
                        <th>Pay</th>
                    </tr>
                </thead>
                <tbody>
                    {billingReminders.map((reminder, index) => (
                        <tr key={index}>
                            <td>{reminder.date}</td>
                            <td>{reminder.description}</td>
                            <td>${reminder.amountDue}</td>
                            <td>
                                <button className="pay-button" onClick={() => handlePayReminder(index)}>Pay</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Payment Reminders</h2>
            <table className="wallet-table"> 
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount Due</th>
                    </tr>
                </thead>
                <tbody>
                    {paymentReminders.map((reminder, index) => (
                        <tr key={index}>
                            <td>{reminder.date}</td>
                            <td>{reminder.description}</td>
                            <td>${reminder.amountDue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Wallet;
