app = angular.module("app",
[
  "ui.router"
  "restangular"
  "ngStorage"
]).run(($rootScope, $state, user) ->

  # logout
  $rootScope.logout = ->
    user.logout()
    $state.go "login"
    return
  $rootScope.isLoggedIn = ->
    user.isLoggedIn()

  # Check user authorization during navigation
  $rootScope.$on "$stateChangeStart", (event, next) ->
    if next.name not in ['login', 'signup', 'forgotPassword'] and (not user.authorize(next.access) or not user.isLoggedIn())
      event.preventDefault() #prevents from resolving requested url
      $state.go 'login'
    return
  return
)