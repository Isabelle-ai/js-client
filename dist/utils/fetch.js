"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _querystring = _interopRequireDefault(require("querystring"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Fetch {
  constructor({
    key
  }) {
    const fetch = _axios.default.create({
      baseURL: `https://api.isabelle.io/sentiment`,
      headers: {
        Authorization: `Bearer ${key}`
      }
    });

    this.fetch = fetch;
  }

  async sentiment({
    text
  }) {
    try {
      const {
        status,
        data
      } = await this.fetch.request({
        method: 'POST',
        url: '/',
        data: _querystring.default.stringify({
          text
        })
      });
      return {
        status,
        data
      };
    } catch (error) {
      return error;
    }
  }

}

exports.default = Fetch;