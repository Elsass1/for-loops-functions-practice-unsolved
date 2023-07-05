// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let clientsWithWrongBalance = [];

  for (let i = 0; i < array.length; i++) {
    let bankAccount = array[i];
    let balance = bankAccount.balance;
    let deposits = bankAccount.deposits;
    let withdrawals = bankAccount.withdrawals;

    if (deposits !== undefined) {
      let accountBalance = 0;

      for (let j = 0; j < deposits.length; j++) {
        // Fixed: Use deposits.length instead of bankAccount.length
        accountBalance += deposits[j]; // Fixed: Access individual deposit values using deposits[j]
      }

      if (withdrawals !== undefined) {
        for (let j = 0; j < withdrawals.length; j++) {
          accountBalance -= withdrawals[j]; // Fixed: Access individual withdrawal values using withdrawals[j]
        }
      }

      if (accountBalance !== balance) {
        clientsWithWrongBalance.push(bankAccount);
      }
    }
  }

  return clientsWithWrongBalance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
