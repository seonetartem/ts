app.controller "loginController", ($scope, user, $state) ->
  $scope.auth = ->
    $scope.authError = false
    user.login($scope.login, $scope.password).then (->
      route = (if user.getUser().role is routingConfig.userRoles.admin then "admin" else "home")
      $state.go route
      return
    ), ->
      $scope.authError = true
      return

    return

  return