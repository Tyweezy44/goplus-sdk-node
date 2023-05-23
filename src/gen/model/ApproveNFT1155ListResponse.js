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
import {ApproveErc1155Result} from './ApproveErc1155Result';

/**
 * The ApproveNFT1155ListResponse model module.
 * @module model/ApproveNFT1155ListResponse
 * @version 1.0
 */
export class ApproveNFT1155ListResponse {
  /**
   * Constructs a new <code>ApproveNFT1155ListResponse</code>.
   * @alias module:model/ApproveNFT1155ListResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ApproveNFT1155ListResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApproveNFT1155ListResponse} obj Optional instance to populate.
   * @return {module:model/ApproveNFT1155ListResponse} The populated <code>ApproveNFT1155ListResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApproveNFT1155ListResponse();
      if (data.hasOwnProperty('approved_list'))
        obj.approved_list = ApiClient.convertToType(data['approved_list'], [ApproveErc1155Result]);
      if (data.hasOwnProperty('chain_id'))
        obj.chain_id = ApiClient.convertToType(data['chain_id'], 'String');
      if (data.hasOwnProperty('is_open_source'))
        obj.is_open_source = ApiClient.convertToType(data['is_open_source'], 'Number');
      if (data.hasOwnProperty('is_verified'))
        obj.is_verified = ApiClient.convertToType(data['is_verified'], 'Number');
      if (data.hasOwnProperty('malicious_address'))
        obj.malicious_address = ApiClient.convertToType(data['malicious_address'], 'Number');
      if (data.hasOwnProperty('malicious_behavior'))
        obj.malicious_behavior = ApiClient.convertToType(data['malicious_behavior'], ['String']);
      if (data.hasOwnProperty('nft_address'))
        obj.nft_address = ApiClient.convertToType(data['nft_address'], 'String');
      if (data.hasOwnProperty('nft_name'))
        obj.nft_name = ApiClient.convertToType(data['nft_name'], 'String');
      if (data.hasOwnProperty('nft_symbol'))
        obj.nft_symbol = ApiClient.convertToType(data['nft_symbol'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/ApproveErc1155Result>} approved_list
 */
ApproveNFT1155ListResponse.prototype.approved_list = undefined;

/**
 * ChainID
 * @member {String} chain_id
 */
ApproveNFT1155ListResponse.prototype.chain_id = undefined;

/**
 * Whether the contract is verified on blockchain explorer.
 * @member {Number} is_open_source
 */
ApproveNFT1155ListResponse.prototype.is_open_source = undefined;

/**
 * Whether NFT is certified on a reputable trading platform.
 * @member {Number} is_verified
 */
ApproveNFT1155ListResponse.prototype.is_verified = undefined;

/**
 * Whether the NFT is malicious or contains high risk.
 * @member {Number} malicious_address
 */
ApproveNFT1155ListResponse.prototype.malicious_address = undefined;

/**
 * Specific malicious behaviors or risks of this NFT.
 * @member {Array.<String>} malicious_behavior
 */
ApproveNFT1155ListResponse.prototype.malicious_behavior = undefined;

/**
 * NFT address
 * @member {String} nft_address
 */
ApproveNFT1155ListResponse.prototype.nft_address = undefined;

/**
 * NFT name
 * @member {String} nft_name
 */
ApproveNFT1155ListResponse.prototype.nft_name = undefined;

/**
 * NFT symbol
 * @member {String} nft_symbol
 */
ApproveNFT1155ListResponse.prototype.nft_symbol = undefined;

