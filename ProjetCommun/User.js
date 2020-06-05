class User {

    constructor(_name, _firstname, _username, _password, _email) {
        this.lastname = _name || " ";
        this.firstname = _firstname || "";
        this.username = _username || "";
        this.password = _password;
        this.email = _email;
        this.creationDate = new Date();
        this.lastLogged = new Date();
        this.isLogged = false;

    }
    get_Name() {
        return this._name

    }

    get_FirsName() {
        return this._firstname
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



    set_name(_name) {
        this._name = _thisname;
    }

    set_firstname(_firstname) {
        this._firstname = _firstname
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




module.exports = User;









