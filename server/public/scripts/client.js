var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/demo' ,{
      templateUrl: '/views/templates/demo.html',
      controller: 'DemosthenesController',
      controllerAs: 'demo'
    })
    .when('/phil' ,{
      templateUrl: '/views/templates/phil.html',
      controller: 'PhillipController',
      controllerAs: 'phil'
    })
    .when('/alex' ,{
      templateUrl: '/views/templates/alex.html',
      controller: 'AlexanderController',
      controllerAs: 'alex'
    })
    .otherwise({
      redirectTo: 'demo'
    });

}]);

app.controller('HomeController', function() {
  console.log('home controller running');
  var self = this;
  self.message = "Home controller is the best!";

});

app.controller('DemosthenesController', function() {
  console.log('demo controller running');
  var self = this;
  self.image = {
    src: '/assets/demosthenes.jpg',
    altText: "Demosthenes The Great"
  };
  self.stats = {
    name: "Demosthenes",
    born: '384 BC',
    died: '322 BC',
    occupation: 'Speach Writer'
  };

  self.hideOccupation = true;
  self.showOrHide = 'Show';
  self.toggleOccupation = function () {
    self.hideOccupation = !self.hideOccupation;
    self.showOrHide = (self.hideOccupation) ? 'Show' : 'Hide';
  };
});

app.controller('PhillipController', function() {
  console.log('phil controller running');
  var self = this;
  self.image = {
    src: '/assets/phillipII.jpg',
    alt: 'Phillip II'
  };
  self.stats = {
    name: "Phillip II of Macedon",
    born: '382 BC',
    died: '336 BC',
    occupation: 'King'
  };

  self.hideOccupation = true;
  self.showOrHide = 'Show';
  self.toggleOccupation = function () {
    self.hideOccupation = !self.hideOccupation;
    self.showOrHide = (self.hideOccupation) ? 'Show' : 'Hide';
  };
});

app.controller('AlexanderController', function() {
  console.log('alex controller running');
  var self = this;
  self.image = {
    src: '/assets/alexanderTheGreat.jpg',
    alt: 'Alexander The Great'
  };
  self.stats = {
    name: "Alexander the Great",
    born: '356 BC',
    died: '323 BC',
    occupation: 'Multi-King / Pharoah'
  };

  self.hideOccupation = true;
  self.showOrHide = 'Show';
  self.toggleOccupation = function () {
    self.hideOccupation = !self.hideOccupation;
    self.showOrHide = (self.hideOccupation) ? 'Show' : 'Hide';
  };
});
