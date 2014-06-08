((exports) ->
  userRoles =
    public: 1 # 001
    user: 2 # 010
    admin: 4 # 100

  exports.userRoles = userRoles
  exports.accessLevels =
    # 111
    public: userRoles.public | userRoles.user | userRoles.admin
    anon: userRoles.public # 001
  # 110
    user: userRoles.user | userRoles.admin
    admin: userRoles.admin # 100

  return
) (if typeof exports is "undefined" then this["routingConfig"] = {} else exports)