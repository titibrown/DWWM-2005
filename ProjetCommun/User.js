class User {

    constructor(_username, _password, _email, _creationDate, _lastLogged, _isLogged) {

        this.username = _username || "";
        this.password = _password;
        this.email = _email;
        this.creationDate = parseint(_creationDate);
        this.lastLogged = _lastLogged;
        this.isLogged = _isLogged;


    }

    isValid( ){
        return true ; 
    }
   
   



    
    console.log(username)


}