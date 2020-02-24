"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fetch = _interopRequireDefault(require("./utils/fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Isabelle {
  constructor({
    key
  }) {
    this.fetch = new _fetch.default({
      key
    });
  }

  async get({
    text
  }) {
    try {
      if (!text || !text.length === 0) {
        throw new Error('Invalid text. Please pass text greater than 0 characters.');
      }

      const response = await this.fetch.post({
        text
      });
      return {
        code: 200,
        data: response
      };
    } catch (error) {
      return new Error(error);
    }
  }

}

exports.default = Isabelle;