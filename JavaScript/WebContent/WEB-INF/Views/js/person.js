var apr=angular.module('app',[]);
apr.controller('ctrl',function($scope){
	$scope.firstname="sarath";
	$scope.lastname="potluri";
	$scope.fullname=function()
	{
		return $scope.firstname+" "+$scope.lastname;
	}
	})