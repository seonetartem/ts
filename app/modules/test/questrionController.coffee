app.controller 'questionController', ['$scope', 'test', '$stateParams', ($scope, test, $stateParams) ->

  test.questions($stateParams.name).then (data) ->
    $scope.questions = data
    $scope.form =
        "radio": {}
        "checkbox": {}

    $scope.questionsSubmit = ->
      formData = []
      radio = $scope.form.radio
      checkbox = $scope.form.checkbox

      _.forEach checkbox, (v, i) ->
        key = i.split('_')
        if v is true and key[0]
          formData[key[0]] = [] if formData[key[0]] is undefined
          formData[key[0]][key[1]] = key[1]
        return
      _.forEach radio, (v, i) ->
        formData[i] = v
        return
      test.saveResult formData
      return
    return
  return
]