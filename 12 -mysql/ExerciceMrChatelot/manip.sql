
 

-- QUESTION 1 : Donner nom, job, numéro et salaire de tous les employés, puis seulement des employés du département 10

-- SELECT `ENAME`,`JOB`,`EMPNO`FROM `emp` ; 

-- SELECT `ENAME`,`JOB`,`EMPNO`FROM `emp` WHERE `DEPTNO`=10 ; 

 
-- QESTION 2 : Donner nom, job et salaire des employés de type MANAGER dont le salaire est supérieur à 2800

-- SELECT `ENAME`,`JOB`,`EMPNO`FROM `emp` WHERE  `JOB` LIKE'MANAGER' AND `SAL`> 2800 ; 

-- QUESTION 3:

-- SELECT `JOB` FROM `emp` WHERE `JOB`LIKE 'MANAGER' AND DEPTNO != 30;

 -- QUESTION 4 : Liste des employés de salaire compris entre 1200 et 1400

-- SELECT * FROM `emp`  WHERE `SAL` BETWEEN 1200 AND 1400;

 --  QUESTION 5 : Liste des employés des départements 10 et 30 classés dans l'ordre alphabétique 

-- SELECT `ENAME` FROM `emp`    WHERE `DEPTNO` IN(10,30)  ORDER BY `ENAME` ;

 -- QUESTION 6 Liste des employés du département 30 classés dans l'ordre des salaires croissants

-- SELECT `ENAME` FROM `emp`    WHERE `DEPTNO` IN(30)  ORDER BY `SAL`ASC  ;

 -- QUESTION 7 Liste de tous les employés classés par emploi et salaires décroissants

 -- SELECT `ENAME` FROM `emp`    WHERE `DEPTNO`  ORDER BY (`JOB`)  ;

-- QUESTION 8 Liste des différents emplois

 

-- SELECT `JOB` FROM `emp`;

 

-- QUESTION 9: Donner le nom du département où travaille ALLEN

 

-- SELECT `LOC`,`JOB` FROM `emp` INNER JOIN `dept` WHERE `ENAME` = 'ALLEN' ;                                                                   

 

-- QUESTION 10 Liste des employés avec nom du département, nom, job, salaire classés par noms de départements et par salaires décroissants.

 

 -- SELECT `DNAME`,`ENAME`,`JOB`,`SAL` FROM `emp` INNER JOIN `dept`   ORDER BY  (`DNAME`) AND  (`SAL`)DESC;
 
 -- QUESTION 11  Liste des employés vendeurs (SALESMAN) avec affichage de nom, salaire, commissions, salaire + commissions

 

-- SELECT `ENAME`,`SAL`,`COMM`,(`SAL` + `COMM`) FROM `emp` WHERE `JOB`= 'SALESMAN' ;

 
