import React from 'react';
import Navbar from '../../../components/navbar/Navbar';

function AdminViewTransactionHistory() {
    // Dummy data for demonstration
    const transactions = [
        { id: 1, user: 'User 1',prompt_id:1, amount: 50, date: '2024-02-12' },
        { id: 2, user: 'User 2',prompt_id:2, amount: 70, date: '2024-02-11' },
        { id: 3, user: 'User 3',prompt_id:3, amount: 90, date: '2024-02-10' },
    ];

    return (
        <div className="bg-slate-900 min-h-screen">
            <Navbar />
            <div className="flex flex-col items-center mt-4">
                <h1 className="text-3xl font-bold text-white mb-4">Admin View Transaction History</h1>
                {transactions.map(transaction => (
                    <div key={transaction.id} className="relative bg-gray-800 border rounded-lg p-4 md:p-8 w-8/12 max-w-full text-white mb-4 overflow-hidden transform transition duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-gray-700">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-20 w-20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full object-cover rounded-lg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 00-.894.553l-3 6a1 1 0 00.179 1.058l2 2a1 1 0 001.438-.038l1.859-2.793 1.98 1.98A1 1 0 0014.414 12L13 13.414l-1.292-1.292a1 1 0 00-1.414 0L8 14.586 6.707 13.293a1 1 0 00-1.414 0L4 14.586 2.586 13.172a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0L7 15.414l1.293 1.293a1 1 0 001.414 0L10 15.414l1.293 1.293a1 1 0 001.414 0L14 15.414l2.793 2.793a1 1 0 001.438.038l2-2a1 1 0 00.179-1.058l-3-6A1 1 0 0010 3zM6.84 10.292l2.293 2.293a1 1 0 001.414 0l2.293-2.293 1.735 2.601-2.381 2.381L10 16.618l-2.48 2.48-2.381-2.381 1.735-2.601z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-4 flex-grow">
                                <h2 className="text-xl font-bold">Transaction ID: {transaction.id}</h2>
                                <p className="text-sm">User: {transaction.user}</p>
                                <p className="text-sm">Prompt ID: {transaction.prompt_id}</p>
                                <p className="text-sm">Amount: ${transaction.amount}</p>
                                <p className="text-sm">Date: {transaction.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminViewTransactionHistory;
