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

/**
 * The ResponseWrapperPhishingSiteResult model module.
 * @module model/ResponseWrapperPhishingSiteResult
 * @version 1.0
 */
export class ResponseWrapperPhishingSiteResult {
  /**
   * Constructs a new <code>ResponseWrapperPhishingSiteResult</code>.
   * Response result
   * @alias module:model/ResponseWrapperPhishingSiteResult
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResponseWrapperPhishingSiteResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperPhishingSiteResult} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperPhishingSiteResult} The populated <code>ResponseWrapperPhishingSiteResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperPhishingSiteResult();
      if (data.hasOwnProperty('website_contract_security'))
        obj.website_contract_security = ApiClient.convertToType(data['website_contract_security'], ['String']);
      if (data.hasOwnProperty('phishing_site'))
        obj.phishing_site = ApiClient.convertToType(data['phishing_site'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Array.<String>} website_contract_security
 */
ResponseWrapperPhishingSiteResult.prototype.website_contract_security = undefined;

/**
 * It means whether the website is a phishing site. \"1\" means true; \"0\" means that we have not found malicious behavior of this website.
 * @member {Number} phishing_site
 */
ResponseWrapperPhishingSiteResult.prototype.phishing_site = undefined;

