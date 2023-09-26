import React, { useEffect, useState } from 'react';
// import Web3 from 'web3/dist/web3.min.js'

export const TransactionContext = React.createContext();

const { ethereum } = window;

export const TransactionProvider = ({ children }) => {
    
    // var web3 = new Web3(window.ethereum);

    const [currentAccount, setCurrentAccount] = useState('');
    const checkIfWalletIsConnected = async () => {
        try {
            if(!ethereum) return console.log("Please install Metamask");
            const accounts = await ethereum.request({ method: 'eth_accounts' });
            if(accounts.length){
                setCurrentAccount(accounts[0]);
            }else{
                console.log("No accounts found")
            }           
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object")
        }
    }

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert("Please install metamask");
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object")
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);
    return (
        <TransactionContext.Provider value={{ connectWallet, currentAccount}}>
            {children}
        </TransactionContext.Provider>
    );
}