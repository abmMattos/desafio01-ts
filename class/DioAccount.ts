export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.setBalance(value)
      console.log('Voce depositou ', value, "reais \nSeu saldo atual é: ", this.getBalance(), " reais")
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus()) {
      if(this.balance > value) {
        this.setBalance(-value)
        console.log('Voce sacou ', value, "reais \nSeu saldo atual é: ", this.getBalance(), " reais")
      }
    }
    
  }

  getBalance = (): number => {
    return this.balance
  }

  protected setBalance = (value: number): void => {
    this.balance += value
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
