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
        return this._name;

    }

    get_FirsName() {
        return this._firstname;
    }

    get_UserName() {
        return this._username;
    }
    get_PassWord() {
        return this._password;
    }
    get_Email() {
        return this._email;
    }
    get_CreationDate() {
        return this._creationDate;
    }

    get_LastLogged() {
        return this._lastLogged;
    }

    get_IsLogged() {
        return this._isLogged;
    }



    set_Name(_name) {
        this._name = _thisname;
    }

    set_FirstName(_firstname) {
        this._firstname = _firstname
    }

    set_UserName(_username) {
        this._username = _username;
    }
    set_Password(_password) {
        this._password = _password;
    }
    set_Email(_email) {
        this._email = _email;
    }
    set_CreationDate(_creationDate) {
        this._creationDate = _creationDate;
    }

    set_LastLogged(_lastLogged) {
        this._lastLogged = _lastLogged;
    }

    set_IsLogged(_isLogged) {
        this._isLogged = _isLogged;
    }

}




module.exports = User;









