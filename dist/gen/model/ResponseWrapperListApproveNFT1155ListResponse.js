"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseWrapperListApproveNFT1155ListResponse = void 0;
var _ApiClient = require("../ApiClient");
var _ApproveNFT1155ListResponse = require("./ApproveNFT1155ListResponse");
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
 * The ResponseWrapperListApproveNFT1155ListResponse model module.
 * @module model/ResponseWrapperListApproveNFT1155ListResponse
 * @version 1.0
 */
class ResponseWrapperListApproveNFT1155ListResponse {
  /**
   * Constructs a new <code>ResponseWrapperListApproveNFT1155ListResponse</code>.
   * @alias module:model/ResponseWrapperListApproveNFT1155ListResponse
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>ResponseWrapperListApproveNFT1155ListResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperListApproveNFT1155ListResponse} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperListApproveNFT1155ListResponse} The populated <code>ResponseWrapperListApproveNFT1155ListResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperListApproveNFT1155ListResponse();
      if (data.hasOwnProperty('code')) obj.code = _ApiClient.ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('message')) obj.message = _ApiClient.ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('result')) obj.result = _ApiClient.ApiClient.convertToType(data['result'], [_ApproveNFT1155ListResponse.ApproveNFT1155ListResponse]);
    }
    return obj;
  }
}

/**
 * Code 1: Success
 * @member {Number} code
 */
exports.ResponseWrapperListApproveNFT1155ListResponse = ResponseWrapperListApproveNFT1155ListResponse;
ResponseWrapperListApproveNFT1155ListResponse.prototype.code = undefined;

/**
 * Response message
 * @member {String} message
 */
ResponseWrapperListApproveNFT1155ListResponse.prototype.message = undefined;

/**
 * Response result
 * @member {Array.<module:model/ApproveNFT1155ListResponse>} result
 */
ResponseWrapperListApproveNFT1155ListResponse.prototype.result = undefined;