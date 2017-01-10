import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/components/todosList';
import '../imports/api/tasks.js';


// Module angular simple-todos
angular.module('simple-todos', [
    angularMeteor,
    todosList.name
]);


// Bootstrap on Mobile
function onReady() {
    angular.bootstrap(document, ['simple-todos']);
}

if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
} else {
    angular.element(document).ready(onReady);
}

