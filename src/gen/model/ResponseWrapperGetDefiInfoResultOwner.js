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
 * The ResponseWrapperGetDefiInfoResultOwner model module.
 * @module model/ResponseWrapperGetDefiInfoResultOwner
 * @version 1.0
 */
export class ResponseWrapperGetDefiInfoResultOwner {
  /**
   * Constructs a new <code>ResponseWrapperGetDefiInfoResultOwner</code>.
   * When there is no owner function, or the ownership is unreadable or private, it would return empty. \&quot;owner\&quot;: {  }
   * @alias module:model/ResponseWrapperGetDefiInfoResultOwner
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponseWrapperGetDefiInfoResultOwner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperGetDefiInfoResultOwner} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperGetDefiInfoResultOwner} The populated <code>ResponseWrapperGetDefiInfoResultOwner</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperGetDefiInfoResultOwner();
      if (data.hasOwnProperty('owner_name'))
        obj.owner_name = ApiClient.convertToType(data['owner_name'], 'String');
      if (data.hasOwnProperty('owner_address'))
        obj.owner_address = ApiClient.convertToType(data['owner_address'], 'String');
      if (data.hasOwnProperty('owner_type'))
        obj.owner_type = ApiClient.convertToType(data['owner_type'], 'String');
    }
    return obj;
  }
}

/**
 * the function name of ownership.  If there is no return, means unknown.
 * @member {String} owner_name
 */
ResponseWrapperGetDefiInfoResultOwner.prototype.owner_name = undefined;

/**
 * owner address of the contract.  No return means unknown.
 * @member {String} owner_address
 */
ResponseWrapperGetDefiInfoResultOwner.prototype.owner_address = undefined;

/**
 * blackhole\" : the owner is a blackhole address. \"contract\" : the owner is a contract. \"eoa\" : the owner is a common address (eoa). \"multi-address\": the owner is an array/list. null: the address is not detected. No return means unknown.
 * @member {String} owner_type
 */
ResponseWrapperGetDefiInfoResultOwner.prototype.owner_type = undefined;

