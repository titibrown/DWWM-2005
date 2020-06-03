import Employee from './Employee.js';

/**
 * Gestion d'employés
 */
class Enterprise {
    constructor() {
        this.employees = [];
    }

    /**
     * 
     * @param  _filter 
     * La méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine
     *  qui remplissent une condition déterminée par la fonction * callback.
     */

    readAll(_filter) {
        return this.employees.filter(employee); {
            return employee;
        }
    }

    /**
     * Créer un employé
     * La méthode push() ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle taille du tableau.
     * @param Employee _employee 
     */
    create(_employee) {
        this.employee.push(_employee);
    }

    /**
     * 
     * @param int _id 
     */
    read(_id) {

    }

    /**
     * Met à jour un employé
     * @param Employee _employee 
     */
    update(_employee, _newRole) {
        _employee.role = _newRole

    }

    /**
     * Supprime un employé 
     * 
     * @param int _id 
     */
    delete(_id) {
        employee.delete('/collections/:collectionName/:id', (req, res, next) => {
            req.collection.remove({_id: id(req.params.id)}, (e, result) => {
             if (e) return next(e)
             // console.log(result)
             res.send((result.result.n === 1) ? {msg: 'success'} : {msg: 'error'})
            })
           })
    }


    /**
     * 
     */
    getHigherSalary() {
this.getHigherSalary (_employee, _NewSalary){


}
    }

    /**
     * 
     */
    getLowerSalary() {

    }

    /**
     * 
     */
    getSalaryGap() {

    }






}


export default Enterprise;