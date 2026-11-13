class ICICI {
  #balance; // # means private in JS, In Typescript - private

  constructor(name, balance) {
    this.#balance = balance;
    this.name = name;
  }

  getBalance() {
    return this.#balance;
  }

  setBalance(balance, isCashier) {
    if (isCashier) {
      this.#balance = balance;
    } else {
      console.log('Not allowed');
    }
  }
}

let Arun = new ICICI('Prrammod', 1000);
console.log(Arun.getBalance());
Arun.setBalance(10000000, false);
console.log(Arun.getBalance());

let Arun_father = new ICICI('Arun', 2000);
console.log(Arun_father.getBalance());
Arun_father.setBalance(300000, true);
console.log(Arun_father.getBalance());
