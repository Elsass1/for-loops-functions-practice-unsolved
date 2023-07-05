// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  // Your code goes here...

  // in case the array is empty
  if (array.length === 0) {
    return [];
  }
  //storing client(s) with the greatest balance
  let clientsGreatestBalance = [];

  // initializing the balance with the first client in the array
  let greatestBalance = array[0].balance;

  // looping over the array
  for (let i = 0; i < array.length; i++) {
    const client = array[i];

    // if the balance of the current client is > than the current stored greatest balance
    if (client.balance > greatestBalance) {
      // it means we found a client with the greatest balance
      clientsGreatestBalance = [client];
      // the balance of the current client has to be updated
      greatestBalance = client.balance;
    } else if (client.balance === greatestBalance) {
      // in case more than one client has balance equal to the current highest balance
      clientsGreatestBalance.push(client);
    }
  }
  return clientsGreatestBalance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
