app.controller 'testController', ['$scope', 'test', '$stateParams', ($scope, test, $stateParams) ->
  $scope.testName = $stateParams.name
  $scope.code = new Date().getTime()
]