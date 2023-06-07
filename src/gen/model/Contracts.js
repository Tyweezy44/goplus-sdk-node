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
 * The Contracts model module.
 * @module model/Contracts
 * @version 1.0
 */
export class Contracts {
  /**
   * Constructs a new <code>Contracts</code>.
   * @alias module:model/Contracts
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Contracts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Contracts} obj Optional instance to populate.
   * @return {module:model/Contracts} The populated <code>Contracts</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Contracts();
      if (data.hasOwnProperty('contract_address'))
        obj.contract_address = ApiClient.convertToType(data['contract_address'], 'String');
      if (data.hasOwnProperty('creator_address'))
        obj.creator_address = ApiClient.convertToType(data['creator_address'], 'String');
      if (data.hasOwnProperty('deployment_time'))
        obj.deployment_time = ApiClient.convertToType(data['deployment_time'], 'Number');
      if (data.hasOwnProperty('is_open_source'))
        obj.is_open_source = ApiClient.convertToType(data['is_open_source'], 'Number');
      if (data.hasOwnProperty('malicious_behavior'))
        obj.malicious_behavior = ApiClient.convertToType(data['malicious_behavior'], [Object]);
      if (data.hasOwnProperty('malicious_contract'))
        obj.malicious_contract = ApiClient.convertToType(data['malicious_contract'], 'Number');
      if (data.hasOwnProperty('malicious_creator'))
        obj.malicious_creator = ApiClient.convertToType(data['malicious_creator'], 'Number');
      if (data.hasOwnProperty('malicious_creator_behavior'))
        obj.malicious_creator_behavior = ApiClient.convertToType(data['malicious_creator_behavior'], [Object]);
    }
    return obj;
  }
}

/**
 * It describes the dAap's contract address.
 * @member {String} contract_address
 */
Contracts.prototype.contract_address = undefined;

/**
 * It describes the creator address of the contract.
 * @member {String} creator_address
 */
Contracts.prototype.creator_address = undefined;

/**
 * It describes the deployed time of the contract.The value is presented as a timestamp. Example: \"deployed_time\": 1626578345
 * @member {Number} deployment_time
 */
Contracts.prototype.deployment_time = undefined;

/**
 * It describes whether this contract is open source. \"1\" means true; \"0\" means false.
 * @member {Number} is_open_source
 */
Contracts.prototype.is_open_source = undefined;

/**
 * It describes specific malicious behaviors of the contract.
 * @member {Array.<Object>} malicious_behavior
 */
Contracts.prototype.malicious_behavior = undefined;

/**
 * It describes whether the address is a suspected malicious contract. \"1\" means true; \"0\" means that we have not found malicious behavior of this contract.(Notice:\"malicious_contract\" return \"0\" does not mean the address is completely safe. Maybe we just haven't found its malicious behavior.)
 * @member {Number} malicious_contract
 */
Contracts.prototype.malicious_contract = undefined;

/**
 * It describes whether the creator is a suspected malicious address. \"1\" means true; \"0\" means that we have not found malicious behavior of this address.(Notice:\"malicious_creator\" return \"0\" does not mean the address is completely safe. Maybe we just haven't found its malicious behavior.)
 * @member {Number} malicious_creator
 */
Contracts.prototype.malicious_creator = undefined;

/**
 * It describes specific malicious behaviors of the contract creator.
 * @member {Array.<Object>} malicious_creator_behavior
 */
Contracts.prototype.malicious_creator_behavior = undefined;

