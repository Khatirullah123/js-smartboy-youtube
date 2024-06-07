class User{
    constructor(email, password)
    {
        this.email=email;
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}Sahil`
    }


    set password(value){
        this._password= value
    }
}
const sahil = new User("khatir@gmail.com", "1234")
console.log(sahil.password);    
