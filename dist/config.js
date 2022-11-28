"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

var parentDirFolderName = 'visual';

var parentDir = _path["default"].join(process.cwd(), 'cypress', 'screenshots', parentDirFolderName);

var _baseline = _path["default"].join(parentDir, 'baseline');

var _comparison = _path["default"].join(parentDir, 'comparison');

var _diff = _path["default"].join(parentDir, 'diff');

var reportDir = _path["default"].join(process.cwd(), 'cypress', 'screenshots', 'report');

var paths = {
  image: {
    baseline: function baseline(testName) {
      return _path["default"].join(_baseline, "".concat(testName, ".png"));
    },
    comparison: function comparison(testName) {
      return _path["default"].join(_comparison, "".concat(testName, ".png"));
    },
    diff: function diff(testName) {
      return _path["default"].join(_diff, "".concat(testName, ".png"));
    }
  },
  dir: {
    baseline: _baseline,
    comparison: _comparison,
    diff: _diff
  },
  parentDir: parentDir,
  reportDir: reportDir,
  report: function report(instance) {
    return _path["default"].join(reportDir, "cypress-visual-report".concat(instance, ".html"));
  }
};
var _default = paths;
exports["default"] = _default;