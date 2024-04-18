import { BonusAccount } from './class/BonusAccount';
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

// PeopleAccount
console.log('PEOPLE ACCOUNT \n');

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount.deposit(100));
console.log(peopleAccount.setDoc_id(2));
console.log(peopleAccount.getDoc_id());
console.log(peopleAccount.getBalance());
console.log(peopleAccount.withdraw(50));
console.log(peopleAccount.getBalance());
console.log(peopleAccount.getName());

// CompanyAccount
console.log('\n COMPANY ACCOUNT \n');

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount.deposit(100));
console.log(companyAccount.getBalance());
console.log(companyAccount.getLoan(1000));
console.log(companyAccount.withdraw(50));
console.log(companyAccount.getBalance());
console.log(companyAccount.getName());

console.log('\n BONUS ACCOUNT \n');

const bonusAccount: BonusAccount = new BonusAccount('BONUS', 30)
console.log(bonusAccount.deposit(100));
console.log(bonusAccount.getBalance());
console.log(bonusAccount.withdraw(50));
console.log(bonusAccount.getBalance());
console.log(bonusAccount.getName());
