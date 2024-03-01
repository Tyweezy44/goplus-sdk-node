"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApproveControllerV1Api = void 0;
var _ApiClient = require("../ApiClient");
var _ResponseWrapperAddressContract = require("../model/ResponseWrapperAddressContract");
var _ResponseWrapperContractApproveResponse = require("../model/ResponseWrapperContractApproveResponse");
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
* ApproveControllerV1 service.
* @module api/ApproveControllerV1Api
* @version 1.0
*/
class ApproveControllerV1Api {
  /**
  * Constructs a new ApproveControllerV1Api. 
  * @alias module:api/ApproveControllerV1Api
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the addressContractUsingGET1 operation.
   * @callback moduleapi/ApproveControllerV1Api~addressContractUsingGET1Callback
   * @param {String} error Error message, if any.
   * @param {module:model/ResponseWrapperAddressContract{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Check if the address is malicious
   * @param {String} address address
   * @param {Object} opts Optional parameters
   * @param {String} opts.Authorization Authorization (test: Bearer 81|9ihH8JzEuFu4MQ9DjWmH5WrNCPW...)
   * @param {String} opts.chain_id The chain_id of the blockchain. \&quot;1\&quot; means Ethereum;  \&quot;10\&quot; means Optimism; \&quot;25\&quot; means Cronos; \&quot;56\&quot; means BSC;  \&quot;66\&quot; means OKC; \&quot;100\&quot; means Gnosis; \&quot;128\&quot; means HECO;  \&quot;137\&quot; means Polygon;  \&quot;250\&quot; means Fantom; \&quot;321\&quot; means KCC; \&quot;324\&quot; means zkSync Era; \&quot;10001\&quot; means ETHW; \&quot;201022\&quot; means FON; \&quot;42161\&quot; means Arbitrum;  \&quot;43114\&quot; means Avalanche; \&quot;59140\&quot; means Linea; \&quot;tron\&quot; means Tron; \&quot;534352\&quot; means Scroll; \&quot;204\&quot; means opBNB; \&quot;solana\&quot; means Solana;  Solana and Tron address are case-sensitive;
   * @param {module:api/ApproveControllerV1Api~addressContractUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  addressContractUsingGET1(address, opts, callback) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'address' is set
    if (address === undefined || address === null) {
      throw new Error("Missing the required parameter 'address' when calling addressContractUsingGET1");
    }
    let pathParams = {
      'address': address
    };
    let queryParams = {
      'chain_id': opts['chain_id']
    };
    let headerParams = {
      'Authorization': opts['Authorization']
    };
    let formParams = {};
    let authNames = [];
    let contentTypes = [];
    let accepts = ['*/*'];
    let returnType = _ResponseWrapperAddressContract.ResponseWrapperAddressContract;
    return this.apiClient.callApi('/api/v1/address_security/{address}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
  }
  /**
   * Callback function to receive the result of the approvalContractUsingGET operation.
   * @callback moduleapi/ApproveControllerV1Api~approvalContractUsingGETCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ResponseWrapperContractApproveResponse{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Check if the approval is secure 
   * @param {String} chain_id Chain id, (ETH: 1,  BSC: 56, OKC: 66, Heco: 128, Polygon: 137, Fantom:250, Arbitrum: 42161, Avalanche: 43114)
   * @param {String} contract_addresses Contract needs to be detected
   * @param {Object} opts Optional parameters
   * @param {String} opts.Authorization Authorization (test: Bearer 81|9ihH8JzEuFu4MQ9DjWmH5WrNCPW...)
   * @param {module:api/ApproveControllerV1Api~approvalContractUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  approvalContractUsingGET(chain_id, contract_addresses, opts, callback) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'chain_id' is set
    if (chain_id === undefined || chain_id === null) {
      throw new Error("Missing the required parameter 'chain_id' when calling approvalContractUsingGET");
    }
    // verify the required parameter 'contract_addresses' is set
    if (contract_addresses === undefined || contract_addresses === null) {
      throw new Error("Missing the required parameter 'contract_addresses' when calling approvalContractUsingGET");
    }
    let pathParams = {
      'chain_id': chain_id
    };
    let queryParams = {
      'contract_addresses': contract_addresses
    };
    let headerParams = {
      'Authorization': opts['Authorization']
    };
    let formParams = {};
    let authNames = [];
    let contentTypes = [];
    let accepts = ['*/*'];
    let returnType = _ResponseWrapperContractApproveResponse.ResponseWrapperContractApproveResponse;
    return this.apiClient.callApi('/api/v1/approval_security/{chain_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
  }
}
exports.ApproveControllerV1Api = ApproveControllerV1Api;