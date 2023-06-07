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
import {ApiClient} from '../ApiClient';
import {AbiParamInfo} from './AbiParamInfo';

/**
 * The ParseAbiDataResponse model module.
 * @module model/ParseAbiDataResponse
 * @version 1.0
 */
export class ParseAbiDataResponse {
  /**
   * Constructs a new <code>ParseAbiDataResponse</code>.
   * @alias module:model/ParseAbiDataResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ParseAbiDataResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ParseAbiDataResponse} obj Optional instance to populate.
   * @return {module:model/ParseAbiDataResponse} The populated <code>ParseAbiDataResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ParseAbiDataResponse();
      if (data.hasOwnProperty('contract_description'))
        obj.contract_description = ApiClient.convertToType(data['contract_description'], 'String');
      if (data.hasOwnProperty('contract_name'))
        obj.contract_name = ApiClient.convertToType(data['contract_name'], 'String');
      if (data.hasOwnProperty('malicious_contract'))
        obj.malicious_contract = ApiClient.convertToType(data['malicious_contract'], 'Number');
      if (data.hasOwnProperty('method'))
        obj.method = ApiClient.convertToType(data['method'], 'String');
      if (data.hasOwnProperty('params'))
        obj.params = ApiClient.convertToType(data['params'], [AbiParamInfo]);
      if (data.hasOwnProperty('risk'))
        obj.risk = ApiClient.convertToType(data['risk'], 'String');
      if (data.hasOwnProperty('risky_signature'))
        obj.risky_signature = ApiClient.convertToType(data['risky_signature'], 'Number');
      if (data.hasOwnProperty('signature_detail'))
        obj.signature_detail = ApiClient.convertToType(data['signature_detail'], 'String');
    }
    return obj;
  }
}

/**
 * Description of the contract.
 * @member {String} contract_description
 */
ParseAbiDataResponse.prototype.contract_description = undefined;

/**
 * The name of the contract that the user is interacting with.
 * @member {String} contract_name
 */
ParseAbiDataResponse.prototype.contract_name = undefined;

/**
 * It tells if contract that the user is interacting with is malicious contract.
 * @member {Number} malicious_contract
 */
ParseAbiDataResponse.prototype.malicious_contract = undefined;

/**
 * It describes the method name in ABI, for example \"transfer\".
 * @member {String} method
 */
ParseAbiDataResponse.prototype.method = undefined;

/**
 * It describes the parameter info
 * @member {Array.<module:model/AbiParamInfo>} params
 */
ParseAbiDataResponse.prototype.params = undefined;

/**
 * It explains why the transaction that users are signing contains risk.(Notice:Even non-malicious, commonly used, well-known contracts can be highly risky if not used properly.)
 * @member {String} risk
 */
ParseAbiDataResponse.prototype.risk = undefined;

/**
 * It tells if the transaction that users are signing contains risk.(Notice:Even non-malicious, commonly used, well-known contracts can be highly risky if not used properly.)
 * @member {Number} risky_signature
 */
ParseAbiDataResponse.prototype.risky_signature = undefined;

/**
 * It explain the function of the method
 * @member {String} signature_detail
 */
ParseAbiDataResponse.prototype.signature_detail = undefined;

