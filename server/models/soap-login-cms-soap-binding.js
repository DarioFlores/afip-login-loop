
'use strict';
var server = require('../../server/server');

module.exports = function(LoginCMSServiceLoginCmsSoapBinding) {

  var soapDataSource = server.datasources.loginAfipSoapDS;
  var _soapModel;

  soapDataSource.once('connected', function () {
    // Create the model
    _soapModel = soapDataSource.createModel('LoginCMSServiceLoginCmsSoapBinding', {});
  });


  /**
   * loginCms
   * @param {loginCms} loginCms loginCms
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  LoginCMSServiceLoginCmsSoapBinding.loginCms = function(loginCms, callback) {
      _soapModel.loginCms(loginCms, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  // Map to REST/HTTP

  LoginCMSServiceLoginCmsSoapBinding.remoteMethod('loginCms',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'loginCms',
      type: 'loginCms',
      description: 'loginCms',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'loginCmsResponse',
      description: 'loginCmsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/loginCms' },
  description: 'loginCms'
}
  );
  
}
