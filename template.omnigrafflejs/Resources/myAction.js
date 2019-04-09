var _ = (function () {
  var action = new PlugIn.Action(function (selection) { // eslint-disable-line no-undef
    // Insert eyour code here.
    var alert = new Alert('YAY!', 'Dude, that\'s pretty sweet.') // eslint-disable-line no-undef
    alert.show(function (result) {})
  })
  return action
}())
_ // eslint-disable-line no-unused-expressions
