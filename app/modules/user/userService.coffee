app.factory "user", (appConfig, $http, $q, $localStorage) ->
  accessLevels = routingConfig.accessLevels
  userRoles = routingConfig.userRoles
  currentUser = {}

  changeUser = (user) ->
    $localStorage.user = currentUser = user
    $http.defaults.headers.common.Authorization = "Basic " + user.authToken
    return

  changeUser $localStorage.user or (authToken: "",  role: userRoles.public)

  getUser: ->
    currentUser

  authorize: (accessLevel, role) ->
    role = currentUser.role  if role is undefined
    accessLevel & role

  login: (login, password) ->
    defer = $q.defer()
    $http.post(appConfig.apiUrl + "auth",
      login: login
      password: password
    ).success((data, status, headers) ->
      changeUser
        authToken: headers("Authorization")
        role: data.role

      defer.resolve()
      return
    ).error ->
      defer.reject()
      return

    defer.promise

  isLoggedIn: ->
    currentUser.role is userRoles.user or currentUser.role is userRoles.admin

  logout: ->
    delete $localStorage.user

    changeUser
      authToken: ""
      role: userRoles.public
    return
