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
 * The ResponseWrapperGetNftInfoResultTransferWithoutApproval model module.
 * @module model/ResponseWrapperGetNftInfoResultTransferWithoutApproval
 * @version 1.0
 */
export class ResponseWrapperGetNftInfoResultTransferWithoutApproval {
  /**
   * Constructs a new <code>ResponseWrapperGetNftInfoResultTransferWithoutApproval</code>.
   * It describes whether the NFT owner can transfer NFT without approval.(Notice:Transfer_without_approval generally means the scammer does not need to get approvals to transfer another address&#x27;s NFT. One typical example is sleep_minting. Sleep_minting means that the scammer will first add the NFT to a well-known wallet address and then retrieve the NFT. After the value of the NFT has appreciated , it will be put back on the market.)
   * @alias module:model/ResponseWrapperGetNftInfoResultTransferWithoutApproval
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponseWrapperGetNftInfoResultTransferWithoutApproval</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperGetNftInfoResultTransferWithoutApproval} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperGetNftInfoResultTransferWithoutApproval} The populated <code>ResponseWrapperGetNftInfoResultTransferWithoutApproval</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperGetNftInfoResultTransferWithoutApproval();
      if (data.hasOwnProperty('owner_address'))
        obj.owner_address = ApiClient.convertToType(data['owner_address'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
      if (data.hasOwnProperty('owner_type'))
        obj.owner_type = ApiClient.convertToType(data['owner_type'], 'String');
    }
    return obj;
  }
}

/**
 * Owner_address describes the owner address.  null: the owner address cannot be fetched.
 * @member {String} owner_address
 */
ResponseWrapperGetNftInfoResultTransferWithoutApproval.prototype.owner_address = undefined;

/**
 * The \"value\" describes the status of the risk. null: the contract is not open source or there is a proxy, it is not possible to detect whether the risk exists. -1: the risk is detected but the ownership give up. If the detection of a code vulnerability, it can also be considered risk-free.  0: the risk is not detected.  1: the risk is detected, and the owner address is a common address (EOA), then it can be said that there is a clear risk.  2: The risk is detected, but the owner address is a contract address, the risk is not significant.  3: The risk is detected, but the owner address is not detectable / or an array. 
 * @member {Number} value
 */
ResponseWrapperGetNftInfoResultTransferWithoutApproval.prototype.value = undefined;

/**
 * \"blackhole\" : the owner is a blackhole address. \"contract\" : the owner is a contract. \"eoa\" : the owner is a common address (eoa). \"multi-address\": the owner is an array/list. null: the address is not detected.
 * @member {String} owner_type
 */
ResponseWrapperGetNftInfoResultTransferWithoutApproval.prototype.owner_type = undefined;

