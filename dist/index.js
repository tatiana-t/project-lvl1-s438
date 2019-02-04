"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('Welcome to the Brain Games!');

const getName = _readlineSync.default.question('May I have your name?: ');

const helloName = name => {
  return console.log('Hello, ' + name + '!');
};

helloName(getName);
var _default = helloName;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZ2V0TmFtZSIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIiwiaGVsbG9OYW1lIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaOztBQUVBLE1BQU1DLE9BQU8sR0FBR0Msc0JBQWFDLFFBQWIsQ0FBc0IseUJBQXRCLENBQWhCOztBQUVBLE1BQU1DLFNBQVMsR0FBSUMsSUFBRCxJQUFVO0FBRTFCLFNBQU9OLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVlLLElBQVosR0FBbUIsR0FBL0IsQ0FBUDtBQUNELENBSEQ7O0FBSUFELFNBQVMsQ0FBQ0gsT0FBRCxDQUFUO2VBRWVHLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5jb25zb2xlLmxvZygnV2VsY29tZSB0byB0aGUgQnJhaW4gR2FtZXMhJyk7XG5cbmNvbnN0IGdldE5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ01heSBJIGhhdmUgeW91ciBuYW1lPzogJyk7XG5cbmNvbnN0IGhlbGxvTmFtZSA9IChuYW1lKSA9PiB7XG5cbiAgcmV0dXJuIGNvbnNvbGUubG9nKCdIZWxsbywgJyArIG5hbWUgKyAnIScpO1xufVxuaGVsbG9OYW1lKGdldE5hbWUpO1xuXG5leHBvcnQgZGVmYXVsdCBoZWxsb05hbWVcbiJdfQ==