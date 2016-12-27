import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/components/todosList';
import '../imports/api/tasks.js';


angular.module('simple-todos', [
    angularMeteor,
    todosList.name
]);


// SUITE https://www.meteor.com/tutorials/angular/forms-and-events

