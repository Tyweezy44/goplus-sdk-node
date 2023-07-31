"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseWrapperPhishingSite = void 0;
var _ApiClient = require("../ApiClient");
var _ResponseWrapperPhishingSiteResult = require("./ResponseWrapperPhishingSiteResult");
/*
 * GoPlus Security API Document
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.45
 *
 * Do not edit the class manually.
 *
 */

/**
 * The ResponseWrapperPhishingSite model module.
 * @module model/ResponseWrapperPhishingSite
 * @version 1.0
 */
class ResponseWrapperPhishingSite {
  /**
   * Constructs a new <code>ResponseWrapperPhishingSite</code>.
   * @alias module:model/ResponseWrapperPhishingSite
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>ResponseWrapperPhishingSite</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperPhishingSite} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperPhishingSite} The populated <code>ResponseWrapperPhishingSite</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperPhishingSite();
      if (data.hasOwnProperty('code')) obj.code = _ApiClient.ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('message')) obj.message = _ApiClient.ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('result')) obj.result = _ResponseWrapperPhishingSiteResult.ResponseWrapperPhishingSiteResult.constructFromObject(data['result']);
    }
    return obj;
  }
}

/**
 * Code 1: Success
 * @member {Number} code
 */
exports.ResponseWrapperPhishingSite = ResponseWrapperPhishingSite;
ResponseWrapperPhishingSite.prototype.code = undefined;

/**
 * Response message
 * @member {String} message
 */
ResponseWrapperPhishingSite.prototype.message = undefined;

/**
 * @member {module:model/ResponseWrapperPhishingSiteResult} result
 */
ResponseWrapperPhishingSite.prototype.result = undefined;