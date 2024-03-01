"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseWrapperPhishingSiteResultNftRiskSelfDestruct = void 0;
var _ApiClient = require("../ApiClient");
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
 * The ResponseWrapperPhishingSiteResultNftRiskSelfDestruct model module.
 * @module model/ResponseWrapperPhishingSiteResultNftRiskSelfDestruct
 * @version 1.0
 */
class ResponseWrapperPhishingSiteResultNftRiskSelfDestruct {
  /**
   * Constructs a new <code>ResponseWrapperPhishingSiteResultNftRiskSelfDestruct</code>.
   * { value: owner_address: owner_type }It describes whether this NFT contract can self destruct. (Notice:When the self-destruct function is triggered, this contract will be destroyed, all functions will be unavailable, and all related assets will be erased.)
   * @alias module:model/ResponseWrapperPhishingSiteResultNftRiskSelfDestruct
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>ResponseWrapperPhishingSiteResultNftRiskSelfDestruct</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperPhishingSiteResultNftRiskSelfDestruct} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperPhishingSiteResultNftRiskSelfDestruct} The populated <code>ResponseWrapperPhishingSiteResultNftRiskSelfDestruct</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperPhishingSiteResultNftRiskSelfDestruct();
      if (data.hasOwnProperty('owner_address')) obj.owner_address = _ApiClient.ApiClient.convertToType(data['owner_address'], 'String');
      if (data.hasOwnProperty('value')) obj.value = _ApiClient.ApiClient.convertToType(data['value'], 'Number');
      if (data.hasOwnProperty('owner_type')) obj.owner_type = _ApiClient.ApiClient.convertToType(data['owner_type'], 'String');
    }
    return obj;
  }
}

/**
 * Owner_address describes the owner address.  null: the owner address cannot be fetched.
 * @member {String} owner_address
 */
exports.ResponseWrapperPhishingSiteResultNftRiskSelfDestruct = ResponseWrapperPhishingSiteResultNftRiskSelfDestruct;
ResponseWrapperPhishingSiteResultNftRiskSelfDestruct.prototype.owner_address = undefined;

/**
 * The \"value\" describes the status of the risk. null: the contract is not open source or there is a proxy, it is not possible to detect whether the risk exists. -1: the risk is detected but the ownership give up. If the detection of a code vulnerability, it can also be considered risk-free.  0: the risk is not detected.  1: the risk is detected, and the owner address is a common address (EOA), then it can be said that there is a clear risk.  2: The risk is detected, but the owner address is a contract address, the risk is not significant.  3: The risk is detected, but the owner address is not detectable / or an array. 
 * @member {Number} value
 */
ResponseWrapperPhishingSiteResultNftRiskSelfDestruct.prototype.value = undefined;

/**
 * \"blackhole\" : the owner is a blackhole address. \"contract\" : the owner is a contract. \"eoa\" : the owner is a common address (eoa). \"multi-address\":the owner is an array/list. null: the address is not detected.
 * @member {String} owner_type
 */
ResponseWrapperPhishingSiteResultNftRiskSelfDestruct.prototype.owner_type = undefined;