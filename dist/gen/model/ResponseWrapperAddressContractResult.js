"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseWrapperAddressContractResult = void 0;
var _ApiClient = require("../ApiClient");
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
 * The ResponseWrapperAddressContractResult model module.
 * @module model/ResponseWrapperAddressContractResult
 * @version 1.0
 */
class ResponseWrapperAddressContractResult {
  /**
   * Constructs a new <code>ResponseWrapperAddressContractResult</code>.
   * Response result
   * @alias module:model/ResponseWrapperAddressContractResult
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>ResponseWrapperAddressContractResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseWrapperAddressContractResult} obj Optional instance to populate.
   * @return {module:model/ResponseWrapperAddressContractResult} The populated <code>ResponseWrapperAddressContractResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResponseWrapperAddressContractResult();
      if (data.hasOwnProperty('cybercrime')) obj.cybercrime = _ApiClient.ApiClient.convertToType(data['cybercrime'], 'String');
      if (data.hasOwnProperty('money_laundering')) obj.money_laundering = _ApiClient.ApiClient.convertToType(data['money_laundering'], 'String');
      if (data.hasOwnProperty('number_of_malicious_contracts_created')) obj.number_of_malicious_contracts_created = _ApiClient.ApiClient.convertToType(data['number_of_malicious_contracts_created'], 'String');
      if (data.hasOwnProperty('gas_abuse')) obj.gas_abuse = _ApiClient.ApiClient.convertToType(data['gas_abuse'], 'String');
      if (data.hasOwnProperty('financial_crime')) obj.financial_crime = _ApiClient.ApiClient.convertToType(data['financial_crime'], 'String');
      if (data.hasOwnProperty('darkweb_transactions')) obj.darkweb_transactions = _ApiClient.ApiClient.convertToType(data['darkweb_transactions'], 'String');
      if (data.hasOwnProperty('reinit')) obj.reinit = _ApiClient.ApiClient.convertToType(data['reinit'], 'String');
      if (data.hasOwnProperty('phishing_activities')) obj.phishing_activities = _ApiClient.ApiClient.convertToType(data['phishing_activities'], 'String');
      if (data.hasOwnProperty('contract_address')) obj.contract_address = _ApiClient.ApiClient.convertToType(data['contract_address'], 'String');
      if (data.hasOwnProperty('fake_kyc')) obj.fake_kyc = _ApiClient.ApiClient.convertToType(data['fake_kyc'], 'String');
      if (data.hasOwnProperty('blacklist_doubt')) obj.blacklist_doubt = _ApiClient.ApiClient.convertToType(data['blacklist_doubt'], 'String');
      if (data.hasOwnProperty('data_source')) obj.data_source = _ApiClient.ApiClient.convertToType(data['data_source'], 'String');
      if (data.hasOwnProperty('fake_standard_interface')) obj.fake_standard_interface = _ApiClient.ApiClient.convertToType(data['fake_standard_interface'], 'String');
      if (data.hasOwnProperty('stealing_attack')) obj.stealing_attack = _ApiClient.ApiClient.convertToType(data['stealing_attack'], 'String');
      if (data.hasOwnProperty('blackmail_activities')) obj.blackmail_activities = _ApiClient.ApiClient.convertToType(data['blackmail_activities'], 'String');
      if (data.hasOwnProperty('sanctioned')) obj.sanctioned = _ApiClient.ApiClient.convertToType(data['sanctioned'], 'String');
      if (data.hasOwnProperty('malicious_mining_activities')) obj.malicious_mining_activities = _ApiClient.ApiClient.convertToType(data['malicious_mining_activities'], 'String');
      if (data.hasOwnProperty('mixer')) obj.mixer = _ApiClient.ApiClient.convertToType(data['mixer'], 'String');
      if (data.hasOwnProperty('fake_token')) obj.fake_token = _ApiClient.ApiClient.convertToType(data['fake_token'], 'String');
      if (data.hasOwnProperty('honeypot_related_address')) obj.honeypot_related_address = _ApiClient.ApiClient.convertToType(data['honeypot_related_address'], 'String');
    }
    return obj;
  }
}

/**
 * It describes whether this address is involved in cybercrime. \"1\" means true; \"0\" means false.
 * @member {String} cybercrime
 */
exports.ResponseWrapperAddressContractResult = ResponseWrapperAddressContractResult;
ResponseWrapperAddressContractResult.prototype.cybercrime = undefined;

/**
 * It describes whether this address is involved in money laundering. \"1\" means true; \"0\" means false.
 * @member {String} money_laundering
 */
ResponseWrapperAddressContractResult.prototype.money_laundering = undefined;

/**
 * This parameter describes how many malicious contracts have been created by this address.
 * @member {String} number_of_malicious_contracts_created
 */
ResponseWrapperAddressContractResult.prototype.number_of_malicious_contracts_created = undefined;

/**
 * It describes whether this address is cheating other user's gas fee to mint other assets.(Notice:Any interaction with such addresses may result in loss of property.)
 * @member {String} gas_abuse
 */
ResponseWrapperAddressContractResult.prototype.gas_abuse = undefined;

/**
 * It describes whether this address is involved in financial crime. \"1\" means true; \"0\" means false.
 * @member {String} financial_crime
 */
ResponseWrapperAddressContractResult.prototype.financial_crime = undefined;

/**
 * It describes whether this address is involved in darkweb transactions. \"1\" means true; \"0\" means false.
 * @member {String} darkweb_transactions
 */
ResponseWrapperAddressContractResult.prototype.darkweb_transactions = undefined;

/**
 * It describes whether this address/contract has been deployed more than onces, and can be deployed again.(Notice:If a contract can be reinited, the developer can change the contract code whenever he wants.)
 * @member {String} reinit
 */
ResponseWrapperAddressContractResult.prototype.reinit = undefined;

/**
 * It describes whether this address has implemented phishing activities. \"1\" means true; \"0\" means false.
 * @member {String} phishing_activities
 */
ResponseWrapperAddressContractResult.prototype.phishing_activities = undefined;

/**
 * It describes whether this address is a contract address. \"1\" means true; \"0\" means false.(Notice:If only the address is sent to the API and not the chain id, the \"contract_address\" will not be returned (This is because there are cases where the same address is a contract in one public chain but not in other public chains.) Determining the contract address is achieved by calling a third-party blockchain browser interface. Since it takes time for the browser interface to return, the field may be empty on the first request. Solution: the second call around 5s can return whether the address is the value of the contract normally.)
 * @member {String} contract_address
 */
ResponseWrapperAddressContractResult.prototype.contract_address = undefined;

/**
 * It describes whether this address is involved in fake KYC. \"1\" means true; \"0\" means false.
 * @member {String} fake_kyc
 */
ResponseWrapperAddressContractResult.prototype.fake_kyc = undefined;

/**
 * It describes whether this address is suspected of malicious behavior. \"1\" means true; \"0\" means false.
 * @member {String} blacklist_doubt
 */
ResponseWrapperAddressContractResult.prototype.blacklist_doubt = undefined;

/**
 * It describes the data source for this address information. For example: GoPlus/SlowMist
 * @member {String} data_source
 */
ResponseWrapperAddressContractResult.prototype.data_source = undefined;

/**
 * It describes whether this contract contains standard interfaces that do not conform the requirements of the standard protocol.(Notice:Fake Standard Interface is mostly seen in scam assets.)
 * @member {String} fake_standard_interface
 */
ResponseWrapperAddressContractResult.prototype.fake_standard_interface = undefined;

/**
 * It describes whether this address has implemented stealing attacks. \"1\" means true; \"0\" means false.
 * @member {String} stealing_attack
 */
ResponseWrapperAddressContractResult.prototype.stealing_attack = undefined;

/**
 * It describes whether this address has implemented blackmail activities. \"1\" means true; \"0\" means false.
 * @member {String} blackmail_activities
 */
ResponseWrapperAddressContractResult.prototype.blackmail_activities = undefined;

/**
 * It describes whether this address is coin sanctioned address. \"1\" means true; \"0\" means false.
 * @member {String} sanctioned
 */
ResponseWrapperAddressContractResult.prototype.sanctioned = undefined;

/**
 * It describes whether this address is involved in malicious mining activities. \"1\" means true; \"0\" means false.
 * @member {String} malicious_mining_activities
 */
ResponseWrapperAddressContractResult.prototype.malicious_mining_activities = undefined;

/**
 * It describes whether this address is coin mixer address. \"1\" means true; \"0\" means false.(Notice:Interacting with coin mixer may result in your address being added to the risk list of third-party institutions.)
 * @member {String} mixer
 */
ResponseWrapperAddressContractResult.prototype.mixer = undefined;

/**
 * It indicates whether the token is a counterfeit of a mainstream asset.
 * @member {String} fake_token
 */
ResponseWrapperAddressContractResult.prototype.fake_token = undefined;

/**
 * It describes whether this address is related to honeypot tokens or has created scam tokens. \"1\" means true; \"0\" means false.(Notice:Addresses related to honeypot mean the creators or owners of the honeypot tokens. This is a dangerous address if the address is ralated to honeypot tokens.)
 * @member {String} honeypot_related_address
 */
ResponseWrapperAddressContractResult.prototype.honeypot_related_address = undefined;