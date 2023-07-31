"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenControllerV1Api = void 0;
var _ApiClient = require("../ApiClient");
var _ResponseWrapperListGetChainsList = require("../model/ResponseWrapperListGetChainsList");
var _ResponseWrapperTokenSecurity = require("../model/ResponseWrapperTokenSecurity");
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
* TokenControllerV1 service.
* @module api/TokenControllerV1Api
* @version 1.0
*/
class TokenControllerV1Api {
  /**
  * Constructs a new TokenControllerV1Api. 
  * @alias module:api/TokenControllerV1Api
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the getChainsListUsingGET operation.
   * @callback moduleapi/TokenControllerV1Api~getChainsListUsingGETCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ResponseWrapperListGetChainsList{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get the list of chains supported by different functions.
   * @param {Object} opts Optional parameters
   * @param {String} opts.Authorization Authorization (test: Bearer 81|9ihH8JzEuFu4MQ9DjWmH5WrNCPW...)
   * @param {module:model/String} opts.name API name.
   * @param {module:api/TokenControllerV1Api~getChainsListUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  getChainsListUsingGET(opts, callback) {
    opts = opts || {};
    let postBody = null;
    let pathParams = {};
    let queryParams = {
      'name': opts['name']
    };
    let headerParams = {
      'Authorization': opts['Authorization']
    };
    let formParams = {};
    let authNames = [];
    let contentTypes = [];
    let accepts = ['*/*'];
    let returnType = _ResponseWrapperListGetChainsList.ResponseWrapperListGetChainsList;
    return this.apiClient.callApi('/api/v1/supported_chains', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
  }
  /**
   * Callback function to receive the result of the tokenSecurityUsingGET1 operation.
   * @callback moduleapi/TokenControllerV1Api~tokenSecurityUsingGET1Callback
   * @param {String} error Error message, if any.
   * @param {module:model/ResponseWrapperTokenSecurity{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get token&#x27;s security and risk data.
   * @param {String} chain_id The chain_id of the blockchain. \&quot;1\&quot; means Ethereum;  \&quot;10\&quot; means Optimism; \&quot;25\&quot; means Cronos; \&quot;56\&quot; means BSC;  \&quot;66\&quot; means OKC; \&quot;100\&quot; means Gnosis; \&quot;128\&quot; means HECO;  \&quot;137\&quot; means Polygon;  \&quot;250\&quot; means Fantom; \&quot;321\&quot; means KCC; \&quot;324\&quot; means zkSync Era; \&quot;10001\&quot; means ETHW; \&quot;201022\&quot; means FON; \&quot;42161\&quot; means Arbitrum;  \&quot;43114\&quot; means Avalanche; \&quot;59144\&quot; means Linea Mainet; \&quot;59140\&quot; means Linea Testnet; \&quot;1666600000\&quot; means Harmony; \&quot;tron\&quot; means Tron.
   * @param {String} contract_addresses The contract address of tokens.
   * @param {Object} opts Optional parameters
   * @param {String} opts.Authorization Authorization (test: Bearer 81|9ihH8JzEuFu4MQ9DjWmH5WrNCPW...)
   * @param {module:api/TokenControllerV1Api~tokenSecurityUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  tokenSecurityUsingGET1(chain_id, contract_addresses, opts, callback) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'chain_id' is set
    if (chain_id === undefined || chain_id === null) {
      throw new Error("Missing the required parameter 'chain_id' when calling tokenSecurityUsingGET1");
    }
    // verify the required parameter 'contract_addresses' is set
    if (contract_addresses === undefined || contract_addresses === null) {
      throw new Error("Missing the required parameter 'contract_addresses' when calling tokenSecurityUsingGET1");
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
    let returnType = _ResponseWrapperTokenSecurity.ResponseWrapperTokenSecurity;
    return this.apiClient.callApi('/api/v1/token_security/{chain_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
  }
}
exports.TokenControllerV1Api = TokenControllerV1Api;