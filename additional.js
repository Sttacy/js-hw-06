
const transactionType = {
  deposit: 'deposit',
  withdraw: 'withdraw',
};
const account = {
   balance: 0, 
  transactions: [],
  createTransaction(id, type, amount) {
    this.transactions.push({ id: id, type: type, amount: amount });
  },
  calculateBalance(){
    for(const transaction of this.transactions){
        if(transaction.type === transactionType.deposit){
            this.balance += transaction.amount
            continue;
        }
        else if(transaction.type === transactionType.withdraw){
          this.balance -= transaction.amount
      }
    }
    return account.balance
  }
};
account.createTransaction(1, transactionType.deposit , 2000  )
account.createTransaction(2, transactionType.withdraw , 200  )
account.createTransaction(3, transactionType.deposit , 1000  )
console.log(account.transactions);
console.log(account.calculateBalance());
