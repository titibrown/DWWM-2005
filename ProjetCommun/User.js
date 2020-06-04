class User {

    constructor(_name, _firstname, _username, _password, _email) {
        this._name = _name || " ";
        this._firstname = _firstname || "";
        this.username = _username || "";
        this.password = _password;
        this.email = this._email;
        this.creationDate = new date();
        this.lastLogged = new date();
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

    get_name() {
        return this._name

    }

    get_firstname() {

        return this._firstname
    }

    set_name 

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




module.exports = User;









