app.factory "test", (Restangular) ->

  testList: ->
    Restangular.one('test').post()
  questions: (name) ->
    Restangular.one('test', name).getList()
  saveResult: (data) ->
    Restangular.one('test/post').post('data', data)