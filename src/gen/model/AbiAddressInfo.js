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

/**
 * The AbiAddressInfo model module.
 * @module model/AbiAddressInfo
 * @version 1.0
 */
export class AbiAddressInfo {
  /**
   * Constructs a new <code>AbiAddressInfo</code>.
   * @alias module:model/AbiAddressInfo
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AbiAddressInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AbiAddressInfo} obj Optional instance to populate.
   * @return {module:model/AbiAddressInfo} The populated <code>AbiAddressInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AbiAddressInfo();
      if (data.hasOwnProperty('contract_name'))
        obj.contract_name = ApiClient.convertToType(data['contract_name'], 'String');
      if (data.hasOwnProperty('is_contract'))
        obj.is_contract = ApiClient.convertToType(data['is_contract'], 'Number');
      if (data.hasOwnProperty('malicious_address'))
        obj.malicious_address = ApiClient.convertToType(data['malicious_address'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('standard'))
        obj.standard = ApiClient.convertToType(data['standard'], 'String');
      if (data.hasOwnProperty('symbol'))
        obj.symbol = ApiClient.convertToType(data['symbol'], 'String');
    }
    return obj;
  }
}

/**
 * It describes the contract name if the address is a contract.
 * @member {String} contract_name
 */
AbiAddressInfo.prototype.contract_name = undefined;

/**
 * It describes whether the address is a contract. \"1\" means true; \"0\" means false.
 * @member {Number} is_contract
 */
AbiAddressInfo.prototype.is_contract = undefined;

/**
 * It describes whether the address is a suspected malicious contract.\"1\" means true; \"0\" means that we have not found malicious behavior of this address.
 * @member {Number} malicious_address
 */
AbiAddressInfo.prototype.malicious_address = undefined;

/**
 * It describes the token name if the address is an ERC20 contract.
 * @member {String} name
 */
AbiAddressInfo.prototype.name = undefined;

/**
 * It describes the standard type of the contract.Example:\"erc20\".
 * @member {String} standard
 */
AbiAddressInfo.prototype.standard = undefined;

/**
 * It describes the token symbol if the address is an ERC20 contract.
 * @member {String} symbol
 */
AbiAddressInfo.prototype.symbol = undefined;

