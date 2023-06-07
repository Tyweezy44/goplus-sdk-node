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
import {ApiClient} from "../ApiClient";
import {ResponseWrapperGetNftInfo} from '../model/ResponseWrapperGetNftInfo';

/**
* NftController service.
* @module api/NftControllerApi
* @version 1.0
*/
export class NftControllerApi {

    /**
    * Constructs a new NftControllerApi. 
    * @alias module:api/NftControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getNftInfoUsingGET1 operation.
     * @callback moduleapi/NftControllerApi~getNftInfoUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseWrapperGetNftInfo{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get NFT&#x27;s security and risk data.
     * @param {String} chain_id Chain id, (eth: 1, bsc: 56, Polygon: 137, Avalanche: 43114)
     * @param {String} contract_addresses NFT contract address
     * @param {Object} opts Optional parameters
     * @param {String} opts.Authorization Authorization (test：Bearer 81|9ihH8JzEuFu4MQ9DjWmH5WrNCPW...)
     * @param {String} opts.token_id tokenId
     * @param {module:api/NftControllerApi~getNftInfoUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getNftInfoUsingGET1(chain_id, contract_addresses, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'chain_id' is set
      if (chain_id === undefined || chain_id === null) {
        throw new Error("Missing the required parameter 'chain_id' when calling getNftInfoUsingGET1");
      }
      // verify the required parameter 'contract_addresses' is set
      if (contract_addresses === undefined || contract_addresses === null) {
        throw new Error("Missing the required parameter 'contract_addresses' when calling getNftInfoUsingGET1");
      }

      let pathParams = {
        'chain_id': chain_id
      };
      let queryParams = {
        'contract_addresses': contract_addresses,'token_id': opts['token_id']
      };
      let headerParams = {
        'Authorization': opts['Authorization']
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = ResponseWrapperGetNftInfo;

      return this.apiClient.callApi(
        '/api/v1/nft_security/{chain_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}