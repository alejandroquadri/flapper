var app = angular.module('flapperNews', []);

app.controller('MainCtrl',function(){
  this.test = 'Hello world!';
  this.posts = [
    {title: 'post 1', upvotes: 5},
    {title: 'post 2', upvotes: 2},
    {title: 'post 3', upvotes: 15},
    {title: 'post 4', upvotes: 9},
    {title: 'post 5', upvotes: 4}
  ];

  this.addPost = function(){
    if (!this.title | this.title ==='') {return;}
    this.posts.push({title: this.title, upvotes: 0});
    this.title = '';
  };
});

// app.controller('MainCtrl', [
// '$scope',
// function($scope){
//   $scope.test = 'Hello world!';
// }]);
