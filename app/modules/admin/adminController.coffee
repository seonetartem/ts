((App) ->
  AdminController = (->
    AdminController = ($scope, user, $state) ->
      @$scope = $scope
      @user = user
      @$state = $state
      @$scope.viewModel = this
      return
    AdminController::logout = ->
      @user.logout()
      @$state.go "login"
      return

    AdminController.$inject = [
      "$scope"
      "user"
      "$state"
    ]
    AdminController
  )()
  App.AdminController = AdminController
  return
) App or (App = {})
app.controller "adminController", App.AdminController