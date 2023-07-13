"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.promise.js");
require("core-js/modules/es.number.to-fixed.js");
require("core-js/modules/es.regexp.to-string.js");
var _sha = _interopRequireDefault(require("crypto-js/sha1.js"));
var AutoGeneratedClient = _interopRequireWildcard(require("../gen/index.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let _key = '';
let _secret = '';
let _timeout = 30;
let _accessToken = undefined;
function getApiClient(timeout) {
  let timeOutMill = (timeout || _timeout) * 1000;
  let apiClient = new AutoGeneratedClient.ApiClient();
  apiClient.timeout = timeOutMill;
  if (_accessToken) {
    apiClient.defaultHeaders['Authorization'] = _accessToken;
  }
  return apiClient;
}
function handleResult(error, data, resolve, reject) {
  if (error) {
    if (error.errno === 'ETIME') {
      resolve({
        code: -1,
        message: "Request Timeout!"
      });
    } else {
      reject(error);
    }
  } else {
    resolve(replaceUndefinedWithNull(data));
  }
}
function replaceUndefinedWithNull(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        replaceUndefinedWithNull(obj[key]);
      } else if (obj[key] === undefined) {
        obj[key] = null;
      }
    }
  }
  return obj;
}

/**
 * 
 * @param {string} app_key 
 * @param {string} app_secret 
 */
function config(app_key, app_secret) {
  let timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;
  _key = app_key;
  _secret = app_secret;
  _timeout = timeout;
}

/**
 * refresh Authorization by app_key and app_secret, 
 * so this method must called after config(app_key, app_secret)
 * @returns 
 */
async function getAccessToken() {
  if (!_key || !_secret) {
    throw Error('app_key or app_secret not set');
  }
  let time = (Date.now() / 1000).toFixed(0);
  let str = _key + time + _secret;
  let sign = (0, _sha.default)(str).toString();
  let api = new AutoGeneratedClient.TokenControllerApi(getApiClient());
  let ret = await new Promise((resolve, reject) => {
    api.getAccessTokenUsingPOST({
      body: {
        app_key: _key,
        sign: sign,
        time: time
      }
    }, (error, data, response) => {
      handleResult(error, data, resolve, reject);
    });
  });
  if (ret && ret.result) {
    _accessToken = ret.result.access_token;
  }
  return ret;
}

/**
 * 
 * @param {string} name  one of the API_NAMES
 * @param {number} timeout Not required, default is 30 or setup by config function
 * @returns 
 */
async function supportedChains(name, timeout) {
  if (name && !API_NAMES[name]) {
    throw Error('Api name not supported');
  }
  let api = new AutoGeneratedClient.TokenControllerV1Api(getApiClient(timeout));
  let ret = await new Promise((resolve, reject) => {
    api.getChainsListUsingGET({}, (error, data, response) => {
      handleResult(error, data, resolve, reject);
    });
  });
  return ret;
}
const API_NAMES = {
  token_security: 'token_security',
  address_security: 'address_security',
  approval_security: 'approval_security',
  token_approval_security: 'token_approval_security',
  nft721_approval_security: 'nft721_approval_security',
  nft1155_approval_security: 'nft1155_approval_security',
  input_decode: 'input_decode',
  nft_security: 'nft_security'
};

/**
 * Only return result for the first token when the Authorization not set
 * @param {string} chainId 
 * @param {string[]} tokens 
 * @param {number} timeout Not required, default is 30 or setup by config function
 */
async function tokenSecurity(chainId, tokens, timeout) {
  let api = new AutoGeneratedClient.TokenControllerV1Api(getApiClient(timeout));
  let ret = await new Promise((resolve, reject) => {
    api.tokenSecurityUsingGET1(chainId, tokens, {
      Authorization: _accessToken
    }, (error, data, response) => {
      handleResult(error, data, resolve, reject);
    });
  });
  return ret;
}

/**
 * 
 * @param {string} chainId 
 * @param {string} address 
 * @param {number} timeout Not required, default is 30 or setup by config function
 * @returns 
 */
async function addressSecurity(chainId, address, timeout) {
  let api = new AutoGeneratedClient.ApproveControllerV1Api(getApiClient(timeout));
  let ret = await new Promise((resolve, reject) => {
    api.addressContractUsingGET1(address, {
      chain_id: chainId,
      Authorization: _accessToken
    }, (error, data, response) => {
      handleResult(error, data, resolve, reject);
    });
  });
  return ret;
}

/**
 * 
 * @param {string} chainId 
 * @param {string} address 
 * @param {number} timeout Not required, default is 30 or setup by config function
 * @returns 
 */
async function approvalSecurity(chainId, address, timeout) {
  let api = new AutoGeneratedClient.ApproveControllerV1Api(getApiClient(timeout));
  let ret = await new Promise((resolve, reject) => {
    api.approvalContractUsingGET(chainId, address, {
      Authorization: _accessToken
    }, (error, data, response) => {
      handleResult(error, data, resolve, reject);
    });
  });
  return ret;
}

/**
 * 
 * @param {string} chainId 
 * @param {string} address 
 * @param {number} timeout Not required, default is 30 or setup by config function
 * @returns 
 */
async function erc20ApprovalSecurity(chainId, address, timeout) {
  let api = new AutoGeneratedClient.ApproveControllerV2Api(getApiClient(timeout));
  let ret = await new Promise((resolve, reject) => {
    api.addressTokenApproveListUsingGET1(address, chainId, {
      Authorization: _accessToken
    }, (error, data, response) => {
      handleResult(error, data, resolve, reject);
    });
  });
  return ret;
}

/**
 * 
 * @param {string} chainId 
 * @param {string} address 
 * @param {number} timeout Not required, default is 30 or setup by config function
 * @returns 
 */
async function erc721ApprovalSecurity(chainId, address, timeout) {
  let api = new AutoGeneratedClient.ApproveControllerV2Api(getApiClient(timeout));
  let ret = await new Promise((resolve, reject) => {
    api.addressNFT721ApproveListUsingGET1(address, chainId, {
      Authorization: _accessToken
    }, (error, data, response) => {
      handleResult(error, data, resolve, reject);
    });
  });
  return ret;
}

/**
 * 
 * @param {string} chainId 
 * @param {string} address 
 * @param {number} timeout Not required, default is 30 or setup by config function
 * @returns 
 */
async function erc1155ApprovalSecurity(chainId, address, timeout) {
  let api = new AutoGeneratedClient.ApproveControllerV2Api(getApiClient(timeout));
  let ret = await new Promise((resolve, reject) => {
    api.addressNFT1155ApproveListUsingGET1(address, chainId, {
      Authorization: _accessToken
    }, (error, data, response) => {
      handleResult(error, data, resolve, reject);
    });
  });
  return ret;
}

/**
 * 
 * @param {string} chainId 
 * @param {string} contractAddress 
 * @param {string} data 
 * @param {number} timeout Not required, default is 30 or setup by config function
 * @returns 
 */
async function inputDecode(chainId, contractAddress, data, timeout) {
  return inputDecodeWithOpts(chainId, contractAddress, data, {
    timeout
  });
}

/**
 * 
 * @param {string} chainId 
 * @param {string} contractAddress 
 * @param {string} data 
 * @param {Object} opts Optional parameters
 * @param {number} opts.timeout Not required, default is 30 or setup by config function.
 * @param {string} opts.signer Not required, the signer of this transaction.
 * @returns 
 */
async function inputDecodeWithOpts(chainId, contractAddress, data, opts) {
  opts = opts || {};
  let api = new AutoGeneratedClient.ContractAbiControllerApi(getApiClient(opts.timeout));
  let ret = await new Promise((resolve, reject) => {
    api.getAbiDataInfoUsingPOST({
      chain_id: chainId,
      signer: opts.signer,
      contract_address: contractAddress,
      data
    }, {
      Authorization: _accessToken
    }, (error, data, response) => {
      handleResult(error, data, resolve, reject);
    });
  });
  return ret;
}

/**
 * 
 * @param {string} chain_id 
 * @param {string} contract_address 
 * @param {number} timeout Not required, default is 30 or setup by config function
 * @returns 
 */
async function nftSecurity(chain_id, contract_address, token_id, timeout) {
  let api = new AutoGeneratedClient.NftControllerApi(getApiClient(timeout));
  let ret = await new Promise((resolve, reject) => {
    api.getNftInfoUsingGET1(chain_id, contract_address, {
      token_id,
      Authorization: _accessToken
    }, (error, data, response) => {
      handleResult(error, data, resolve, reject);
    });
  });
  return ret;
}

/**
 * 
 * @param {string} dapp_url 
 * @param {number} timeout Not required, default is 30 or setup by config function
 * @returns 
 */
async function dappSecurity(dapp_url, timeout) {
  let api = new AutoGeneratedClient.DappControllerApi(getApiClient(timeout));
  let ret = await new Promise((resolve, reject) => {
    api.getDappInfoUsingGET({
      url: dapp_url,
      Authorization: _accessToken
    }, (error, data, response) => {
      handleResult(error, data, resolve, reject);
    });
  });
  return ret;
}

/**
 * 
 * @param {string} site_url 
 * @param {number} timeout Not required, default is 30 or setup by config function
 * @returns 
 */
async function phishingSite(site_url, timeout) {
  let api = new AutoGeneratedClient.WebsiteControllerApi(getApiClient(timeout));
  let ret = await new Promise((resolve, reject) => {
    api.phishingSiteUsingGET(site_url, {
      Authorization: _accessToken
    }, (error, data, response) => {
      handleResult(error, data, resolve, reject);
    });
  });
  return ret;
}

/**
 * 
 * @param {string} site_url 
 * @param {number} timeout Not required, default is 30 or setup by config function
 * @returns 
 */
async function rugpullDetection(chain_id, contract_addresses, timeout) {
  let api = new AutoGeneratedClient.DefiControllerApi(getApiClient(timeout));
  let ret = await new Promise((resolve, reject) => {
    api.getDefiInfoUsingGET(contract_addresses, chain_id, {
      Authorization: _accessToken
    }, (error, data, response) => {
      handleResult(error, data, resolve, reject);
    });
  });
  return ret;
}
const GoPlus = {
  API_NAMES,
  config,
  getAccessToken,
  supportedChains,
  tokenSecurity,
  addressSecurity,
  approvalSecurity,
  erc20ApprovalSecurity,
  erc721ApprovalSecurity,
  erc1155ApprovalSecurity,
  inputDecode,
  inputDecodeWithOpts,
  nftSecurity,
  dappSecurity,
  phishingSite,
  rugpullDetection
};
var _default = GoPlus;
exports.default = _default;