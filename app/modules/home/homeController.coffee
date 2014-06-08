app.controller 'homeController', ['$scope', 'test', '$state', ($scope, test, $state) ->
  test.testList().then (data) ->
    $scope.testList = data
    return
  return
]