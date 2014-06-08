app.config ($stateProvider, $urlRouterProvider, RestangularProvider, appConfig) ->
  access = routingConfig.accessLevels
  $urlRouterProvider.otherwise "/home"
  $stateProvider

  .state("login",
    url: "/login"
    templateUrl: "modules/user/login.html"
    controller: "loginController"
    access: access.anon
  ).state("signup",
    url: "/sign-up"
    templateUrl: "modules/user/sign-up.html"
    controller: "signUpController"
    access: access.anon
  ).state("forgotPassword",
    url: "/forgot-password"
    templateUrl: "modules/user/forgot-password.html"
    controller: "signUpController"
    access: access.anon
  ).state("home",
    url: "/home"
    templateUrl: "modules/home/index.html"
    controller: "homeController"
    access: access.user
  ).state("admin",
    url: "/admin"
    templateUrl: "modules/admin/index.html"
    controller: "adminController"
    access: access.admin
  ).state("test",
    url: "/test/{name}"
    templateUrl: "modules/test/index.html"
    controller: "testController"
    access: access.user
  ).state("question",
    url: "/test/{name}/{code}"
    templateUrl: "modules/test/question.html"
    controller: "questionController"
    access: access.user
  )

  RestangularProvider.setBaseUrl appConfig.apiUrl
  return