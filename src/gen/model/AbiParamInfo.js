/*
 * GoPlus Security API Documentation
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.41
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {AbiAddressInfo} from './AbiAddressInfo';

/**
 * The AbiParamInfo model module.
 * @module model/AbiParamInfo
 * @version 1.0
 */
export class AbiParamInfo {
  /**
   * Constructs a new <code>AbiParamInfo</code>.
   * @alias module:model/AbiParamInfo
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AbiParamInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AbiParamInfo} obj Optional instance to populate.
   * @return {module:model/AbiParamInfo} The populated <code>AbiParamInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AbiParamInfo();
      if (data.hasOwnProperty('address_info'))
        obj.address_info = AbiAddressInfo.constructFromObject(data['address_info']);
      if (data.hasOwnProperty('input'))
        obj.input = ApiClient.convertToType(data['input'], Object);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/AbiAddressInfo} address_info
 */
AbiParamInfo.prototype.address_info = undefined;

/**
 * It describes the input data in ABI.
 * @member {Object} input
 */
AbiParamInfo.prototype.input = undefined;

/**
 * It describes the parameter name in ABI, for example   \"_from\", \"_to\", \"_value\".
 * @member {String} name
 */
AbiParamInfo.prototype.name = undefined;

/**
 * It describes the parameter type in ABI, for example \"address\", \"uint256\", \"bool\".
 * @member {String} type
 */
AbiParamInfo.prototype.type = undefined;

