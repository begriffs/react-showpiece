var AppDispatcher = require('../dispatcher/DemoAppDispatcher');
var Constants = require('../constant/DemoConstants');

module.exports = {
  selectExampleMenu: function (menuJson) {
    AppDispatcher.dispatch({
      actionType: Constants.ActionTypes.SELECT_EXAMPLE,
      value: menuJson
    });
  }
};
