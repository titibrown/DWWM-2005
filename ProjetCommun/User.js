class User {

    constructor(_nom, _prenom, _username, _password, ) {
             this._nom =
            this._prenom =
            this.username = _username || "";
        this.password = _password;
        this.email = // premiere lettre du prenom , Nnom & arfp;
            this.creationDate = parseint(_creationDate); // objet date
        this.lastLogged = _lastLogged; // penser au type
        this.isLogged = false;


    }
    get_username() {
        return this._username;
    }
    get_password() {
        return this._password
    }
    get_email() {
        return this._email
    }
    get_creationDate() {
        return this._creationDate
    }

    get_lastLogged() {
        return this._lastLogged
    }

    get_isLogged() {
        return this._isLogged
    }

    set_username(_username) {
        this._username = _username;
    }
    set_password(_password) {
        this._password = _password;
    }
    set_email(_email) {
        this._email = _email;
    }
    set_creationDate(_creationDate) {
        this._creationDate = _creationDate;
    }

    set_lastLogged(_lastLogged) {
        this._lastLogged = _lastLogged;
    }

    set_isLogged(_isLogged) {
        this._isLogged = _isLogged;
    }

}

let test = new User('_nom' )

console.log
console.log(test.get_creationDate)

module.exports = User;









