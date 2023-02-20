const Obj = function (version, channel, keyfield) {
    this._version = version;
    this._channel = channel;
    this._keyfield = keyfield;
  
    
  };

  Obj.prototype.getVersion = function () {
    return this._version;
  };
  Obj.prototype.getChannel = function () {
    return this._channel;
  };
  Obj.prototype.getKeyFields = function (array) {
      return array.map(item => item[this._keyField]);
    }
  Obj.prototype.setVersion = function (version) {
    this._version = version;
  };
  Obj.prototype.setChannel = function (channel) {
    this._channel = channel;
  };
  Obj.prototype.setKeyfield = function (keyfield) {
    this._keyfield = keyfield;
  };
  
  let parser = new Obj('1.0.1', 'A', 'x');
  console.log(parser.getKeyFields(
    [{channel: 'A'}, {channel: 'B'}, {channel: 'C'}]
  ));