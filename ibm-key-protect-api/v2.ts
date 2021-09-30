/**
 * (C) Copyright IBM Corp. 2021.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * IBM OpenAPI SDK Code Generator Version: 3.28.0-55613c9e-20210220-164656
 */


import * as extend from 'extend';
import { IncomingHttpHeaders, OutgoingHttpHeaders } from 'http';
import { Authenticator, BaseService, getAuthenticatorFromEnvironment, getMissingParams, UserOptions } from 'ibm-cloud-sdk-core';
import { getSdkHeaders } from '../lib/common';

/**
 * IBM Key Protect helps you provision encrypted keys for apps across IBM Cloud. As you manage the lifecycle of your
 * keys, you can benefit from knowing that your keys are secured by cloud-based FIPS 140-2 Level 3 hardware security
 * modules (HSMs) that protect against theft of information. You can use the Key Protect API to store, generate, and
 * retrieve your key material. Keys within the service can protect any type of data in your symmetric key based
 * encryption solution.
 */

class IbmKeyProtectApiV2 extends BaseService {

  static DEFAULT_SERVICE_NAME: string = 'ibm_key_protect_api';

  /*************************
   * Factory method
   ************************/

  /**
   * Constructs an instance of IbmKeyProtectApiV2 with passed in options and external configuration.
   *
   * @param {UserOptions} [options] - The parameters to send to the service.
   * @param {string} [options.serviceName] - The name of the service to configure
   * @param {Authenticator} [options.authenticator] - The Authenticator object used to authenticate requests to the service
   * @param {string} [options.serviceUrl] - The URL for the service
   * @returns {IbmKeyProtectApiV2}
   */

  public static newInstance(options: UserOptions): IbmKeyProtectApiV2 {
    options = options || {};

    if (!options.serviceName) {
      options.serviceName = this.DEFAULT_SERVICE_NAME;
    }
    if (!options.authenticator) {
      options.authenticator = getAuthenticatorFromEnvironment(options.serviceName);
    }
    const service = new IbmKeyProtectApiV2(options);
    service.configureService(options.serviceName);
    if (options.serviceUrl) {
      service.setServiceUrl(options.serviceUrl);
    }
    return service;
  }


  /**
   * Construct a IbmKeyProtectApiV2 object.
   *
   * @param {Object} options - Options for the service.
   * @param {string} [options.serviceUrl] - The base url to use when contacting the service. The base url may differ between IBM Cloud regions.
   * @param {OutgoingHttpHeaders} [options.headers] - Default headers that shall be included with every request to the service.
   * @param {Authenticator} options.authenticator - The Authenticator object used to authenticate requests to the service
   * @constructor
   * @returns {IbmKeyProtectApiV2}
   */
  constructor(options: UserOptions) {
    options = options || {};

    super(options);
    if (options.serviceUrl) {
      this.setServiceUrl(options.serviceUrl);
    }
  }

  /*************************
   * aliases
   ************************/

  /**
   * Create an alias.
   *
   * Creates an alias for the specified key.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - The v4 UUID that uniquely identifies the key.
   * @param {string} params.alias - An alias that identifies a key. Each alias is unique only within the given instance
   * and is not reserved across the Key Protect service. Each key can have up to five aliases. There is a limit of 1000
   * aliases per instance. Alias must be alphanumeric and cannot contain spaces or special characters other than '-' or
   * '_'.
   *
   * The alias cannot be a version 4 UUID and must not be a Key Protect reserved name: `allowed_ip`, `key`, `keys`,
   * `metadata`, `policy`,
   * `policies`, `registration`, `registrations`, `ring`, `rings`, `rotate`,
   * `wrap`, `unwrap`, `rewrap`, `version`, `versions`. Alias size can be between 2 - 90 characters.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.xKmsKeyRing] - The ID of the key ring that the specified key is a part of. When the  header
   * is not specified, Key Protect will perform a key ring lookup. For  a more optimized request, specify the key ring
   * on every call. The key ring ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.KeyAlias>>}
   */
  public createKeyAlias(params: IbmKeyProtectApiV2.CreateKeyAliasParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.KeyAlias>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'alias', 'bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'id': _params.id,
      'alias': _params.alias
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'createKeyAlias');

    const parameters = {
      options: {
        url: '/api/v2/keys/{id}/aliases/{alias}',
        method: 'POST',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Delete an alias.
   *
   * Deletes an alias from the associated key.
   *
   * Delete alias does not delete the key.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - The v4 UUID that uniquely identifies the key.
   * @param {string} params.alias - An alias that identifies a key. Each alias is unique only within the given instance
   * and is not reserved across the Key Protect service. Each key can have up to five aliases. There is a limit of 1000
   * aliases per instance. Alias must be alphanumeric and cannot contain spaces or special characters other than '-' or
   * '_'.
   *
   * The alias cannot be a version 4 UUID and must not be a Key Protect reserved name: `allowed_ip`, `key`, `keys`,
   * `metadata`, `policy`,
   * `policies`, `registration`, `registrations`, `ring`, `rings`, `rotate`,
   * `wrap`, `unwrap`, `rewrap`, `version`, `versions`. Alias size can be between 2 - 90 characters.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.xKmsKeyRing] - The ID of the key ring that the specified key is a part of. When the  header
   * is not specified, Key Protect will perform a key ring lookup. For  a more optimized request, specify the key ring
   * on every call. The key ring ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.Empty>>}
   */
  public deleteKeyAlias(params: IbmKeyProtectApiV2.DeleteKeyAliasParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.Empty>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'alias', 'bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'id': _params.id,
      'alias': _params.alias
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteKeyAlias');

    const parameters = {
      options: {
        url: '/api/v2/keys/{id}/aliases/{alias}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /*************************
   * importTokens
   ************************/

  /**
   * Create an import token.
   *
   * Creates an import token that you can use to encrypt and import root keys into the service.
   * [Learn more](/docs/key-protect?topic=key-protect-importing-keys#using-import-tokens)
   *
   * When you call `POST /import_token`, Key Protect creates an RSA key-pair from its HSMs. The service encrypts and
   * stores the private key in the HSM, and returns the corresponding public key when you call
   * `GET /import_token`. You can create only one import token per service instance.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {number} [params.expiration] - The time in seconds from the creation of an import token that determines how
   * long its associated public key remains valid.
   *
   * The minimum value is `300` seconds (5 minutes), and the maximum value is `86400` (24 hours). The default value is
   * `600`
   * (10 minutes).
   * @param {number} [params.maxAllowedRetrievals] - The number of times that an import token can be retrieved within
   * its expiration time before it is no longer accessible.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.xKmsKeyRing] - The ID of the key ring that the specified key belongs to. When the header is
   * not specified,  Key Protect will perform a key ring lookup. For a more optimized request,  specify the key ring on
   * every call. The key ring ID of keys that are created without an  `X-Kms-Key-Ring` header is: `default`.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.ImportToken>>}
   */
  public postImportToken(params: IbmKeyProtectApiV2.PostImportTokenParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.ImportToken>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = {
      'expiration': _params.expiration,
      'maxAllowedRetrievals': _params.maxAllowedRetrievals
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'postImportToken');

    const parameters = {
      options: {
        url: '/api/v2/import_token',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Retrieve an import token.
   *
   * Retrieves the import token that is associated with your service instance.
   *
   * When you call `GET /import_token`, Key Protect returns the public key that you can use to encrypt and import key
   * material to the service, along with details about the key.
   *
   * **Note:** After you reach the `maxAllowedRetrievals` or `expirationDate` for the import token, the import token and
   * its associated public key can no longer be used for key operations. To create a new import token, use
   * `POST /import_token`.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.xKmsKeyRing] - The ID of the key ring that the specified key belongs to. When the header is
   * not specified,  Key Protect will perform a key ring lookup. For a more optimized request,  specify the key ring on
   * every call. The key ring ID of keys that are created without an  `X-Kms-Key-Ring` header is: `default`.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.GetImportToken>>}
   */
  public getImportToken(params: IbmKeyProtectApiV2.GetImportTokenParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.GetImportToken>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'getImportToken');

    const parameters = {
      options: {
        url: '/api/v2/import_token',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /*************************
   * keyActions
   ************************/

  /**
   * Wrap a key.
   *
   * Use a root key to [wrap or encrypt a data encryption key](/docs/key-protect?topic=key-protect-wrap-keys).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - The v4 UUID that uniquely identifies the key.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {NodeJS.ReadableStream|Buffer} [params.keyActionWrapBody] - The base request for wrap key action.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.xKmsKeyRing] - The ID of the key ring that the specified key is a part of. When the  header
   * is not specified, Key Protect will perform a key ring lookup. For  a more optimized request, specify the key ring
   * on every call. The key ring ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.WrapKeyResponseBody>>}
   */
  public wrapKey(params: IbmKeyProtectApiV2.WrapKeyParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.WrapKeyResponseBody>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = _params.keyActionWrapBody;
    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'wrapKey');

    const parameters = {
      options: {
        url: '/api/v2/keys/{id}/actions/wrap',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Content-Type': 'application/vnd.ibm.kms.key_action_wrap+json',
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Unwrap a key.
   *
   * Use a root key to
   * [unwrap or decrypt a data encryption key](/docs/key-protect?topic=key-protect-unwrap-keys).
   *
   * **Note:** When you unwrap a wrapped data encryption key (WDEK) by using a rotated root key, the service returns a
   * new ciphertext in the response entity-body. Each ciphertext remains available for `unwrap` actions. If you unwrap a
   * DEK with a previous ciphertext, the service also returns the latest ciphertext and latest key version in the
   * response. Use the latest ciphertext for future unwrap operations.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - The v4 UUID that uniquely identifies the key.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {NodeJS.ReadableStream|Buffer} params.keyActionUnwrapBody - The base request for unwrap key action.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.xKmsKeyRing] - The ID of the key ring that the specified key is a part of. When the  header
   * is not specified, Key Protect will perform a key ring lookup. For  a more optimized request, specify the key ring
   * on every call. The key ring ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.UnwrapKeyResponseBody>>}
   */
  public unwrapKey(params: IbmKeyProtectApiV2.UnwrapKeyParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.UnwrapKeyResponseBody>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'bluemixInstance', 'keyActionUnwrapBody'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = _params.keyActionUnwrapBody;
    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'unwrapKey');

    const parameters = {
      options: {
        url: '/api/v2/keys/{id}/actions/unwrap',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Content-Type': 'application/vnd.ibm.kms.key_action_unwrap+json',
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Rewrap a key.
   *
   * Use a root key to [rewrap or reencrypt a data encryption key](/docs/key-protect?topic=key-protect-rewrap-keys).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - The v4 UUID that uniquely identifies the key.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {NodeJS.ReadableStream|Buffer} params.keyActionRewrapBody - The base request for rewrap key action.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.xKmsKeyRing] - The ID of the key ring that the specified key is a part of. When the  header
   * is not specified, Key Protect will perform a key ring lookup. For  a more optimized request, specify the key ring
   * on every call. The key ring ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.RewrapKeyResponseBody>>}
   */
  public rewrapKey(params: IbmKeyProtectApiV2.RewrapKeyParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.RewrapKeyResponseBody>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'bluemixInstance', 'keyActionRewrapBody'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = _params.keyActionRewrapBody;
    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'rewrapKey');

    const parameters = {
      options: {
        url: '/api/v2/keys/{id}/actions/rewrap',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Content-Type': 'application/vnd.ibm.kms.key_action_rewrap+json',
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Rotate a key.
   *
   * [Create a new version](/docs/key-protect?topic=key-protect-rotate-keys) of a root key.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - The v4 UUID that uniquely identifies the key.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {NodeJS.ReadableStream|Buffer} [params.keyActionRotateBody] - The base request for rotate key action.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.xKmsKeyRing] - The ID of the key ring that the specified key is a part of. When the  header
   * is not specified, Key Protect will perform a key ring lookup. For  a more optimized request, specify the key ring
   * on every call. The key ring ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
   * @param {string} [params.prefer] - Alters server behavior for POST or DELETE operations. A header with
   * `return=minimal` causes the service to return only the key identifier, or metadata. A header containing
   * `return=representation` returns both the key material and metadata in the response entity-body. If the key has been
   * designated as a root key, the system cannot return the key material.
   *
   * **Note:** During POST operations, Key Protect may not immediately return the key material due to key generation
   * time. To retrieve the key material, you can perform a subsequent `GET /keys/{id}` request.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.Empty>>}
   */
  public rotateKey(params: IbmKeyProtectApiV2.RotateKeyParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.Empty>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = _params.keyActionRotateBody;
    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'rotateKey');

    const parameters = {
      options: {
        url: '/api/v2/keys/{id}/actions/rotate',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Content-Type': 'application/vnd.ibm.kms.key_action_rotate+json',
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing,
          'Prefer': _params.prefer
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Set a key for deletion.
   *
   * [Authorize deletion](/docs/key-protect?topic=key-protect-delete-dual-auth-keys#set-key-deletion-api) for a key with
   * a dual authorization policy.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - The v4 UUID that uniquely identifies the key.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.xKmsKeyRing] - The ID of the key ring that the specified key is a part of. When the  header
   * is not specified, Key Protect will perform a key ring lookup. For  a more optimized request, specify the key ring
   * on every call. The key ring ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.Empty>>}
   */
  public setKeyForDeletion(params: IbmKeyProtectApiV2.SetKeyForDeletionParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.Empty>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'setKeyForDeletion');

    const parameters = {
      options: {
        url: '/api/v2/keys/{id}/actions/setKeyForDeletion',
        method: 'POST',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Unset a key for deletion.
   *
   * [Remove an authorization](/docs/key-protect?topic=key-protect-delete-dual-auth-keys#unset-key-deletion-api) for a
   * key with a dual authorization policy.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - The v4 UUID that uniquely identifies the key.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.xKmsKeyRing] - The ID of the key ring that the specified key is a part of. When the  header
   * is not specified, Key Protect will perform a key ring lookup. For  a more optimized request, specify the key ring
   * on every call. The key ring ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.Empty>>}
   */
  public unsetKeyForDeletion(params: IbmKeyProtectApiV2.UnsetKeyForDeletionParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.Empty>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'unsetKeyForDeletion');

    const parameters = {
      options: {
        url: '/api/v2/keys/{id}/actions/unsetKeyForDeletion',
        method: 'POST',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Enable a key.
   *
   * [Enable operations](/docs/key-protect?topic=key-protect-disable-keys#enable-api) for a key.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - The v4 UUID that uniquely identifies the key.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.xKmsKeyRing] - The ID of the key ring that the specified key is a part of. When the  header
   * is not specified, Key Protect will perform a key ring lookup. For  a more optimized request, specify the key ring
   * on every call. The key ring ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.Empty>>}
   */
  public enableKey(params: IbmKeyProtectApiV2.EnableKeyParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.Empty>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'enableKey');

    const parameters = {
      options: {
        url: '/api/v2/keys/{id}/actions/enable',
        method: 'POST',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Disable a key.
   *
   * [Disable operations](/docs/key-protect?topic=key-protect-disable-keys) for a key.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - The v4 UUID that uniquely identifies the key.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.xKmsKeyRing] - The ID of the key ring that the specified key is a part of. When the  header
   * is not specified, Key Protect will perform a key ring lookup. For  a more optimized request, specify the key ring
   * on every call. The key ring ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.Empty>>}
   */
  public disableKey(params: IbmKeyProtectApiV2.DisableKeyParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.Empty>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'disableKey');

    const parameters = {
      options: {
        url: '/api/v2/keys/{id}/actions/disable',
        method: 'POST',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Sync associated resources.
   *
   * Initiate a manual data synchronization request to the associated resources of a key. Regular key lifecycle events
   * automatically notify integrated services of the change, however, in the case a service does not respond to a key
   * lifecycle event notification, the `sync` API may be used to initiate a renotification to the integrated services
   * that manage the associated resources linked to the key.
   *
   * **Note:** The services that manage the associated resources linked to the key are responsible for maintaining
   * up-to-date records of the key state and version. Key Protect does not have the ability to force data
   * synchronization for other services. The `sync` API is purely to
   * **initiate** a request for all associated resources to synchronize their key records with what the Key Protect API
   * returns.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - The v4 UUID that uniquely identifies the key.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.xKmsKeyRing] - The ID of the key ring that the specified key is a part of. When the  header
   * is not specified, Key Protect will perform a key ring lookup. For  a more optimized request, specify the key ring
   * on every call. The key ring ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.Empty>>}
   */
  public syncAssociatedResources(params: IbmKeyProtectApiV2.SyncAssociatedResourcesParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.Empty>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'syncAssociatedResources');

    const parameters = {
      options: {
        url: '/api/v2/keys/{id}/actions/sync',
        method: 'POST',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /*************************
   * keyRings
   ************************/

  /**
   * List Key Rings.
   *
   * List all key rings in the instance.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.ListKeyRings>>}
   */
  public listKeyRings(params: IbmKeyProtectApiV2.ListKeyRingsParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.ListKeyRings>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'listKeyRings');

    const parameters = {
      options: {
        url: '/api/v2/key_rings',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Create Key Ring.
   *
   * Create a key ring in the instance with the specified name. The key ring ID `default` is a reserved key ring ID and
   * cannot be created nor destroyed. The default key ring is initial key ring that is generated with each newly created
   * instance. All keys not associated with an otherwise specified key ring exist within the default key ring.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.keyRingId - The ID that identifies the key ring. Each ID is unique only within the given
   * instance and is not reserved across the Key Protect service.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.Empty>>}
   */
  public createKeyRing(params: IbmKeyProtectApiV2.CreateKeyRingParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.Empty>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['keyRingId', 'bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'key-ring-id': _params.keyRingId
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'createKeyRing');

    const parameters = {
      options: {
        url: '/api/v2/key_rings/{key-ring-id}',
        method: 'POST',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Delete Key Ring.
   *
   * Delete the key ring from the instance. key ring ID `default` cannot be destroyed. Currently, only key rings with 0
   * (zero) keys, in any state [Active (1), Suspended (2), Deactivated (3), Destroyed (5)], may be deleted.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.keyRingId - The ID that identifies the key ring. Each ID is unique only within the given
   * instance and is not reserved across the Key Protect service.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.Empty>>}
   */
  public deleteKeyRing(params: IbmKeyProtectApiV2.DeleteKeyRingParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.Empty>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['keyRingId', 'bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'key-ring-id': _params.keyRingId
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteKeyRing');

    const parameters = {
      options: {
        url: '/api/v2/key_rings/{key-ring-id}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /*************************
   * keys
   ************************/

  /**
   * Retrieve key total.
   *
   * Returns the same HTTP headers as a GET request without returning the entity-body. This operation returns the number
   * of keys in your instance in a header called `Key-Total`.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {number[]} [params.state] - The state of the keys to be retrieved. States must be a list of integers from 0
   * to 5 delimited by commas with no whitespace or trailing commas. Valid states are based on NIST SP 800-57. States
   * are integers and correspond to the Pre-activation = 0, Active = 1, Suspended = 2, Deactivated = 3, and Destroyed =
   * 5 values.
   *
   * **Usage:** If you want to retrieve active and deleted keys, use
   * `../keys?state=1,5`.
   * @param {boolean} [params.extractable] - The type of keys to be retrieved. Filters keys based on the
   * `extractable` property. You can use this query parameter to search for keys whose material can leave the service.
   * If set to `true`, standard keys will be retrieved. If set to `false`, root keys will be retrieved. If omitted, both
   * root and standard keys will be retrieved.
   *
   * **Usage:** If you want to retrieve standard keys, use
   * `../keys?extractable=true`.
   * @param {string} [params.xKmsKeyRing] - The ID of the target key ring. If unspecified, all resources in the instance
   * that the caller has access to will be returned. When the header  is specified, only resources within the specified
   * key ring, that the caller has access to,  will be returned. The key ring ID of keys that are created without an
   * `X-Kms-Key-Ring` header is: `default`.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.Empty>>}
   */
  public getKeyCollectionMetadata(params: IbmKeyProtectApiV2.GetKeyCollectionMetadataParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.Empty>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const query = {
      'state': _params.state,
      'extractable': _params.extractable
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'getKeyCollectionMetadata');

    const parameters = {
      options: {
        url: '/api/v2/keys',
        method: 'HEAD',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Create a key.
   *
   * Creates a new key with specified key material.
   *
   * Key Protect designates the resource as either a root key or a standard key based on the `extractable` value that
   * you specify. A successful
   * `POST /keys` operation adds the key to the service and returns the details of the request in the response
   * entity-body, if the Prefer header is set to `return=representation`.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {NodeJS.ReadableStream|Buffer} params.body - The base request for creating a new key.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.prefer] - Alters server behavior for POST or DELETE operations. A header with
   * `return=minimal` causes the service to return only the key identifier, or metadata. A header containing
   * `return=representation` returns both the key material and metadata in the response entity-body. If the key has been
   * designated as a root key, the system cannot return the key material.
   *
   * **Note:** During POST operations, Key Protect may not immediately return the key material due to key generation
   * time. To retrieve the key material, you can perform a subsequent `GET /keys/{id}` request.
   * @param {string} [params.xKmsKeyRing] - The ID of the key ring that the specified key belongs to. When the header is
   * not specified,  Key Protect will perform a key ring lookup. For a more optimized request,  specify the key ring on
   * every call. The key ring ID of keys that are created without an  `X-Kms-Key-Ring` header is: `default`.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.Key>>}
   */
  public createKey(params: IbmKeyProtectApiV2.CreateKeyParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.Key>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['bluemixInstance', 'body'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = _params.body;
    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'createKey');

    const parameters = {
      options: {
        url: '/api/v2/keys',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Content-Type': 'application/vnd.ibm.kms.key+json',
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'Prefer': _params.prefer,
          'X-Kms-Key-Ring': _params.xKmsKeyRing
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * List keys.
   *
   * Retrieves a list of keys that are stored in your Key Protect service instance.
   *
   * **Note:** `GET /keys` will not return the key material in the response body. You can retrieve the key material for
   * a standard key with a subsequent `GET /keys/{id}` request.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {number} [params.limit] - The number of keys to retrieve. By default, `GET /keys` returns the first 200
   * keys. To retrieve a different set of keys, use `limit` with
   * `offset` to page through your available resources. The maximum value for
   * `limit` is 5,000.
   *
   * **Usage:** If you have 20 keys in your instance, and you want to retrieve only the first 5 keys, use
   * `../keys?limit=5`.
   * @param {number} [params.offset] - The number of keys to skip. By specifying `offset`, you retrieve a subset of keys
   * that starts with the `offset` value. Use `offset` with
   * `limit` to page through your available resources.
   *
   * **Usage:** If you have 100 keys in your instance, and you want to retrieve keys 26 through 50, use
   * `../keys?offset=25&limit=25`.
   * @param {number[]} [params.state] - The state of the keys to be retrieved. States must be a list of integers from 0
   * to 5 delimited by commas with no whitespace or trailing commas. Valid states are based on NIST SP 800-57. States
   * are integers and correspond to the Pre-activation = 0, Active = 1, Suspended = 2, Deactivated = 3, and Destroyed =
   * 5 values.
   *
   * **Usage:** If you want to retrieve active and deleted keys, use
   * `../keys?state=1,5`.
   * @param {boolean} [params.extractable] - The type of keys to be retrieved. Filters keys based on the
   * `extractable` property. You can use this query parameter to search for keys whose material can leave the service.
   * If set to `true`, standard keys will be retrieved. If set to `false`, root keys will be retrieved. If omitted, both
   * root and standard keys will be retrieved.
   *
   * **Usage:** If you want to retrieve standard keys, use
   * `../keys?extractable=true`.
   * @param {string} [params.xKmsKeyRing] - The ID of the target key ring. If unspecified, all resources in the instance
   * that the caller has access to will be returned. When the header  is specified, only resources within the specified
   * key ring, that the caller has access to,  will be returned. The key ring ID of keys that are created without an
   * `X-Kms-Key-Ring` header is: `default`.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.ListKeys>>}
   */
  public getKeys(params: IbmKeyProtectApiV2.GetKeysParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.ListKeys>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const query = {
      'limit': _params.limit,
      'offset': _params.offset,
      'state': _params.state,
      'extractable': _params.extractable
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'getKeys');

    const parameters = {
      options: {
        url: '/api/v2/keys',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Retrieve a key.
   *
   * Retrieves a key and its details by specifying the ID or alias of the key.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - The v4 UUID or alias that uniquely identifies the key.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.xKmsKeyRing] - The ID of the key ring that the specified key is a part of. When the  header
   * is not specified, Key Protect will perform a key ring lookup. For  a more optimized request, specify the key ring
   * on every call. The key ring ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.GetKey>>}
   */
  public getKey(params: IbmKeyProtectApiV2.GetKeyParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.GetKey>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'getKey');

    const parameters = {
      options: {
        url: '/api/v2/keys/{id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Update (patch) a key.
   *
   * Update attributes of a key. Currently only the following attributes are applicable for update: - keyRingID Note: If
   * provided, the `X-Kms-Key-Ring` header should specify the key's current key ring. To change the key ring of the key,
   * specify the new key ring in the request body.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - The v4 UUID that uniquely identifies the key.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {NodeJS.ReadableStream|Buffer} [params.keyPatchBody] - The base request for patch key.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.xKmsKeyRing] - The ID of the key ring that the specified key is a part of. When the  header
   * is not specified, Key Protect will perform a key ring lookup. For  a more optimized request, specify the key ring
   * on every call. The key ring ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.PatchKeyResponseBody>>}
   */
  public patchKey(params: IbmKeyProtectApiV2.PatchKeyParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.PatchKeyResponseBody>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = _params.keyPatchBody;
    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'patchKey');

    const parameters = {
      options: {
        url: '/api/v2/keys/{id}',
        method: 'PATCH',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Content-Type': 'application/vnd.ibm.kms.key+json',
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Delete a key.
   *
   * Deletes a key by specifying the ID of the key.
   *
   * By default, Key Protect requires a single authorization to delete keys. For added protection, you can
   * [enable a dual authorization policy](#set-key-policies) to safely delete keys from your service instance.
   *
   * **Important:** When you delete a key, you permanently shred its contents and associated data. The action cannot be
   * reversed.
   *
   * **Note:** By default, Key Protect blocks the deletion of a key that's protecting a cloud resource, such as a Cloud
   * Object Storage bucket. Use
   * `GET keys/{id}/registrations` to verify if the key has an active registration to a resource. To delete the key and
   * its associated registrations, set the optional `force` parameter to `true`.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - The v4 UUID that uniquely identifies the key.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.xKmsKeyRing] - The ID of the key ring that the specified key is a part of. When the  header
   * is not specified, Key Protect will perform a key ring lookup. For  a more optimized request, specify the key ring
   * on every call. The key ring ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
   * @param {string} [params.prefer] - Alters server behavior for POST or DELETE operations. A header with
   * `return=minimal` causes the service to return only the key identifier, or metadata. A header containing
   * `return=representation` returns both the key material and metadata in the response entity-body. If the key has been
   * designated as a root key, the system cannot return the key material.
   *
   * **Note:** During POST operations, Key Protect may not immediately return the key material due to key generation
   * time. To retrieve the key material, you can perform a subsequent `GET /keys/{id}` request.
   * @param {boolean} [params.force] - If set to `true`, Key Protect forces deletion on a key that is protecting a cloud
   * resource, such as a Cloud Object Storage bucket. The action removes any registrations that are associated with the
   * key.
   *
   * **Note:** If a key is protecting a cloud resource that has a retention policy, Key Protect cannot delete the key.
   * Use
   * `GET keys/{id}/registrations` to review registrations between the key and its associated cloud resources. To enable
   * deletion, contact an account owner to remove the retention policy on each resource that is associated with this
   * key.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.DeleteKey>>}
   */
  public deleteKey(params: IbmKeyProtectApiV2.DeleteKeyParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.DeleteKey>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const query = {
      'force': _params.force
    };

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'deleteKey');

    const parameters = {
      options: {
        url: '/api/v2/keys/{id}',
        method: 'DELETE',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing,
          'Prefer': _params.prefer
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Retrieve key metadata.
   *
   * Retrieves the details of a key by specifying the ID of the key.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - The v4 UUID or alias that uniquely identifies the key.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.xKmsKeyRing] - The ID of the key ring that the specified key is a part of. When the  header
   * is not specified, Key Protect will perform a key ring lookup. For  a more optimized request, specify the key ring
   * on every call. The key ring ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.GetKeyMetadata>>}
   */
  public getKeyMetadata(params: IbmKeyProtectApiV2.GetKeyMetadataParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.GetKeyMetadata>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'getKeyMetadata');

    const parameters = {
      options: {
        url: '/api/v2/keys/{id}/metadata',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Purge a deleted key.
   *
   * Purge all key metadata and registrations associated with the specified key. Purge key can only be applied to a key
   * in the Destroyed (5) state.  After a key is deleted, there is a wait period of up to four hours before purge key
   * operation is allowed.  **Important:** When you purge a key, you permanently shred its contents and associated data.
   * The action cannot be reversed.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - The v4 UUID that uniquely identifies the key.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.xKmsKeyRing] - The ID of the key ring that the specified key is a part of. When the  header
   * is not specified, Key Protect will perform a key ring lookup. For  a more optimized request, specify the key ring
   * on every call. The key ring ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
   * @param {string} [params.prefer] - Alters server behavior for POST or DELETE operations. A header with
   * `return=minimal` causes the service to return only the key identifier, or metadata. A header containing
   * `return=representation` returns both the key material and metadata in the response entity-body. If the key has been
   * designated as a root key, the system cannot return the key material.
   *
   * **Note:** During POST operations, Key Protect may not immediately return the key material due to key generation
   * time. To retrieve the key material, you can perform a subsequent `GET /keys/{id}` request.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.PurgeKey>>}
   */
  public purgeKey(params: IbmKeyProtectApiV2.PurgeKeyParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.PurgeKey>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'purgeKey');

    const parameters = {
      options: {
        url: '/api/v2/keys/{id}/purge',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing,
          'Prefer': _params.prefer
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Restore a key.
   *
   * [Restore a key](/docs/key-protect?topic=key-protect-restore-keys).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - The v4 UUID that uniquely identifies the key.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {NodeJS.ReadableStream|Buffer} [params.keyRestoreBody] - The base request parameters for restore key action.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.xKmsKeyRing] - The ID of the key ring that the specified key is a part of. When the  header
   * is not specified, Key Protect will perform a key ring lookup. For  a more optimized request, specify the key ring
   * on every call. The key ring ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
   * @param {string} [params.prefer] - Alters server behavior for POST or DELETE operations. A header with
   * `return=minimal` causes the service to return only the key identifier, or metadata. A header containing
   * `return=representation` returns both the key material and metadata in the response entity-body. If the key has been
   * designated as a root key, the system cannot return the key material.
   *
   * **Note:** During POST operations, Key Protect may not immediately return the key material due to key generation
   * time. To retrieve the key material, you can perform a subsequent `GET /keys/{id}` request.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<NodeJS.ReadableStream|Buffer>>}
   */
  public restoreKey(params: IbmKeyProtectApiV2.RestoreKeyParams): Promise<IbmKeyProtectApiV2.Response<NodeJS.ReadableStream|Buffer>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = _params.keyRestoreBody;
    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'restoreKey');

    const parameters = {
      options: {
        url: '/api/v2/keys/{id}/restore',
        method: 'POST',
        body,
        path,
        responseType: 'stream',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/vnd.ibm.kms.key+json',
          'Content-Type': 'application/vnd.ibm.kms.key_action_restore+json',
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing,
          'Prefer': _params.prefer
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * List key versions.
   *
   * Retrieves all versions of a root key by specifying the ID of the key.
   *
   * When you rotate a root key, you generate a new version of the key. If you're using the root key to protect
   * resources across IBM Cloud, the stered cloud services that you associate with the key use the latest key version to
   * wrap your data.
   * [Learn more](/docs/key-protect?topic=key-protect-key-rotation).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - The v4 UUID that uniquely identifies the key.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.xKmsKeyRing] - The ID of the key ring that the specified key is a part of. When the  header
   * is not specified, Key Protect will perform a key ring lookup. For  a more optimized request, specify the key ring
   * on every call. The key ring ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
   * @param {number} [params.limit] - The number of key versions to retrieve. By default, `GET /versions` returns the
   * first 200 key versions. To retrieve a different set of key versions, use `limit` with `offset` to page through your
   * available resources. The maximum value for `limit` is 5,000.
   *
   * **Usage:** If you have a key with 20 versions in your instance, and you want to retrieve only the first 5 versions,
   * use `../versions?limit=5`.
   * @param {number} [params.offset] - The number of key versions to skip. By specifying `offset`, you retrieve a subset
   * of key versions that starts with the `offset` value. Use
   * `offset` with `limit` to page through your available resources.
   *
   * **Usage:** If you have a key with 100 versions in your instance, and you want to retrieve versions 26 through 50,
   * use
   * `../versions?offset=25&limit=25`.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.ListKeyVersions>>}
   */
  public getKeyVersions(params: IbmKeyProtectApiV2.GetKeyVersionsParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.ListKeyVersions>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const query = {
      'limit': _params.limit,
      'offset': _params.offset
    };

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'getKeyVersions');

    const parameters = {
      options: {
        url: '/api/v2/keys/{id}/versions',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /*************************
   * policies
   ************************/

  /**
   * Set key policies.
   *
   * Creates or updates one or more policies for the specified key.
   *
   * You can set policies for a key, such as an
   * [automatic rotation policy](/docs/key-protect?topic=key-protect-set-rotation-policy) or a
   * [dual authorization policy](/docs/key-protect?topic=key-protect-set-dual-auth-key-policy) to protect against the
   * accidental deletion of keys. Use
   * `PUT /keys/{id}/policies` to create new policies for a key or update an existing policy.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - The v4 UUID that uniquely identifies the key.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {SetKeyPoliciesOneOf} params.setKeyPoliciesOneOf - The base request for key policy create or update.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.xKmsKeyRing] - The ID of the key ring that the specified key is a part of. When the  header
   * is not specified, Key Protect will perform a key ring lookup. For  a more optimized request, specify the key ring
   * on every call. The key ring ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
   * @param {string} [params.policy] - The type of policy that is associated with the specified key.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.GetKeyPoliciesOneOf>>}
   */
  public putPolicy(params: IbmKeyProtectApiV2.PutPolicyParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.GetKeyPoliciesOneOf>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'bluemixInstance', 'setKeyPoliciesOneOf'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = _params.setKeyPoliciesOneOf;
    const query = {
      'policy': _params.policy
    };

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'putPolicy');

    const parameters = {
      options: {
        url: '/api/v2/keys/{id}/policies',
        method: 'PUT',
        body,
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * List key policies.
   *
   * Retrieves a list of policies that are associated with a specified key.
   *
   * You can set policies for a key, such as an
   * [automatic rotation policy](/docs/key-protect?topic=key-protect-set-rotation-policy) or a
   * [dual authorization policy](/docs/key-protect?topic=key-protect-set-dual-auth-key-policy) to protect against the
   * accidental deletion of keys. Use
   * `GET /keys/{id}/policies` to browse the policies that exist for a specified key.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - The v4 UUID that uniquely identifies the key.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.xKmsKeyRing] - The ID of the key ring that the specified key is a part of. When the  header
   * is not specified, Key Protect will perform a key ring lookup. For  a more optimized request, specify the key ring
   * on every call. The key ring ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
   * @param {string} [params.policy] - The type of policy that is associated with the specified key.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.GetKeyPoliciesOneOf>>}
   */
  public getPolicy(params: IbmKeyProtectApiV2.GetPolicyParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.GetKeyPoliciesOneOf>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const query = {
      'policy': _params.policy
    };

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'getPolicy');

    const parameters = {
      options: {
        url: '/api/v2/keys/{id}/policies',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Set instance policies.
   *
   * Creates or updates one or more policies for the specified service instance.
   *
   * **Note:** When you set an instance policy, Key Protect associates the policy information with keys that you add to
   * the instance after the policy is updated. This operation does not affect existing keys in the instance.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {SetInstancePoliciesOneOf} params.setInstancePoliciesOneOf - The base request for the create or update of
   * instance level policies.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.policy] - The type of policy that is associated with the specified instance.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.Empty>>}
   */
  public putInstancePolicy(params: IbmKeyProtectApiV2.PutInstancePolicyParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.Empty>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['bluemixInstance', 'setInstancePoliciesOneOf'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = _params.setInstancePoliciesOneOf;
    const query = {
      'policy': _params.policy
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'putInstancePolicy');

    const parameters = {
      options: {
        url: '/api/v2/instance/policies',
        method: 'PUT',
        body,
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Content-Type': 'application/json',
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * List instance policies.
   *
   * Retrieves a list of policies that are associated with a specified service instance.
   *
   * You can manage advanced preferences for keys in your service instance by creating instance-level policies. Use `GET
   * /instance/policies` to browse the policies that are associated with the specified instance. Currently, dual
   * authorization policies are supported.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.policy] - The type of policy that is associated with the specified instance.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.GetInstancePoliciesOneOf>>}
   */
  public getInstancePolicy(params: IbmKeyProtectApiV2.GetInstancePolicyParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.GetInstancePoliciesOneOf>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const query = {
      'policy': _params.policy
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'getInstancePolicy');

    const parameters = {
      options: {
        url: '/api/v2/instance/policies',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Retrieve allowed IP port.
   *
   * Retrieves the private endpoint port associated with your service instance's active allowed IP policy. If the
   * instance does not contain an active allowed IP policy, no information will be returned.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.AllowedIPPort>>}
   */
  public getAllowedIpPort(params: IbmKeyProtectApiV2.GetAllowedIpPortParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.AllowedIPPort>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'getAllowedIpPort');

    const parameters = {
      options: {
        url: '/api/v2/instance/allowed_ip_port',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * List registrations for a key.
   *
   * Retrieves a list of registrations that are associated with a specified root key.
   *
   * When you use a root key to protect an IBM Cloud resource, such as a Cloud Object Storage bucket, Key Protect
   * creates a registration between the resource and root key. You can use `GET /keys/{id}/registrations` to understand
   * which cloud resources are protected by the key that you specify.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - The v4 UUID that uniquely identifies the key.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.xKmsKeyRing] - The ID of the key ring that the specified key is a part of. When the  header
   * is not specified, Key Protect will perform a key ring lookup. For  a more optimized request, specify the key ring
   * on every call. The key ring ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
   * @param {number} [params.limit] - The number of registrations to retrieve. By default returns the first 200
   * registrations. To retrieve a different set of registrations, use
   * `limit` with `offset` to page through your available resources. The maximum value for `limit` is 5,000.
   *
   * **Usage:** If you have 20 registrations that are associated with a key, and you want to retrieve only the first 5
   * registrations, use
   * `../registrations?limit=5`.
   * @param {number} [params.offset] - The number of registrations to skip. By specifying `offset`, you retrieve a
   * subset of registrations that starts with the `offset` value. Use `offset` with `limit` to page through your
   * available resources.
   *
   * **Usage:** If you have 100 registrations that are associated with a key, and you want to retrieve registrations 26
   * through 50, use
   * `../registrations?offset=25&limit=25`.
   * @param {string} [params.urlEncodedResourceCrnQuery] - Filters for resources that are associated with a specified
   * [Cloud Resource Name](/docs/account?topic=account-crn)
   * (CRN) by using URL encoded wildcard characters (`*`). The parameter should contain all CRN segments and must be URL
   * encoded. Supports a prefix search when you specify `*` on the last CRN segment.
   *
   * **Usage:** To list registrations that are associated with all resources in `<service-instance>`, use a URL encoded
   * version of the following string:
   * `crn:v1:bluemix:public:<service-name>:<location>:a/<account>:<service-instance>:*:*`. To search for subresources,
   * use the following CRN format:
   * `crn:v1:bluemix:public:<service-name>:<location>:a/<account>:<service-instance>:<resource-type>:<resource>/<subresource>`.
   *
   * For more examples, see
   * [CRN query examples](/docs/key-protect?topic=key-protect-view-protected-resources#crn-query-examples).
   * @param {boolean} [params.preventKeyDeletion] - Filters registrations based on the `preventKeyDeletion` property.
   * You can use this query parameter to search for registered cloud resources that are non-erasable due to a retention
   * policy.
   *
   * **Usage:** To search for registered cloud resources that have a retention policy, use
   * `../registrations?preventKeyDeletion=true`.
   * @param {boolean} [params.totalCount] - If set to `true`, returns `totalCount` in the response metadata for use with
   * pagination. The `totalCount` value returned specifies the total number of registrations that match the request,
   * disregarding limit and offset.
   *
   * **Usage:** To return the `totalCount` value for use with pagination, use
   * `../registrations?totalCount=true`.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.RegistrationWithTotalCount>>}
   */
  public getRegistrations(params: IbmKeyProtectApiV2.GetRegistrationsParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.RegistrationWithTotalCount>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const query = {
      'limit': _params.limit,
      'offset': _params.offset,
      'urlEncodedResourceCRNQuery': _params.urlEncodedResourceCrnQuery,
      'preventKeyDeletion': _params.preventKeyDeletion,
      'totalCount': _params.totalCount
    };

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'getRegistrations');

    const parameters = {
      options: {
        url: '/api/v2/keys/{id}/registrations',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * List registrations for any key.
   *
   * Retrieves a list of registrations that match the Cloud Resource Name
   * (CRN) query that you specify.
   *
   * When you use a root key to protect an IBM Cloud resource, such as a Cloud Object Storage bucket, Key Protect
   * creates a registration between the resource and root key. You can use `GET /keys/registrations` to understand which
   * cloud resources are protected by keys in your Key Protect service instance.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.bluemixInstance - The IBM Cloud instance ID that identifies your Key Protect service
   * instance.
   * @param {string} [params.correlationId] - The v4 UUID used to correlate and track transactions.
   * @param {string} [params.xKmsKeyRing] - The ID of the target key ring. If unspecified, all resources in the instance
   * that the caller has access to will be returned. When the header  is specified, only resources within the specified
   * key ring, that the caller has access to,  will be returned. The key ring ID of keys that are created without an
   * `X-Kms-Key-Ring` header is: `default`.
   * @param {string} [params.urlEncodedResourceCrnQuery] - Filters for resources that are associated with a specified
   * [Cloud Resource Name](/docs/account?topic=account-crn)
   * (CRN) by using URL encoded wildcard characters (`*`). The parameter should contain all CRN segments and must be URL
   * encoded.
   *
   * If provided, the parameter should not contain (`*`) in the first eight segments. If this parameter is not provided,
   * registrations for all keys in the requested Key Protect instance are returned.
   * @param {number} [params.limit] - The number of registrations to retrieve. By default returns the first 200
   * registrations. To retrieve a different set of registrations, use
   * `limit` with `offset` to page through your available resources. The maximum value for `limit` is 5,000.
   *
   * **Usage:** If you have 20 registrations that are associated with a key, and you want to retrieve only the first 5
   * registrations, use
   * `../registrations?limit=5`.
   * @param {number} [params.offset] - The number of registrations to skip. By specifying `offset`, you retrieve a
   * subset of registrations that starts with the `offset` value. Use `offset` with `limit` to page through your
   * available resources.
   *
   * **Usage:** If you have 100 registrations that are associated with a key, and you want to retrieve registrations 26
   * through 50, use
   * `../registrations?offset=25&limit=25`.
   * @param {boolean} [params.preventKeyDeletion] - Filters registrations based on the `preventKeyDeletion` property.
   * You can use this query parameter to search for registered cloud resources that are non-erasable due to a retention
   * policy.
   *
   * **Usage:** To search for registered cloud resources that have a retention policy, use
   * `../registrations?preventKeyDeletion=true`.
   * @param {boolean} [params.totalCount] - If set to `true`, returns `totalCount` in the response metadata for use with
   * pagination. The `totalCount` value returned specifies the total number of registrations that match the request,
   * disregarding limit and offset.
   *
   * **Usage:** To return the `totalCount` value for use with pagination, use
   * `../registrations?totalCount=true`.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.RegistrationWithTotalCount>>}
   */
  public getRegistrationsAllKeys(params: IbmKeyProtectApiV2.GetRegistrationsAllKeysParams): Promise<IbmKeyProtectApiV2.Response<IbmKeyProtectApiV2.RegistrationWithTotalCount>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['bluemixInstance'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const query = {
      'urlEncodedResourceCRNQuery': _params.urlEncodedResourceCrnQuery,
      'limit': _params.limit,
      'offset': _params.offset,
      'preventKeyDeletion': _params.preventKeyDeletion,
      'totalCount': _params.totalCount
    };

    const sdkHeaders = getSdkHeaders(IbmKeyProtectApiV2.DEFAULT_SERVICE_NAME, 'v2', 'getRegistrationsAllKeys');

    const parameters = {
      options: {
        url: '/api/v2/keys/registrations',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Bluemix-Instance': _params.bluemixInstance,
          'Correlation-Id': _params.correlationId,
          'X-Kms-Key-Ring': _params.xKmsKeyRing
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

}

/*************************
 * interfaces
 ************************/

namespace IbmKeyProtectApiV2 {

  /** An operation response. */
  export interface Response<T = any>  {
    result: T;
    status: number;
    statusText: string;
    headers: IncomingHttpHeaders;
  }

  /** The callback for a service request. */
  export type Callback<T> = (error: any, response?: Response<T>) => void;

  /** The body of a service request that returns no response data. */
  export interface Empty { }

  /** A standard JS object, defined to avoid the limitations of `Object` and `object` */
  export interface JsonObject {
    [key: string]: any;
  }

  /*************************
   * request interfaces
   ************************/

  /** Parameters for the `createKeyAlias` operation. */
  export interface CreateKeyAliasParams {
    /** The v4 UUID that uniquely identifies the key. */
    id: string;
    /** An alias that identifies a key. Each alias is unique only within the given instance and is not reserved
     *  across the Key Protect service. Each key can have up to five aliases. There is a limit of 1000 aliases per
     *  instance. Alias must be alphanumeric and cannot contain spaces or special characters other than '-' or '_'.
     *
     *  The alias cannot be a version 4 UUID and must not be a Key Protect reserved name: `allowed_ip`, `key`, `keys`,
     *  `metadata`, `policy`,
     *  `policies`, `registration`, `registrations`, `ring`, `rings`, `rotate`,
     *  `wrap`, `unwrap`, `rewrap`, `version`, `versions`. Alias size can be between 2 - 90 characters.
     */
    alias: string;
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The ID of the key ring that the specified key is a part of. When the  header is not specified, Key Protect
     *  will perform a key ring lookup. For  a more optimized request, specify the key ring on every call. The key ring
     *  ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
     */
    xKmsKeyRing?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteKeyAlias` operation. */
  export interface DeleteKeyAliasParams {
    /** The v4 UUID that uniquely identifies the key. */
    id: string;
    /** An alias that identifies a key. Each alias is unique only within the given instance and is not reserved
     *  across the Key Protect service. Each key can have up to five aliases. There is a limit of 1000 aliases per
     *  instance. Alias must be alphanumeric and cannot contain spaces or special characters other than '-' or '_'.
     *
     *  The alias cannot be a version 4 UUID and must not be a Key Protect reserved name: `allowed_ip`, `key`, `keys`,
     *  `metadata`, `policy`,
     *  `policies`, `registration`, `registrations`, `ring`, `rings`, `rotate`,
     *  `wrap`, `unwrap`, `rewrap`, `version`, `versions`. Alias size can be between 2 - 90 characters.
     */
    alias: string;
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The ID of the key ring that the specified key is a part of. When the  header is not specified, Key Protect
     *  will perform a key ring lookup. For  a more optimized request, specify the key ring on every call. The key ring
     *  ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
     */
    xKmsKeyRing?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `postImportToken` operation. */
  export interface PostImportTokenParams {
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The time in seconds from the creation of an import token that determines how long its associated public key
     *  remains valid.
     *
     *  The minimum value is `300` seconds (5 minutes), and the maximum value is `86400` (24 hours). The default value
     *  is `600`
     *  (10 minutes).
     */
    expiration?: number;
    /** The number of times that an import token can be retrieved within its expiration time before it is no longer
     *  accessible.
     */
    maxAllowedRetrievals?: number;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The ID of the key ring that the specified key belongs to. When the header is not specified,  Key Protect
     *  will perform a key ring lookup. For a more optimized request,  specify the key ring on every call. The key ring
     *  ID of keys that are created without an  `X-Kms-Key-Ring` header is: `default`.
     */
    xKmsKeyRing?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getImportToken` operation. */
  export interface GetImportTokenParams {
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The ID of the key ring that the specified key belongs to. When the header is not specified,  Key Protect
     *  will perform a key ring lookup. For a more optimized request,  specify the key ring on every call. The key ring
     *  ID of keys that are created without an  `X-Kms-Key-Ring` header is: `default`.
     */
    xKmsKeyRing?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `wrapKey` operation. */
  export interface WrapKeyParams {
    /** The v4 UUID that uniquely identifies the key. */
    id: string;
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The base request for wrap key action. */
    keyActionWrapBody?: NodeJS.ReadableStream|Buffer;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The ID of the key ring that the specified key is a part of. When the  header is not specified, Key Protect
     *  will perform a key ring lookup. For  a more optimized request, specify the key ring on every call. The key ring
     *  ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
     */
    xKmsKeyRing?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `unwrapKey` operation. */
  export interface UnwrapKeyParams {
    /** The v4 UUID that uniquely identifies the key. */
    id: string;
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The base request for unwrap key action. */
    keyActionUnwrapBody: NodeJS.ReadableStream|Buffer;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The ID of the key ring that the specified key is a part of. When the  header is not specified, Key Protect
     *  will perform a key ring lookup. For  a more optimized request, specify the key ring on every call. The key ring
     *  ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
     */
    xKmsKeyRing?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `rewrapKey` operation. */
  export interface RewrapKeyParams {
    /** The v4 UUID that uniquely identifies the key. */
    id: string;
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The base request for rewrap key action. */
    keyActionRewrapBody: NodeJS.ReadableStream|Buffer;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The ID of the key ring that the specified key is a part of. When the  header is not specified, Key Protect
     *  will perform a key ring lookup. For  a more optimized request, specify the key ring on every call. The key ring
     *  ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
     */
    xKmsKeyRing?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `rotateKey` operation. */
  export interface RotateKeyParams {
    /** The v4 UUID that uniquely identifies the key. */
    id: string;
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The base request for rotate key action. */
    keyActionRotateBody?: NodeJS.ReadableStream|Buffer;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The ID of the key ring that the specified key is a part of. When the  header is not specified, Key Protect
     *  will perform a key ring lookup. For  a more optimized request, specify the key ring on every call. The key ring
     *  ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
     */
    xKmsKeyRing?: string;
    /** Alters server behavior for POST or DELETE operations. A header with
     *  `return=minimal` causes the service to return only the key identifier, or metadata. A header containing
     *  `return=representation` returns both the key material and metadata in the response entity-body. If the key has
     *  been designated as a root key, the system cannot return the key material.
     *
     *  **Note:** During POST operations, Key Protect may not immediately return the key material due to key generation
     *  time. To retrieve the key material, you can perform a subsequent `GET /keys/{id}` request.
     */
    prefer?: RotateKeyConstants.Prefer | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `rotateKey` operation. */
  export namespace RotateKeyConstants {
    /** Alters server behavior for POST or DELETE operations. A header with `return=minimal` causes the service to return only the key identifier, or metadata. A header containing `return=representation` returns both the key material and metadata in the response entity-body. If the key has been designated as a root key, the system cannot return the key material. **Note:** During POST operations, Key Protect may not immediately return the key material due to key generation time. To retrieve the key material, you can perform a subsequent `GET /keys/{id}` request. */
    export enum Prefer {
      RETURN_REPRESENTATION = 'return=representation',
      RETURN_MINIMAL = 'return=minimal',
    }
  }

  /** Parameters for the `setKeyForDeletion` operation. */
  export interface SetKeyForDeletionParams {
    /** The v4 UUID that uniquely identifies the key. */
    id: string;
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The ID of the key ring that the specified key is a part of. When the  header is not specified, Key Protect
     *  will perform a key ring lookup. For  a more optimized request, specify the key ring on every call. The key ring
     *  ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
     */
    xKmsKeyRing?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `unsetKeyForDeletion` operation. */
  export interface UnsetKeyForDeletionParams {
    /** The v4 UUID that uniquely identifies the key. */
    id: string;
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The ID of the key ring that the specified key is a part of. When the  header is not specified, Key Protect
     *  will perform a key ring lookup. For  a more optimized request, specify the key ring on every call. The key ring
     *  ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
     */
    xKmsKeyRing?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `enableKey` operation. */
  export interface EnableKeyParams {
    /** The v4 UUID that uniquely identifies the key. */
    id: string;
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The ID of the key ring that the specified key is a part of. When the  header is not specified, Key Protect
     *  will perform a key ring lookup. For  a more optimized request, specify the key ring on every call. The key ring
     *  ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
     */
    xKmsKeyRing?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `disableKey` operation. */
  export interface DisableKeyParams {
    /** The v4 UUID that uniquely identifies the key. */
    id: string;
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The ID of the key ring that the specified key is a part of. When the  header is not specified, Key Protect
     *  will perform a key ring lookup. For  a more optimized request, specify the key ring on every call. The key ring
     *  ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
     */
    xKmsKeyRing?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `syncAssociatedResources` operation. */
  export interface SyncAssociatedResourcesParams {
    /** The v4 UUID that uniquely identifies the key. */
    id: string;
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The ID of the key ring that the specified key is a part of. When the  header is not specified, Key Protect
     *  will perform a key ring lookup. For  a more optimized request, specify the key ring on every call. The key ring
     *  ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
     */
    xKmsKeyRing?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listKeyRings` operation. */
  export interface ListKeyRingsParams {
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createKeyRing` operation. */
  export interface CreateKeyRingParams {
    /** The ID that identifies the key ring. Each ID is unique only within the given instance and is not reserved
     *  across the Key Protect service.
     */
    keyRingId: string;
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteKeyRing` operation. */
  export interface DeleteKeyRingParams {
    /** The ID that identifies the key ring. Each ID is unique only within the given instance and is not reserved
     *  across the Key Protect service.
     */
    keyRingId: string;
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getKeyCollectionMetadata` operation. */
  export interface GetKeyCollectionMetadataParams {
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The state of the keys to be retrieved. States must be a list of integers from 0 to 5 delimited by commas
     *  with no whitespace or trailing commas. Valid states are based on NIST SP 800-57. States are integers and
     *  correspond to the Pre-activation = 0, Active = 1, Suspended = 2, Deactivated = 3, and Destroyed = 5 values.
     *
     *  **Usage:** If you want to retrieve active and deleted keys, use
     *  `../keys?state=1,5`.
     */
    state?: number[];
    /** The type of keys to be retrieved. Filters keys based on the
     *  `extractable` property. You can use this query parameter to search for keys whose material can leave the
     *  service. If set to `true`, standard keys will be retrieved. If set to `false`, root keys will be retrieved. If
     *  omitted, both root and standard keys will be retrieved.
     *
     *  **Usage:** If you want to retrieve standard keys, use
     *  `../keys?extractable=true`.
     */
    extractable?: boolean;
    /** The ID of the target key ring. If unspecified, all resources in the instance that the caller has access to
     *  will be returned. When the header  is specified, only resources within the specified key ring, that the caller
     *  has access to,  will be returned. The key ring ID of keys that are created without an `X-Kms-Key-Ring` header
     *  is: `default`.
     */
    xKmsKeyRing?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createKey` operation. */
  export interface CreateKeyParams {
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The base request for creating a new key. */
    body: NodeJS.ReadableStream|Buffer;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** Alters server behavior for POST or DELETE operations. A header with
     *  `return=minimal` causes the service to return only the key identifier, or metadata. A header containing
     *  `return=representation` returns both the key material and metadata in the response entity-body. If the key has
     *  been designated as a root key, the system cannot return the key material.
     *
     *  **Note:** During POST operations, Key Protect may not immediately return the key material due to key generation
     *  time. To retrieve the key material, you can perform a subsequent `GET /keys/{id}` request.
     */
    prefer?: CreateKeyConstants.Prefer | string;
    /** The ID of the key ring that the specified key belongs to. When the header is not specified,  Key Protect
     *  will perform a key ring lookup. For a more optimized request,  specify the key ring on every call. The key ring
     *  ID of keys that are created without an  `X-Kms-Key-Ring` header is: `default`.
     */
    xKmsKeyRing?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `createKey` operation. */
  export namespace CreateKeyConstants {
    /** Alters server behavior for POST or DELETE operations. A header with `return=minimal` causes the service to return only the key identifier, or metadata. A header containing `return=representation` returns both the key material and metadata in the response entity-body. If the key has been designated as a root key, the system cannot return the key material. **Note:** During POST operations, Key Protect may not immediately return the key material due to key generation time. To retrieve the key material, you can perform a subsequent `GET /keys/{id}` request. */
    export enum Prefer {
      RETURN_REPRESENTATION = 'return=representation',
      RETURN_MINIMAL = 'return=minimal',
    }
  }

  /** Parameters for the `getKeys` operation. */
  export interface GetKeysParams {
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The number of keys to retrieve. By default, `GET /keys` returns the first 200 keys. To retrieve a different
     *  set of keys, use `limit` with
     *  `offset` to page through your available resources. The maximum value for
     *  `limit` is 5,000.
     *
     *  **Usage:** If you have 20 keys in your instance, and you want to retrieve only the first 5 keys, use
     *  `../keys?limit=5`.
     */
    limit?: number;
    /** The number of keys to skip. By specifying `offset`, you retrieve a subset of keys that starts with the
     *  `offset` value. Use `offset` with
     *  `limit` to page through your available resources.
     *
     *  **Usage:** If you have 100 keys in your instance, and you want to retrieve keys 26 through 50, use
     *  `../keys?offset=25&limit=25`.
     */
    offset?: number;
    /** The state of the keys to be retrieved. States must be a list of integers from 0 to 5 delimited by commas
     *  with no whitespace or trailing commas. Valid states are based on NIST SP 800-57. States are integers and
     *  correspond to the Pre-activation = 0, Active = 1, Suspended = 2, Deactivated = 3, and Destroyed = 5 values.
     *
     *  **Usage:** If you want to retrieve active and deleted keys, use
     *  `../keys?state=1,5`.
     */
    state?: number[];
    /** The type of keys to be retrieved. Filters keys based on the
     *  `extractable` property. You can use this query parameter to search for keys whose material can leave the
     *  service. If set to `true`, standard keys will be retrieved. If set to `false`, root keys will be retrieved. If
     *  omitted, both root and standard keys will be retrieved.
     *
     *  **Usage:** If you want to retrieve standard keys, use
     *  `../keys?extractable=true`.
     */
    extractable?: boolean;
    /** The ID of the target key ring. If unspecified, all resources in the instance that the caller has access to
     *  will be returned. When the header  is specified, only resources within the specified key ring, that the caller
     *  has access to,  will be returned. The key ring ID of keys that are created without an `X-Kms-Key-Ring` header
     *  is: `default`.
     */
    xKmsKeyRing?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getKey` operation. */
  export interface GetKeyParams {
    /** The v4 UUID or alias that uniquely identifies the key. */
    id: string;
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The ID of the key ring that the specified key is a part of. When the  header is not specified, Key Protect
     *  will perform a key ring lookup. For  a more optimized request, specify the key ring on every call. The key ring
     *  ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
     */
    xKmsKeyRing?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `patchKey` operation. */
  export interface PatchKeyParams {
    /** The v4 UUID that uniquely identifies the key. */
    id: string;
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The base request for patch key. */
    keyPatchBody?: NodeJS.ReadableStream|Buffer;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The ID of the key ring that the specified key is a part of. When the  header is not specified, Key Protect
     *  will perform a key ring lookup. For  a more optimized request, specify the key ring on every call. The key ring
     *  ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
     */
    xKmsKeyRing?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteKey` operation. */
  export interface DeleteKeyParams {
    /** The v4 UUID that uniquely identifies the key. */
    id: string;
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The ID of the key ring that the specified key is a part of. When the  header is not specified, Key Protect
     *  will perform a key ring lookup. For  a more optimized request, specify the key ring on every call. The key ring
     *  ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
     */
    xKmsKeyRing?: string;
    /** Alters server behavior for POST or DELETE operations. A header with
     *  `return=minimal` causes the service to return only the key identifier, or metadata. A header containing
     *  `return=representation` returns both the key material and metadata in the response entity-body. If the key has
     *  been designated as a root key, the system cannot return the key material.
     *
     *  **Note:** During POST operations, Key Protect may not immediately return the key material due to key generation
     *  time. To retrieve the key material, you can perform a subsequent `GET /keys/{id}` request.
     */
    prefer?: DeleteKeyConstants.Prefer | string;
    /** If set to `true`, Key Protect forces deletion on a key that is protecting a cloud resource, such as a Cloud
     *  Object Storage bucket. The action removes any registrations that are associated with the key.
     *
     *  **Note:** If a key is protecting a cloud resource that has a retention policy, Key Protect cannot delete the
     *  key. Use
     *  `GET keys/{id}/registrations` to review registrations between the key and its associated cloud resources. To
     *  enable deletion, contact an account owner to remove the retention policy on each resource that is associated
     *  with this key.
     */
    force?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `deleteKey` operation. */
  export namespace DeleteKeyConstants {
    /** Alters server behavior for POST or DELETE operations. A header with `return=minimal` causes the service to return only the key identifier, or metadata. A header containing `return=representation` returns both the key material and metadata in the response entity-body. If the key has been designated as a root key, the system cannot return the key material. **Note:** During POST operations, Key Protect may not immediately return the key material due to key generation time. To retrieve the key material, you can perform a subsequent `GET /keys/{id}` request. */
    export enum Prefer {
      RETURN_REPRESENTATION = 'return=representation',
      RETURN_MINIMAL = 'return=minimal',
    }
  }

  /** Parameters for the `getKeyMetadata` operation. */
  export interface GetKeyMetadataParams {
    /** The v4 UUID or alias that uniquely identifies the key. */
    id: string;
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The ID of the key ring that the specified key is a part of. When the  header is not specified, Key Protect
     *  will perform a key ring lookup. For  a more optimized request, specify the key ring on every call. The key ring
     *  ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
     */
    xKmsKeyRing?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `purgeKey` operation. */
  export interface PurgeKeyParams {
    /** The v4 UUID that uniquely identifies the key. */
    id: string;
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The ID of the key ring that the specified key is a part of. When the  header is not specified, Key Protect
     *  will perform a key ring lookup. For  a more optimized request, specify the key ring on every call. The key ring
     *  ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
     */
    xKmsKeyRing?: string;
    /** Alters server behavior for POST or DELETE operations. A header with
     *  `return=minimal` causes the service to return only the key identifier, or metadata. A header containing
     *  `return=representation` returns both the key material and metadata in the response entity-body. If the key has
     *  been designated as a root key, the system cannot return the key material.
     *
     *  **Note:** During POST operations, Key Protect may not immediately return the key material due to key generation
     *  time. To retrieve the key material, you can perform a subsequent `GET /keys/{id}` request.
     */
    prefer?: PurgeKeyConstants.Prefer | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `purgeKey` operation. */
  export namespace PurgeKeyConstants {
    /** Alters server behavior for POST or DELETE operations. A header with `return=minimal` causes the service to return only the key identifier, or metadata. A header containing `return=representation` returns both the key material and metadata in the response entity-body. If the key has been designated as a root key, the system cannot return the key material. **Note:** During POST operations, Key Protect may not immediately return the key material due to key generation time. To retrieve the key material, you can perform a subsequent `GET /keys/{id}` request. */
    export enum Prefer {
      RETURN_REPRESENTATION = 'return=representation',
      RETURN_MINIMAL = 'return=minimal',
    }
  }

  /** Parameters for the `restoreKey` operation. */
  export interface RestoreKeyParams {
    /** The v4 UUID that uniquely identifies the key. */
    id: string;
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The base request parameters for restore key action. */
    keyRestoreBody?: NodeJS.ReadableStream|Buffer;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The ID of the key ring that the specified key is a part of. When the  header is not specified, Key Protect
     *  will perform a key ring lookup. For  a more optimized request, specify the key ring on every call. The key ring
     *  ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
     */
    xKmsKeyRing?: string;
    /** Alters server behavior for POST or DELETE operations. A header with
     *  `return=minimal` causes the service to return only the key identifier, or metadata. A header containing
     *  `return=representation` returns both the key material and metadata in the response entity-body. If the key has
     *  been designated as a root key, the system cannot return the key material.
     *
     *  **Note:** During POST operations, Key Protect may not immediately return the key material due to key generation
     *  time. To retrieve the key material, you can perform a subsequent `GET /keys/{id}` request.
     */
    prefer?: RestoreKeyConstants.Prefer | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `restoreKey` operation. */
  export namespace RestoreKeyConstants {
    /** Alters server behavior for POST or DELETE operations. A header with `return=minimal` causes the service to return only the key identifier, or metadata. A header containing `return=representation` returns both the key material and metadata in the response entity-body. If the key has been designated as a root key, the system cannot return the key material. **Note:** During POST operations, Key Protect may not immediately return the key material due to key generation time. To retrieve the key material, you can perform a subsequent `GET /keys/{id}` request. */
    export enum Prefer {
      RETURN_REPRESENTATION = 'return=representation',
      RETURN_MINIMAL = 'return=minimal',
    }
  }

  /** Parameters for the `getKeyVersions` operation. */
  export interface GetKeyVersionsParams {
    /** The v4 UUID that uniquely identifies the key. */
    id: string;
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The ID of the key ring that the specified key is a part of. When the  header is not specified, Key Protect
     *  will perform a key ring lookup. For  a more optimized request, specify the key ring on every call. The key ring
     *  ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
     */
    xKmsKeyRing?: string;
    /** The number of key versions to retrieve. By default, `GET /versions` returns the first 200 key versions. To
     *  retrieve a different set of key versions, use `limit` with `offset` to page through your available resources.
     *  The maximum value for `limit` is 5,000.
     *
     *  **Usage:** If you have a key with 20 versions in your instance, and you want to retrieve only the first 5
     *  versions, use `../versions?limit=5`.
     */
    limit?: number;
    /** The number of key versions to skip. By specifying `offset`, you retrieve a subset of key versions that
     *  starts with the `offset` value. Use
     *  `offset` with `limit` to page through your available resources.
     *
     *  **Usage:** If you have a key with 100 versions in your instance, and you want to retrieve versions 26 through
     *  50, use
     *  `../versions?offset=25&limit=25`.
     */
    offset?: number;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `putPolicy` operation. */
  export interface PutPolicyParams {
    /** The v4 UUID that uniquely identifies the key. */
    id: string;
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The base request for key policy create or update. */
    setKeyPoliciesOneOf: SetKeyPoliciesOneOf;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The ID of the key ring that the specified key is a part of. When the  header is not specified, Key Protect
     *  will perform a key ring lookup. For  a more optimized request, specify the key ring on every call. The key ring
     *  ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
     */
    xKmsKeyRing?: string;
    /** The type of policy that is associated with the specified key. */
    policy?: PutPolicyConstants.Policy | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `putPolicy` operation. */
  export namespace PutPolicyConstants {
    /** The type of policy that is associated with the specified key. */
    export enum Policy {
      DUALAUTHDELETE = 'dualAuthDelete',
      ROTATION = 'rotation',
    }
  }

  /** Parameters for the `getPolicy` operation. */
  export interface GetPolicyParams {
    /** The v4 UUID that uniquely identifies the key. */
    id: string;
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The ID of the key ring that the specified key is a part of. When the  header is not specified, Key Protect
     *  will perform a key ring lookup. For  a more optimized request, specify the key ring on every call. The key ring
     *  ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
     */
    xKmsKeyRing?: string;
    /** The type of policy that is associated with the specified key. */
    policy?: GetPolicyConstants.Policy | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `getPolicy` operation. */
  export namespace GetPolicyConstants {
    /** The type of policy that is associated with the specified key. */
    export enum Policy {
      DUALAUTHDELETE = 'dualAuthDelete',
      ROTATION = 'rotation',
    }
  }

  /** Parameters for the `putInstancePolicy` operation. */
  export interface PutInstancePolicyParams {
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The base request for the create or update of instance level policies. */
    setInstancePoliciesOneOf: SetInstancePoliciesOneOf;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The type of policy that is associated with the specified instance. */
    policy?: PutInstancePolicyConstants.Policy | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `putInstancePolicy` operation. */
  export namespace PutInstancePolicyConstants {
    /** The type of policy that is associated with the specified instance. */
    export enum Policy {
      ALLOWEDNETWORK = 'allowedNetwork',
      DUALAUTHDELETE = 'dualAuthDelete',
      ALLOWEDIP = 'allowedIP',
      KEYCREATEIMPORTACCESS = 'keyCreateImportAccess',
      METRICS = 'metrics',
    }
  }

  /** Parameters for the `getInstancePolicy` operation. */
  export interface GetInstancePolicyParams {
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The type of policy that is associated with the specified instance. */
    policy?: GetInstancePolicyConstants.Policy | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `getInstancePolicy` operation. */
  export namespace GetInstancePolicyConstants {
    /** The type of policy that is associated with the specified instance. */
    export enum Policy {
      ALLOWEDNETWORK = 'allowedNetwork',
      DUALAUTHDELETE = 'dualAuthDelete',
      ALLOWEDIP = 'allowedIP',
      KEYCREATEIMPORTACCESS = 'keyCreateImportAccess',
      METRICS = 'metrics',
    }
  }

  /** Parameters for the `getAllowedIpPort` operation. */
  export interface GetAllowedIpPortParams {
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getRegistrations` operation. */
  export interface GetRegistrationsParams {
    /** The v4 UUID that uniquely identifies the key. */
    id: string;
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The ID of the key ring that the specified key is a part of. When the  header is not specified, Key Protect
     *  will perform a key ring lookup. For  a more optimized request, specify the key ring on every call. The key ring
     *  ID of keys that are created without an `X-Kms-Key-Ring` header is: `default`.
     */
    xKmsKeyRing?: string;
    /** The number of registrations to retrieve. By default returns the first 200 registrations. To retrieve a
     *  different set of registrations, use
     *  `limit` with `offset` to page through your available resources. The maximum value for `limit` is 5,000.
     *
     *  **Usage:** If you have 20 registrations that are associated with a key, and you want to retrieve only the first
     *  5 registrations, use
     *  `../registrations?limit=5`.
     */
    limit?: number;
    /** The number of registrations to skip. By specifying `offset`, you retrieve a subset of registrations that
     *  starts with the `offset` value. Use `offset` with `limit` to page through your available resources.
     *
     *  **Usage:** If you have 100 registrations that are associated with a key, and you want to retrieve registrations
     *  26 through 50, use
     *  `../registrations?offset=25&limit=25`.
     */
    offset?: number;
    /** Filters for resources that are associated with a specified
     *  [Cloud Resource Name](/docs/account?topic=account-crn)
     *  (CRN) by using URL encoded wildcard characters (`*`). The parameter should contain all CRN segments and must be
     *  URL encoded. Supports a prefix search when you specify `*` on the last CRN segment.
     *
     *  **Usage:** To list registrations that are associated with all resources in `<service-instance>`, use a URL
     *  encoded version of the following string:
     *  `crn:v1:bluemix:public:<service-name>:<location>:a/<account>:<service-instance>:*:*`. To search for
     *  subresources, use the following CRN format:
     *  `crn:v1:bluemix:public:<service-name>:<location>:a/<account>:<service-instance>:<resource-type>:<resource>/<subresource>`.
     *
     *  For more examples, see
     *  [CRN query examples](/docs/key-protect?topic=key-protect-view-protected-resources#crn-query-examples).
     */
    urlEncodedResourceCrnQuery?: string;
    /** Filters registrations based on the `preventKeyDeletion` property. You can use this query parameter to search
     *  for registered cloud resources that are non-erasable due to a retention policy.
     *
     *  **Usage:** To search for registered cloud resources that have a retention policy, use
     *  `../registrations?preventKeyDeletion=true`.
     */
    preventKeyDeletion?: boolean;
    /** If set to `true`, returns `totalCount` in the response metadata for use with pagination. The `totalCount`
     *  value returned specifies the total number of registrations that match the request, disregarding limit and
     *  offset.
     *
     *  **Usage:** To return the `totalCount` value for use with pagination, use
     *  `../registrations?totalCount=true`.
     */
    totalCount?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getRegistrationsAllKeys` operation. */
  export interface GetRegistrationsAllKeysParams {
    /** The IBM Cloud instance ID that identifies your Key Protect service instance. */
    bluemixInstance: string;
    /** The v4 UUID used to correlate and track transactions. */
    correlationId?: string;
    /** The ID of the target key ring. If unspecified, all resources in the instance that the caller has access to
     *  will be returned. When the header  is specified, only resources within the specified key ring, that the caller
     *  has access to,  will be returned. The key ring ID of keys that are created without an `X-Kms-Key-Ring` header
     *  is: `default`.
     */
    xKmsKeyRing?: string;
    /** Filters for resources that are associated with a specified
     *  [Cloud Resource Name](/docs/account?topic=account-crn)
     *  (CRN) by using URL encoded wildcard characters (`*`). The parameter should contain all CRN segments and must be
     *  URL encoded.
     *
     *  If provided, the parameter should not contain (`*`) in the first eight segments. If this parameter is not
     *  provided, registrations for all keys in the requested Key Protect instance are returned.
     */
    urlEncodedResourceCrnQuery?: string;
    /** The number of registrations to retrieve. By default returns the first 200 registrations. To retrieve a
     *  different set of registrations, use
     *  `limit` with `offset` to page through your available resources. The maximum value for `limit` is 5,000.
     *
     *  **Usage:** If you have 20 registrations that are associated with a key, and you want to retrieve only the first
     *  5 registrations, use
     *  `../registrations?limit=5`.
     */
    limit?: number;
    /** The number of registrations to skip. By specifying `offset`, you retrieve a subset of registrations that
     *  starts with the `offset` value. Use `offset` with `limit` to page through your available resources.
     *
     *  **Usage:** If you have 100 registrations that are associated with a key, and you want to retrieve registrations
     *  26 through 50, use
     *  `../registrations?offset=25&limit=25`.
     */
    offset?: number;
    /** Filters registrations based on the `preventKeyDeletion` property. You can use this query parameter to search
     *  for registered cloud resources that are non-erasable due to a retention policy.
     *
     *  **Usage:** To search for registered cloud resources that have a retention policy, use
     *  `../registrations?preventKeyDeletion=true`.
     */
    preventKeyDeletion?: boolean;
    /** If set to `true`, returns `totalCount` in the response metadata for use with pagination. The `totalCount`
     *  value returned specifies the total number of registrations that match the request, disregarding limit and
     *  offset.
     *
     *  **Usage:** To return the `totalCount` value for use with pagination, use
     *  `../registrations?totalCount=true`.
     */
    totalCount?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /*************************
   * model interfaces
   ************************/

  /** Properties associated with the port associated with an instance with an allowed IP policy. */
  export interface AllowedIPPort {
    /** The metadata that describes the resource array. */
    metadata?: CollectionMetadata;
    /** A collection of resources. */
    resources?: AllowedIPPortResource[];
  }

  /** Metadata of the port associated with an instance with an allowed IP policy. */
  export interface AllowedIPPortResource {
    /** The port required to access an instance with an allowed IP policy via the Key Protect private service
     *  endpoint. Cannot be used with the Key Protect public service endpoint.
     *
     *  Please visit
     *  [Accessing an instance via private
     *  endpoint](/docs/key-protect?topic=key-protect-manage-allowed-ip#access-allowed-ip-private-endpoint) for
     *  instructions on how to use the `private_endpoint_port` value.
     */
    private_endpoint_port: number;
  }

  /** Data associated with the policy type `allowedIP`. */
  export interface AllowedIPProperties {
    /** A string array of IPv4 or IPv6 CIDR notated subnets that are authorized to interact with the instance. If
     *  both `allowedNetwork` and `allowedIP` policies are set, only traffic aligning with both the `allowed_network`
     *  allowed network policy attribute and the
     *  `allowed_ip` allowed IP policy attribute will be allowed.
     *
     *  IPv4 and iIP6 addresses are accepted for public endpoints. Only the IPv4 private network gateway addresses from
     *  the array will be authorized to access your instance via private endpoint.
     *
     *  **Important:** Once set, accessing your instance may require additional steps. Please visit
     *  [Accessing an instance via public
     *  endpoint](/docs/key-protect?topic=key-protect-manage-allowed-ip#access-allowed-ip-public-endpoint) and
     *  [Accessing an instance via private
     *  endpoint](/docs/key-protect?topic=key-protect-manage-allowed-ip#access-allowed-ip-private-endpoint) for more
     *  details.
     *
     *  **Note:** An allowed IP policy does not affect requests from other IBM Cloud services.
     */
    allowed_ip?: string[];
  }

  /** The object that contains information about the Cloud Resource Name. */
  export interface CloudResourceName {
    /** The [Cloud Resource Name](/docs/account?topic=account-crn) (CRN) that uniquely identifies your cloud
     *  resources.
     */
    resourceCrn?: string;
  }

  /** The metadata that describes the resource array. */
  export interface CollectionMetadata {
    /** The type of resources in the resource array. */
    collectionType: string;
    /** The number of elements in the resource array. */
    collectionTotal: number;
  }

  /** The metadata that describes the resource array. */
  export interface CollectionMetadataWithTotalCount {
    /** The type of resources in the resource array. */
    collectionType: string;
    /** The number of elements in the resource array. */
    collectionTotal: number;
    /** The total number of registrations that match the request, disregarding limit and offset. */
    totalCount?: number;
  }

  /** The base schema for the resource in the body of a create registration. */
  export interface CreateRegistrationResourceBody {
    /** A boolean that determines whether Key Protect must prevent deletion of a root key.
     *
     *  If set to `true`, Key Protect prevents deletion of the specified root key and its associated protected
     *  resources. The system prevents the deletion of any key that has at least one registration where
     *  `preventKeyDeletion` is `true`.
     */
    preventKeyDeletion?: boolean;
    /** A text field that cloud services can use to store external metadata about the registration. This field is
     *  exposed to customers when they review registered resources using GET /registrations.
     */
    description?: string;
    /** A text field that cloud services can use to store internal metadata about the registration. This field is
     *  not exposed to customers and is visible only with IBM Cloud service to service calls.
     */
    registrationMetadata?: string;
  }

  /** The base schema for deleting keys. */
  export interface DeleteKey {
    /** The metadata that describes the resource array. */
    metadata: CollectionMetadata;
    /** A collection of resources. */
    resources: KeyWithPayload[];
  }

  /** User defined metadata that is associated with the `dualAuthDelete` instance policy type. */
  export interface DualAuthDeleteProperties {
    /** If set to `true`, Key Protect enables a dual authorization deletion policy for your service instance.
     *
     *  By default, Key Protect requires only one authorization to delete a key. After you enable a dual authorization
     *  policy, any new key that you create or add to the instance will require an authorization from two users to
     *  delete keys.
     *
     *  **Note:** This change does not affect existing keys in your instance.
     */
    enabled: boolean;
  }

  /** Metadata that indicates the status of a dual authorization policy on the key. */
  export interface DualAuthKeyMetadata {
    /** The status of a dual authorization policy on the key.
     *
     *  If `true`, dual authorization is required to delete the key. If
     *  `false`, no prior authorization is required to delete the key.
     */
    enabled: boolean;
    /** Indicates if a delete authorization has been issued for a key.
     *
     *  If `true`, an authorization to delete this key has been issued by the first user, and a second user with a
     *  Manager access policy can safely delete the key. If the `enabled` property is `false`, this field is omitted in
     *  the response body.
     */
    keySetForDeletion?: boolean;
    /** The date that an authorization for deletion expires for the key. If this date has passed, the authorization
     *  is no longer valid. If the `enabled` or `keySetForDeletion` properties are `false`, this field is omitted in the
     *  response body.
     */
    authExpiration?: string;
  }

  /** The base schema for retrieving an import token. */
  export interface GetImportToken {
    /** The time in seconds from the creation of an import token that determines how long its associated public key
     *  remains valid.
     *
     *  The minimum value is `300` seconds (5 minutes), and the maximum value is `86400` (24 hours). The default value
     *  is `600`
     *  (10 minutes).
     */
    expiration?: number;
    /** The number of times that an import token can be retrieved within its expiration time before it is no longer
     *  accessible.
     */
    maxAllowedRetrievals?: number;
    /** The date the import token was created. The date format follows RFC 3339. */
    creationDate?: string;
    /** The date the import token expires. The date format follows RFC 3339. */
    expirationDate?: string;
    /** The number of retrievals that are available for the import token before it is no longer accessible. */
    remainingRetrievals?: number;
    /** The public encryption key that you can use to encrypt key material before you import it into the service.
     *
     *  This value is a PEM-encoded public key in PKIX format. Because PEM encoding is a byte format, the value is
     *  base64 encoded.
     */
    payload?: string;
    /** The nonce value that is used to verify a key import request. Encrypt and provide the encrypted nonce value
     *  when you use `POST /keys` to securely import a key to the service.
     */
    nonce?: string;
  }

  /** GetInstancePoliciesOneOf. */
  export interface GetInstancePoliciesOneOf {
  }

  /** GetInstancePoliciesOneOfGetInstancePolicyAllowedNetworkResourcesItem. */
  export interface GetInstancePoliciesOneOfGetInstancePolicyAllowedNetworkResourcesItem {
    /** The date the policy was created. The date format follows RFC 3339. */
    creationDate: string;
    /** The unique identifier for the resource that created the policy. */
    createdBy: string;
    /** The unique identifier for the resource that updated the policy. */
    updatedBy?: string;
    /** Updates when the policy is replaced or modified. The date format follows RFC 3339. */
    lastUpdated?: string;
    /** The type of policy to be retrieved. */
    policy_type: string;
    /** User defined metadata that is associated with the `allowedNetwork` instance policy type. */
    policy_data: GetInstancePoliciesOneOfGetInstancePolicyAllowedNetworkResourcesItemPolicyData;
  }

  /** User defined metadata that is associated with the `allowedNetwork` instance policy type. */
  export interface GetInstancePoliciesOneOfGetInstancePolicyAllowedNetworkResourcesItemPolicyData {
    /** If set to `true`, Key Protect enables the specified policy for your service instance. If set to `false`, Key
     *  Protect disables the specified policy for your service instance, and the policy will no longer affect Key
     *  Protect actions.
     *
     *  **Note:** If a policy with attributes is disabled, all attributes are reset and are not retained.
     */
    enabled: boolean;
    /** Data associated with the policy type `allowed_network`. */
    attributes?: GetInstancePoliciesOneOfGetInstancePolicyAllowedNetworkResourcesItemPolicyDataAttributes;
  }

  /** Data associated with the policy type `allowed_network`. */
  export interface GetInstancePoliciesOneOfGetInstancePolicyAllowedNetworkResourcesItemPolicyDataAttributes {
    /** If set to `public-and-private`, Key Protect allows the instance to be accessible through public and private
     *  endpoints. If set to `private-only`, Key Protect restricts the instance to only be accessible through a private
     *  endpoint.
     */
    allowed_network: string;
  }

  /** GetInstancePoliciesOneOfGetInstancePolicyKeyCreateImportAccessResourcesItem. */
  export interface GetInstancePoliciesOneOfGetInstancePolicyKeyCreateImportAccessResourcesItem {
    /** The date the policy was created. The date format follows RFC 3339. */
    creationDate: string;
    /** The unique identifier for the resource that created the policy. */
    createdBy: string;
    /** The unique identifier for the resource that updated the policy. */
    updatedBy?: string;
    /** Updates when the policy is replaced or modified. The date format follows RFC 3339. */
    lastUpdated?: string;
    /** The type of policy to be retrieved. */
    policy_type: string;
    /** User defined metadata that is associated with the `keyCreateImportAccess` instance policy type. */
    policy_data: GetInstancePoliciesOneOfGetInstancePolicyKeyCreateImportAccessResourcesItemPolicyData;
  }

  /** User defined metadata that is associated with the `keyCreateImportAccess` instance policy type. */
  export interface GetInstancePoliciesOneOfGetInstancePolicyKeyCreateImportAccessResourcesItemPolicyData {
    /** If set to `true`, Key Protect enables the specified policy for your service instance. If set to `false`, Key
     *  Protect disables the specified policy for your service instance, and the policy will no longer affect Key
     *  Protect actions.
     *
     *  **Note:** If a policy with attributes is disabled, all attributes are reset and are not retained.
     */
    enabled: boolean;
    /** Data associated with the policy type `keyCreateImportAccess`. */
    attributes?: GetInstancePoliciesOneOfGetInstancePolicyKeyCreateImportAccessResourcesItemPolicyDataAttributes;
  }

  /** Data associated with the policy type `keyCreateImportAccess`. */
  export interface GetInstancePoliciesOneOfGetInstancePolicyKeyCreateImportAccessResourcesItemPolicyDataAttributes {
    /** If set to `false`, the service prevents you or any authorized users from using Key Protect to create root
     *  keys in the specified service instance. If set to `true`, Key Protect allows you or any authorized users to
     *  create root keys in the instance.
     *
     *  **Note:** If omitted, `POST /instance/policies` will set this attribute to the default value (`true`).
     */
    create_root_key: boolean;
    /** If set to `false`, the service prevents you or any authorized users from using Key Protect to create
     *  standard keys in the specified service instance. If set to `true`, Key Protect allows you or any authorized
     *  users to create standard keys in the instance.
     *
     *  **Note:** If omitted, `POST /instance/policies` will set this attribute to the default value (`true`).
     */
    create_standard_key: boolean;
    /** If set to `false`, the service prevents you or any authorized users from importing root keys into the
     *  specified service instance. If set to `true`, Key Protect allows you or any authorized users to import root keys
     *  into the instance.
     *
     *  **Note:** If omitted, `POST /instance/policies` will set this attribute to the default value (`true`).
     */
    import_root_key: boolean;
    /** If set to `false`, the service prevents you or any authorized users from importing standard keys into the
     *  specified service instance. If set to `true`, Key Protect allows you or any authorized users to import standard
     *  keys into the instance.
     *
     *  **Note:** If omitted, `POST /instance/policies` will set this attribute to the default value (`true`).
     */
    import_standard_key: boolean;
    /** If set to `true`, the service prevents you or any authorized users from importing key material into the
     *  specified service instance without using an import token. If set to `false`, Key Protect allows you or any
     *  authorized users to import key material into the instance without the use of an import token.
     *
     *  **Note:** If omitted, `POST /instance/policies` will set this attribute to the default value (`false`).
     */
    enforce_token: boolean;
  }

  /** GetInstancePolicyAllowedIPResourcesItem. */
  export interface GetInstancePolicyAllowedIPResourcesItem {
    /** The date the policy was created. The date format follows RFC 3339. */
    creationDate: string;
    /** The unique identifier for the resource that created the policy. */
    createdBy: string;
    /** The unique identifier for the resource that updated the policy. */
    updatedBy?: string;
    /** Updates when the policy is replaced or modified. The date format follows RFC 3339. */
    lastUpdated?: string;
    /** The type of policy to be retrieved. */
    policy_type: string;
    /** User defined metadata that is associated with the `allowedIP` instance policy type. */
    policy_data: GetInstancePolicyAllowedIPResourcesItemPolicyData;
  }

  /** User defined metadata that is associated with the `allowedIP` instance policy type. */
  export interface GetInstancePolicyAllowedIPResourcesItemPolicyData {
    /** If set to `true`, Key Protect enables the specified policy for your service instance. If set to `false`, Key
     *  Protect disables the specified policy for your service instance, and the policy will no longer affect Key
     *  Protect actions.
     *
     *  **Note:** If a policy with attributes is disabled, all attributes are reset and are not retained.
     */
    enabled: boolean;
    /** Data associated with the policy type `allowedIP`. */
    attributes?: GetInstancePolicyAllowedIPResourcesItemPolicyDataAttributes;
  }

  /** Data associated with the policy type `allowedIP`. */
  export interface GetInstancePolicyAllowedIPResourcesItemPolicyDataAttributes {
    /** A string array of IPv4 or IPv6 CIDR notated subnets that are authorized to interact with the instance. If
     *  both `allowedNetwork` and `allowedIP` policies are set, only traffic aligning with both the `allowed_network`
     *  allowed network policy attribute and the
     *  `allowed_ip` allowed IP policy attribute will be allowed.
     *
     *  IPv4 and iIP6 addresses are accepted for public endpoints. Only the IPv4 private network gateway addresses from
     *  the array will be authorized to access your instance via private endpoint.
     *
     *  **Important:** Once set, accessing your instance may require additional steps. Please visit
     *  [Accessing an instance via public
     *  endpoint](/docs/key-protect?topic=key-protect-manage-allowed-ip#access-allowed-ip-public-endpoint) and
     *  [Accessing an instance via private
     *  endpoint](/docs/key-protect?topic=key-protect-manage-allowed-ip#access-allowed-ip-private-endpoint) for more
     *  details.
     *
     *  **Note:** An allowed IP policy does not affect requests from other IBM Cloud services.
     */
    allowed_ip: string[];
  }

  /** GetInstancePolicyDualAuthDeleteResourcesItem. */
  export interface GetInstancePolicyDualAuthDeleteResourcesItem {
    /** The date the policy was created. The date format follows RFC 3339. */
    creationDate: string;
    /** The unique identifier for the resource that created the policy. */
    createdBy: string;
    /** The unique identifier for the resource that updated the policy. */
    updatedBy?: string;
    /** Updates when the policy is replaced or modified. The date format follows RFC 3339. */
    lastUpdated?: string;
    /** The type of policy to be retrieved. */
    policy_type: string;
    /** User defined metadata that is associated with the `dualAuthDelete` instance policy type. */
    policy_data: DualAuthDeleteProperties;
  }

  /** GetInstancePolicyMetricsResourcesItem. */
  export interface GetInstancePolicyMetricsResourcesItem {
    /** The date the policy was created. The date format follows RFC 3339. */
    creationDate: string;
    /** The unique identifier for the resource that created the policy. */
    createdBy: string;
    /** The unique identifier for the resource that updated the policy. */
    updatedBy?: string;
    /** Updates when the policy is replaced or modified. The date format follows RFC 3339. */
    lastUpdated?: string;
    /** The type of policy to be retrieved. */
    policy_type: string;
    /** User defined metadata that is associated with the `metrics` instance policy type. */
    policy_data: MetricsProperties;
  }

  /** The base schema for retrieving keys. */
  export interface GetKey {
    /** The metadata that describes the resource array. */
    metadata: CollectionMetadata;
    /** A collection of resources. */
    resources: KeyWithPayload[];
  }

  /** The base schema for retrieving key metadata. */
  export interface GetKeyMetadata {
    /** The metadata that describes the resource array. */
    metadata: CollectionMetadata;
    /** A collection of resources. */
    resources: KeyFullRepresentation[];
  }

  /** GetKeyPoliciesOneOf. */
  export interface GetKeyPoliciesOneOf {
  }

  /** Properties that are associated with key level dual authorization delete policy. */
  export interface GetKeyPoliciesOneOfGetKeyPolicyDualAuthDeleteResourcesItem {
    /** The v4 UUID used to uniquely identify the policy resource, as specified by RFC 4122. */
    id: string;
    /** The Cloud Resource Name (CRN) that uniquely identifies your cloud. resources. */
    crn?: string;
    /** The date the policy was created. The date format follows RFC 3339. */
    creationDate?: string;
    /** The unique identifier for the resource that created the policy. */
    createdBy?: string;
    /** Updates when the policy is replaced or modified. The date format follows RFC 3339. */
    lastUpdateDate?: string;
    /** The unique identifier for the resource that updated the policy. */
    updatedBy?: string;
    /** Specifies the MIME type that represents the policy resource. Currently, only the default is supported. */
    type: string;
    /** Data associated with the dual authorization delete policy. */
    dualAuthDelete: KeyPolicyDualAuthDeleteDualAuthDelete;
  }

  /** Properties that are associated with rotation policy. */
  export interface GetKeyPolicyRotationResourcesItem {
    /** The v4 UUID used to uniquely identify the policy resource, as specified by RFC 4122. */
    id: string;
    /** The Cloud Resource Name (CRN) that uniquely identifies your cloud. resources. */
    crn?: string;
    /** The date the policy was created. The date format follows RFC 3339. */
    creationDate?: string;
    /** The unique identifier for the resource that created the policy. */
    createdBy?: string;
    /** Updates when the policy is replaced or modified. The date format follows RFC 3339. */
    lastUpdateDate?: string;
    /** The unique identifier for the resource that updated the policy. */
    updatedBy?: string;
    /** Specifies the MIME type that represents the policy resource. Currently, only the default is supported. */
    type: string;
    /** Specifies the key rotation time interval in months, with a minimum of 1, and a maximum of 12. */
    rotation: GetKeyPolicyRotationResourcesItemRotation;
  }

  /** Specifies the key rotation time interval in months, with a minimum of 1, and a maximum of 12. */
  export interface GetKeyPolicyRotationResourcesItemRotation {
    /** Specifies the key rotation time interval in months. */
    interval_month: number;
  }

  /** Properties that are associated with rotation policy. */
  export interface GetMultipleKeyPoliciesResource {
    /** The v4 UUID used to uniquely identify the policy resource, as specified by RFC 4122. */
    id: string;
    /** The Cloud Resource Name (CRN) that uniquely identifies your cloud. resources. */
    crn?: string;
    /** The date the policy was created. The date format follows RFC 3339. */
    creationDate?: string;
    /** The unique identifier for the resource that created the policy. */
    createdBy?: string;
    /** Updates when the policy is replaced or modified. The date format follows RFC 3339. */
    lastUpdateDate?: string;
    /** The unique identifier for the resource that updated the policy. */
    updatedBy?: string;
    /** Specifies the MIME type that represents the policy resource. Currently, only the default is supported. */
    type: string;
    /** Data associated with the dual authorization delete policy. */
    dualAuthDelete?: GetMultipleKeyPoliciesResourceDualAuthDelete;
    /** Specifies the key rotation time interval in months, with a minimum of 1, and a maximum of 12. */
    rotation?: KeyPolicyRotationNonRequiredRotation;
  }

  /** Data associated with the dual authorization delete policy. */
  export interface GetMultipleKeyPoliciesResourceDualAuthDelete {
    /** If set to `true`, Key Protect enables a dual authorization policy on a single key.
     *
     *  After you enable the policy, Key Protect requires an authorization from two users to delete this key. For
     *  example, you can authorize the deletion first by using the
     *  [SetKeyForDeletion](#invoke-an-action-on-a-key) action. Then, a different user provides a second authorization
     *  implicitly by calling `DELETE /keys` to delete the key.
     *
     *  **Note:** Once the dual authorization policy is set on the key, it cannot be reverted.
     */
    enabled: boolean;
  }

  /** Properties that are associated with import tokens. */
  export interface ImportToken {
    /** The time in seconds from the creation of an import token that determines how long its associated public key
     *  remains valid.
     *
     *  The minimum value is `300` seconds (5 minutes), and the maximum value is `86400` (24 hours). The default value
     *  is `600`
     *  (10 minutes).
     */
    expiration?: number;
    /** The number of times that an import token can be retrieved within its expiration time before it is no longer
     *  accessible.
     */
    maxAllowedRetrievals?: number;
    /** The date the import token was created. The date format follows RFC 3339. */
    creationDate?: string;
    /** The date the import token expires. The date format follows RFC 3339. */
    expirationDate?: string;
    /** The number of retrievals that are available for the import token before it is no longer accessible. */
    remainingRetrievals?: number;
  }

  /** All possible attributes for any instance policy type. Must be provided if the `enabled` field is `true`. Cannot be provided if the `enabled` field is `false`. */
  export interface InstancePolicyAllAttributes {
    /** If set to `public-and-private`, Key Protect allows the instance to be accessible through public and private
     *  endpoints. If set to `private-only`, Key Protect restricts the instance to only be accessible through a private
     *  endpoint.
     */
    allowed_network?: string;
    /** A string array of IPv4 or IPv6 CIDR notated subnets that are authorized to interact with the instance. If
     *  both `allowedNetwork` and `allowedIP` policies are set, only traffic aligning with both the `allowed_network`
     *  allowed network policy attribute and the
     *  `allowed_ip` allowed IP policy attribute will be allowed.
     *
     *  IPv4 and iIP6 addresses are accepted for public endpoints. Only the IPv4 private network gateway addresses from
     *  the array will be authorized to access your instance via private endpoint.
     *
     *  **Important:** Once set, accessing your instance may require additional steps. Please visit
     *  [Accessing an instance via public
     *  endpoint](/docs/key-protect?topic=key-protect-manage-allowed-ip#access-allowed-ip-public-endpoint) and
     *  [Accessing an instance via private
     *  endpoint](/docs/key-protect?topic=key-protect-manage-allowed-ip#access-allowed-ip-private-endpoint) for more
     *  details.
     *
     *  **Note:** An allowed IP policy does not affect requests from other IBM Cloud services.
     */
    allowed_ip?: string[];
    /** If set to `false`, the service prevents you or any authorized users from using Key Protect to create root
     *  keys in the specified service instance. If set to `true`, Key Protect allows you or any authorized users to
     *  create root keys in the instance.
     *
     *  **Note:** If omitted, `POST /instance/policies` will set this attribute to the default value (`true`).
     */
    create_root_key?: boolean;
    /** If set to `false`, the service prevents you or any authorized users from using Key Protect to create
     *  standard keys in the specified service instance. If set to `true`, Key Protect allows you or any authorized
     *  users to create standard keys in the instance.
     *
     *  **Note:** If omitted, `POST /instance/policies` will set this attribute to the default value (`true`).
     */
    create_standard_key?: boolean;
    /** If set to `false`, the service prevents you or any authorized users from importing root keys into the
     *  specified service instance. If set to `true`, Key Protect allows you or any authorized users to import root keys
     *  into the instance.
     *
     *  **Note:** If omitted, `POST /instance/policies` will set this attribute to the default value (`true`).
     */
    import_root_key?: boolean;
    /** If set to `false`, the service prevents you or any authorized users from importing standard keys into the
     *  specified service instance. If set to `true`, Key Protect allows you or any authorized users to import standard
     *  keys into the instance.
     *
     *  **Note:** If omitted, `POST /instance/policies` will set this attribute to the default value (`true`).
     */
    import_standard_key?: boolean;
    /** If set to `true`, the service prevents you or any authorized users from importing key material into the
     *  specified service instance without using an import token. If set to `false`, Key Protect allows you or any
     *  authorized users to import key material into the instance without the use of an import token.
     *
     *  **Note:** If omitted, `POST /instance/policies` will set this attribute to the default value (`false`).
     */
    enforce_token?: boolean;
  }

  /** User defined metadata that is associated with the `allowedIP` instance policy type. */
  export interface InstancePolicyAllowedIPPolicyData {
    /** If set to `true`, Key Protect enables the specified policy for your service instance. If set to `false`, Key
     *  Protect disables the specified policy for your service instance, and the policy will no longer affect Key
     *  Protect actions.
     *
     *  **Note:** If a policy with attributes is disabled, all attributes are reset and are not retained.
     */
    enabled: boolean;
    /** Attributes of an `allowedIP` instance policy. Must be provided if the `enabled` field is `true`. Cannot be
     *  provided if the `enabled` field is `false`.
     */
    attributes?: AllowedIPProperties;
  }

  /** User defined metadata that is associated with the `allowedNetwork` instance policy type. */
  export interface InstancePolicyAllowedNetworkPolicyData {
    /** If set to `true`, Key Protect enables the specified policy for your service instance. If set to `false`, Key
     *  Protect disables the specified policy for your service instance, and the policy will no longer affect Key
     *  Protect actions.
     *
     *  **Note:** If a policy with attributes is disabled, all attributes are reset and are not retained.
     */
    enabled: boolean;
    /** Attributes of an `allowedNetwork` instance policy. Must be provided if the `enabled` field is `true`. Cannot
     *  be provided if the `enabled` field is `false`.
     */
    attributes?: InstancePolicyAllowedNetworkPolicyDataAttributes;
  }

  /** Attributes of an `allowedNetwork` instance policy. Must be provided if the `enabled` field is `true`. Cannot be provided if the `enabled` field is `false`. */
  export interface InstancePolicyAllowedNetworkPolicyDataAttributes {
    /** If set to `public-and-private`, Key Protect allows the instance to be accessible through public and private
     *  endpoints. If set to `private-only`, Key Protect restricts the instance to only be accessible through a private
     *  endpoint.
     */
    allowed_network: string;
  }

  /** User defined metadata that is associated with the `keyCreateImportAccess` instance policy type. */
  export interface InstancePolicyKeyCreateImportAccessPolicyData {
    /** If set to `true`, Key Protect enables the specified policy for your service instance. If set to `false`, Key
     *  Protect disables the specified policy for your service instance, and the policy will no longer affect Key
     *  Protect actions.
     *
     *  **Note:** If a policy with attributes is disabled, all attributes are reset and are not retained.
     */
    enabled: boolean;
    /** Attributes of a `keyCreateImportAccess` instance policy. Must be provided if the `enabled` field is `true`.
     *  Cannot be provided if the `enabled` field is `false`.
     */
    attributes?: KeyCreateImportAccessProperties;
  }

  /** User defined metadata that is associated with any instance policy. */
  export interface InstancePolicyProperties {
    /** If set to `true`, Key Protect enables the specified policy for your service instance. If set to `false`, Key
     *  Protect disables the specified policy for your service instance, and the policy will no longer affect Key
     *  Protect actions.
     *
     *  **Note:** If a policy with attributes is disabled, all attributes are reset and are not retained.
     */
    enabled: boolean;
    /** Attributes associated with any instance policy type. */
    attributes?: InstancePolicyAllAttributes;
  }

  /** InstancePolicyResource. */
  export interface InstancePolicyResource {
    /** The date the policy was created. The date format follows RFC 3339. */
    creationDate: string;
    /** The unique identifier for the resource that created the policy. */
    createdBy: string;
    /** The unique identifier for the resource that updated the policy. */
    updatedBy?: string;
    /** Updates when the policy is replaced or modified. The date format follows RFC 3339. */
    lastUpdated?: string;
    /** The type of policy to be retrieved. */
    policy_type: string;
    /** User defined metadata that is associated with any instance policy. */
    policy_data: InstancePolicyProperties;
  }

  /** Properties associated with a key response. */
  export interface Key {
    /** The metadata that describes the resource array. */
    metadata?: CollectionMetadata;
    /** A collection of resources. */
    resources?: KeyWithPayload[];
  }

  /** KeyActionOneOfResponse. */
  export interface KeyActionOneOfResponse {
  }

  /** Properties associated with a specific key alias. */
  export interface KeyAlias {
    /** The metadata that describes the resource array. */
    metadata?: CollectionMetadata;
    /** A collection of resources. */
    resources?: KeyAliasResource[];
  }

  /** Properties associated with an alias. */
  export interface KeyAliasResource {
    /** The ID that identifies the key that is associated with the alias. */
    keyId?: string;
    /** The unique, human-readable alias assigned to the key. */
    alias?: string;
    /** The unique identifier for the user that created the alias. */
    createdBy?: string;
    /** The date the alias was created. The date format follows RFC 3339. */
    creationDate?: string;
  }

  /** Data associated with the policy type `keyCreateImportAccess`. */
  export interface KeyCreateImportAccessProperties {
    /** If set to `false`, the service prevents you or any authorized users from using Key Protect to create root
     *  keys in the specified service instance. If set to `true`, Key Protect allows you or any authorized users to
     *  create root keys in the instance.
     *
     *  **Note:** If omitted, `POST /instance/policies` will set this attribute to the default value (`true`).
     */
    create_root_key?: boolean;
    /** If set to `false`, the service prevents you or any authorized users from using Key Protect to create
     *  standard keys in the specified service instance. If set to `true`, Key Protect allows you or any authorized
     *  users to create standard keys in the instance.
     *
     *  **Note:** If omitted, `POST /instance/policies` will set this attribute to the default value (`true`).
     */
    create_standard_key?: boolean;
    /** If set to `false`, the service prevents you or any authorized users from importing root keys into the
     *  specified service instance. If set to `true`, Key Protect allows you or any authorized users to import root keys
     *  into the instance.
     *
     *  **Note:** If omitted, `POST /instance/policies` will set this attribute to the default value (`true`).
     */
    import_root_key?: boolean;
    /** If set to `false`, the service prevents you or any authorized users from importing standard keys into the
     *  specified service instance. If set to `true`, Key Protect allows you or any authorized users to import standard
     *  keys into the instance.
     *
     *  **Note:** If omitted, `POST /instance/policies` will set this attribute to the default value (`true`).
     */
    import_standard_key?: boolean;
    /** If set to `true`, the service prevents you or any authorized users from importing key material into the
     *  specified service instance without using an import token. If set to `false`, Key Protect allows you or any
     *  authorized users to import key material into the instance without the use of an import token.
     *
     *  **Note:** If omitted, `POST /instance/policies` will set this attribute to the default value (`false`).
     */
    enforce_token?: boolean;
  }

  /** Properties returned only for DELETE. */
  export interface KeyFullRepresentation {
    /** Specifies the MIME type that represents the key resource. Currently, only the default is supported. */
    type?: string;
    /** The v4 UUID used to uniquely identify the resource, as specified by RFC 4122. */
    id?: string;
    /** A human-readable name to assign to your key.
     *
     *  To protect your privacy, do not use personal data, such as your name or location as the name for your key.
     */
    name?: string;
    /** One or more, up to a total of five unique, human-readable aliases  assigned to your key.
     *
     *  To protect your privacy, do not use personal data, such as your name or location as an alias for your key.
     *
     *  Each alias must be alphanumeric and cannot contain spaces or special characters other than `-` or `_`. The alias
     *  cannot be a UUID and must not be a Key Protect reserved name: `allowed_ip`, `key`,
     *  `keys`, `metadata`, `policy`, `policies`, `registration`,
     *  `registrations`, `ring`, `rings`, `rotate`, `wrap`, `unwrap`,
     *  `rewrap`, `version`, `versions`.
     */
    aliases?: string[];
    /** A text field used to provide a more detailed description of the key. The maximum length is 240 characters.
     *
     *  To protect your privacy, do not use personal data, such as your name or location, as a description for your key.
     */
    description?: string;
    /** Up to 30 tags can be created. Tags can be between 0-30 characters, including spaces. Special characters not
     *  permitted include the angled bracket, comma, colon, ampersand, and vertical pipe character
     *  (|).
     *
     *  To protect your privacy, do not use personal data, such as your name or location, as a tag for your key.
     */
    tags?: string[];
    /** The key state based on NIST SP 800-57. States are integers and correspond to the Pre-activation = 0, Active
     *  = 1,  Suspended = 2, Deactivated = 3, and Destroyed = 5 values.
     */
    state?: number;
    /** The date the key material expires. The date format follows RFC 3339. You can set an expiration date on any
     *  key on its creation. If you create a key without specifying an expiration date, the key does not expire.
     */
    expirationDate?: string;
    /** A boolean that determines whether the key material can leave the service.
     *
     *  If set to `false`, Key Protect designates the key as a nonextractable root key used for `wrap` and `unwrap`
     *  actions. If set to `true`, Key Protect designates the key as a standard key that you can store in your apps and
     *  services. Once set to `false` it cannot be changed to `true`.
     */
    extractable?: boolean;
    /** The Cloud Resource Name (CRN) that uniquely identifies your cloud. resources. */
    crn?: string;
    /** A boolean that shows whether your key was originally imported or generated in Key Protect. The value is set
     *  by Key Protect based on how the key material is initially added to the service.
     *
     *  A value of `true` indicates that you must provide new key material when it's time to rotate the key. A value of
     *  `false` indicates that Key Protect will generate the new key material on a `rotate` operation, as it did in key
     *  creation.
     */
    imported?: boolean;
    /** The date the key material was created. The date format follows RFC 3339. */
    creationDate?: string;
    /** The unique identifier for the resource that created the key. */
    createdBy?: string;
    /** The algorithm type used to generate the key. Currently, AES is supported. */
    algorithmType?: string;
    /** The metadata for the key algorithm. */
    algorithmMetadata?: KeyFullRepresentationAlgorithmMetadata;
    /** The algorithm bit size used for key encryption. */
    algorithmBitSize?: number;
    /** The encryption scheme used to generate the key. Currently, `CBC_PAD` is supported. */
    algorithmMode?: string;
    /** A code indicating the reason the key is not in the activation state. */
    nonactiveStateReason?: number;
    /** Updates when any part of the key metadata is modified. The date format follows RFC 3339. */
    lastUpdateDate?: string;
    /** Updates to show when the key was last rotated. The date format follows RFC 3339. */
    lastRotateDate?: string;
    /** Properties associated with a specific key version. */
    keyVersion?: KeyVersion;
    /** Metadata that indicates the status of a dual authorization policy on the key. */
    dualAuthDelete?: DualAuthKeyMetadata;
    /** A boolean that determines whether the key has been deleted. */
    deleted?: boolean;
    /** The date the key material was destroyed. The date format follows RFC 3339. */
    deletionDate?: string;
    /** The unique identifier for the resource that deleted the key. */
    deletedBy?: string;
    /** The date the key will no longer have the ability to be restored. */
    restoreExpirationDate?: string;
    /** A boolean that specifies if your key has the ability to be restored.
     *
     *  A value of `true` indicates that the key can be restored. A value of
     *  `false` indicates that the key is unable to be restored.
     */
    restoreAllowed?: boolean;
    /** A boolean that specifies if the key can be purged. A value of `true` indicates that the key can be purged. A
     *  value of `false` indicates that the key is within the purge wait period and is not ready to be purged.
     */
    purgeAllowed?: boolean;
    /** The date the key will be ready to be purged. */
    purgeAllowedFrom?: string;
    /** The date the deleted key will be automatically purged from Key Protect system. */
    purgeScheduledOn?: string;
  }

  /** The metadata for the key algorithm. */
  export interface KeyFullRepresentationAlgorithmMetadata {
    /** The algorithm bit size used for key encryption. */
    bitLength?: string;
    /** The encryption scheme used to generate the key. Currently, `CBC_PAD` is supported. */
    mode?: string;
  }

  /** Properties that are associated with key level dual authorization delete policy. */
  export interface KeyPolicyDualAuthDelete {
    /** Specifies the MIME type that represents the policy resource. Currently, only the default is supported. */
    type: string;
    /** Data associated with the dual authorization delete policy. */
    dualAuthDelete: KeyPolicyDualAuthDeleteDualAuthDelete;
  }

  /** Data associated with the dual authorization delete policy. */
  export interface KeyPolicyDualAuthDeleteDualAuthDelete {
    /** If set to `true`, Key Protect enables a dual authorization policy on a single key.
     *
     *  After you enable the policy, Key Protect requires an authorization from two users to delete this key. For
     *  example, you can authorize the deletion first by using the
     *  [SetKeyForDeletion](#invoke-an-action-on-a-key) action. Then, a different user provides a second authorization
     *  implicitly by calling `DELETE /keys` to delete the key.
     *
     *  **Note:** Once the dual authorization policy is set on the key, it cannot be reverted.
     */
    enabled: boolean;
  }

  /** KeyPolicyRotation. */
  export interface KeyPolicyRotation {
    /** Specifies the MIME type that represents the policy resource. Currently, only the default is supported. */
    type: string;
    /** Specifies the key rotation time interval in months, with a minimum of 1, and a maximum of 12. */
    rotation: KeyPolicyRotationRotation;
  }

  /** Specifies the key rotation time interval in months, with a minimum of 1, and a maximum of 12. */
  export interface KeyPolicyRotationNonRequiredRotation {
    /** Specifies the key rotation time interval in months. */
    interval_month: number;
  }

  /** Specifies the key rotation time interval in months, with a minimum of 1, and a maximum of 12. */
  export interface KeyPolicyRotationRotation {
    /** Specifies the key rotation time interval in months. */
    interval_month: number;
  }

  /** Base properties of an instance key ring. */
  export interface KeyRing {
    /** An ID that identifies the key ring. Each ID is unique only within the given instance and is not reserved
     *  across the Key Protect service.
     */
    id?: string;
    /** The date the key ring was created. The date format follows RFC 3339. */
    creationDate?: string;
    /** The unique identifier for the user that created the key ring. */
    createdBy?: string;
  }

  /** Properties associated with a specific key version. */
  export interface KeyVersion {
    /** The ID of the key version. */
    id?: string;
    /** The date that the version of the key was created. */
    creationDate?: string;
  }

  /** Properties returned only for DELETE. */
  export interface KeyWithPayload {
    /** Specifies the MIME type that represents the key resource. Currently, only the default is supported. */
    type?: string;
    /** The v4 UUID used to uniquely identify the resource, as specified by RFC 4122. */
    id?: string;
    /** A human-readable name to assign to your key.
     *
     *  To protect your privacy, do not use personal data, such as your name or location as the name for your key.
     */
    name?: string;
    /** One or more, up to a total of five unique, human-readable aliases  assigned to your key.
     *
     *  To protect your privacy, do not use personal data, such as your name or location as an alias for your key.
     *
     *  Each alias must be alphanumeric and cannot contain spaces or special characters other than `-` or `_`. The alias
     *  cannot be a UUID and must not be a Key Protect reserved name: `allowed_ip`, `key`,
     *  `keys`, `metadata`, `policy`, `policies`, `registration`,
     *  `registrations`, `ring`, `rings`, `rotate`, `wrap`, `unwrap`,
     *  `rewrap`, `version`, `versions`.
     */
    aliases?: string[];
    /** A text field used to provide a more detailed description of the key. The maximum length is 240 characters.
     *
     *  To protect your privacy, do not use personal data, such as your name or location, as a description for your key.
     */
    description?: string;
    /** Up to 30 tags can be created. Tags can be between 0-30 characters, including spaces. Special characters not
     *  permitted include the angled bracket, comma, colon, ampersand, and vertical pipe character
     *  (|).
     *
     *  To protect your privacy, do not use personal data, such as your name or location, as a tag for your key.
     */
    tags?: string[];
    /** The key state based on NIST SP 800-57. States are integers and correspond to the Pre-activation = 0, Active
     *  = 1,  Suspended = 2, Deactivated = 3, and Destroyed = 5 values.
     */
    state?: number;
    /** The date the key material expires. The date format follows RFC 3339. You can set an expiration date on any
     *  key on its creation. If you create a key without specifying an expiration date, the key does not expire.
     */
    expirationDate?: string;
    /** A boolean that determines whether the key material can leave the service.
     *
     *  If set to `false`, Key Protect designates the key as a nonextractable root key used for `wrap` and `unwrap`
     *  actions. If set to `true`, Key Protect designates the key as a standard key that you can store in your apps and
     *  services. Once set to `false` it cannot be changed to `true`.
     */
    extractable?: boolean;
    /** The Cloud Resource Name (CRN) that uniquely identifies your cloud. resources. */
    crn?: string;
    /** A boolean that shows whether your key was originally imported or generated in Key Protect. The value is set
     *  by Key Protect based on how the key material is initially added to the service.
     *
     *  A value of `true` indicates that you must provide new key material when it's time to rotate the key. A value of
     *  `false` indicates that Key Protect will generate the new key material on a `rotate` operation, as it did in key
     *  creation.
     */
    imported?: boolean;
    /** The date the key material was created. The date format follows RFC 3339. */
    creationDate?: string;
    /** The unique identifier for the resource that created the key. */
    createdBy?: string;
    /** The algorithm type used to generate the key. Currently, AES is supported. */
    algorithmType?: string;
    /** The metadata for the key algorithm. */
    algorithmMetadata?: KeyWithPayloadAlgorithmMetadata;
    /** The algorithm bit size used for key encryption. */
    algorithmBitSize?: number;
    /** The encryption scheme used to generate the key. Currently, `CBC_PAD` is supported. */
    algorithmMode?: string;
    /** A code indicating the reason the key is not in the activation state. */
    nonactiveStateReason?: number;
    /** Updates when any part of the key metadata is modified. The date format follows RFC 3339. */
    lastUpdateDate?: string;
    /** Updates to show when the key was last rotated. The date format follows RFC 3339. */
    lastRotateDate?: string;
    /** Properties associated with a specific key version. */
    keyVersion?: KeyVersion;
    /** Metadata that indicates the status of a dual authorization policy on the key. */
    dualAuthDelete?: DualAuthKeyMetadata;
    /** A boolean that determines whether the key has been deleted. */
    deleted?: boolean;
    /** The date the key material was destroyed. The date format follows RFC 3339. */
    deletionDate?: string;
    /** The unique identifier for the resource that deleted the key. */
    deletedBy?: string;
    /** The date the key will no longer have the ability to be restored. */
    restoreExpirationDate?: string;
    /** A boolean that specifies if your key has the ability to be restored.
     *
     *  A value of `true` indicates that the key can be restored. A value of
     *  `false` indicates that the key is unable to be restored.
     */
    restoreAllowed?: boolean;
    /** A boolean that specifies if the key can be purged. A value of `true` indicates that the key can be purged. A
     *  value of `false` indicates that the key is within the purge wait period and is not ready to be purged.
     */
    purgeAllowed?: boolean;
    /** The date the key will be ready to be purged. */
    purgeAllowedFrom?: string;
    /** The date the deleted key will be automatically purged from Key Protect system. */
    purgeScheduledOn?: string;
    /** The key material that you can export to external apps or services.
     *
     *  **Note:** If the key has been designated as a root key, the system cannot return the key material.
     */
    payload?: string;
  }

  /** The metadata for the key algorithm. */
  export interface KeyWithPayloadAlgorithmMetadata {
    /** The algorithm bit size used for key encryption. */
    bitLength?: string;
    /** The encryption scheme used to generate the key. Currently, `CBC_PAD` is supported. */
    mode?: string;
  }

  /** The base schema for listing key rings. */
  export interface ListKeyRings {
    /** The metadata that describes the resource array. */
    metadata: CollectionMetadata;
    /** A collection of resources. */
    resources?: KeyRing[];
  }

  /** Properties associated with a registration response. */
  export interface ListKeyVersions {
    /** The metadata that describes the resource array. */
    metadata?: CollectionMetadata;
    /** An array of resources. */
    resources?: KeyVersion[];
  }

  /** The base schema for listing keys. */
  export interface ListKeys {
    /** The metadata that describes the resource array. */
    metadata: CollectionMetadata;
    /** A collection of resources. */
    resources?: KeyFullRepresentation[];
  }

  /** User defined metadata that is associated with the `metrics` instance policy type. */
  export interface MetricsProperties {
    /** If set to `true`, Key Protect will send service instance metrics to your
     *  [Cloud Monitoring With Sysdig](/docs/Monitoring-with-Sysdig?topic=Monitoring-with-Sysdig-getting-started)
     *  monitoring instance.
     *
     *  By default, sending metrics to your
     *  [Cloud Monitoring With Sysdig](/docs/Monitoring-with-Sysdig?topic=Monitoring-with-Sysdig-getting-started)
     *  monitoring instance is disabled.
     *
     *  **Note:** A metrics policy will add an additional metrics source to your
     *  [Cloud Monitoring With Sysdig](/docs/Monitoring-with-Sysdig?topic=Monitoring-with-Sysdig-getting-started)
     *  monitoring instance. Please visit
     *  [Enabling Platform Metrics](/docs/Monitoring-with-Sysdig?topic=Monitoring-with-Sysdig-platform_metrics_enabling)
     *  for more information.
     */
    enabled: boolean;
  }

  /** The base schema for the resource in the body of a create registration. */
  export interface ModifiableRegistrationResourceBody {
    /** A boolean that determines whether Key Protect must prevent deletion of a root key.
     *
     *  If set to `true`, Key Protect prevents deletion of the specified root key and its associated protected
     *  resources. The system prevents the deletion of any key that has at least one registration where
     *  `preventKeyDeletion` is `true`.
     */
    preventKeyDeletion?: boolean;
    /** A text field that cloud services can use to store external metadata about the registration. This field is
     *  exposed to customers when they review registered resources using GET /registrations.
     */
    description?: string;
    /** A text field that cloud services can use to store internal metadata about the registration. This field is
     *  not exposed to customers and is visible only with IBM Cloud service to service calls.
     */
    registrationMetadata?: string;
    /** The ID of the key version that you want to register. This must be a version that is newer than the
     *  registered key version.
     */
    keyVersionId?: string;
  }

  /** The base schema for patch key response body. */
  export interface PatchKeyResponseBody {
    /** The metadata that describes the resource array. */
    metadata?: CollectionMetadata;
    /** An array of resources. */
    resources?: KeyFullRepresentation[];
  }

  /** The base schema for purged key. */
  export interface PurgeKey {
    /** The metadata that describes the resource array. */
    metadata: CollectionMetadata;
    /** A collection of resources. */
    resources: KeyFullRepresentation[];
  }

  /** Properties associated with a registration response. */
  export interface Registration {
    /** The metadata that describes the resource array. */
    metadata?: CollectionMetadata;
    /** A collection of resources. */
    resources?: RegistrationResource[];
  }

  /** RegistrationActionOneOf. */
  export interface RegistrationActionOneOf {
  }

  /** Properties associated with a registration. */
  export interface RegistrationResource {
    /** The ID that identifies the root key that is associated with the specified cloud resource. */
    keyId?: string;
    /** The unique, human-readable alias assigned to the root key that is associated with the specified cloud
     *  resource.
     */
    keyName?: string;
    /** The [Cloud Resource Name](/docs/account?topic=account-crn) (CRN) that represents the cloud resource, such as
     *  a Cloud Object Storage bucket, that is associated with the key.
     */
    resourceCrn?: string;
    /** The unique identifier for the resource that created the registration. */
    createdBy?: string;
    /** The date the registration was created. The date format follows RFC 3339. */
    creationDate?: string;
    /** The unique identifier for the resource that updated the registration. */
    updatedBy?: string;
    /** Updates when the registration is modified. The date format follows RFC 3339. */
    lastUpdated?: string;
    /** Description of the purpose of the registration. */
    description?: string;
    /** Additional information about the registration. This field is not exposed to customers and is visible only
     *  with IBM Cloud service to service calls.
     */
    registrationMetadata?: string;
    /** A boolean that determines whether Key Protect must prevent deletion of a root key. */
    preventKeyDeletion?: boolean;
    /** Properties associated with a specific key version. */
    keyVersion?: KeyVersion;
  }

  /** Properties associated with a list registration response which may include total registration count. */
  export interface RegistrationWithTotalCount {
    /** The metadata that describes the resource array. */
    metadata?: CollectionMetadataWithTotalCount;
    /** A collection of resources. */
    resources?: RegistrationResource[];
  }

  /** The base schema for the resource in the body of a create registration. */
  export interface ReplaceRegistrationResourceBody {
    /** A boolean that determines whether Key Protect must prevent deletion of a root key.
     *
     *  If set to `true`, Key Protect prevents deletion of the specified root key and its associated protected
     *  resources. The system prevents the deletion of any key that has at least one registration where
     *  `preventKeyDeletion` is `true`.
     */
    preventKeyDeletion: boolean;
    /** A text field that cloud services can use to store external metadata about the registration. This field is
     *  exposed to customers when they review registered resources using GET /registrations.
     */
    description: string;
    /** A text field that cloud services can use to store internal metadata about the registration. This field is
     *  not exposed to customers and is visible only with IBM Cloud service to service calls.
     */
    registrationMetadata: string;
    /** The ID of the key version that you want to register. This must be a version that is newer than the
     *  registered key version.
     */
    keyVersionId: string;
  }

  /** Properties that are associated with the response body of an rewrap action. */
  export interface RewrapKeyResponseBody {
    /** The wrapped data encryption key (WDEK) that you can export to your app or service. The value is base64
     *  encoded.
     */
    ciphertext: string;
    /** The key version that was used to wrap the DEK. This key version is associated with the `ciphertext` value
     *  that was used in the request.
     */
    keyVersion?: KeyVersion;
    /** The latest key version that was used to rewrap the DEK. This key version is associated with the `ciphertext`
     *  value that's returned in the response.
     */
    rewrappedKeyVersion?: KeyVersion;
  }

  /** SetInstancePoliciesOneOf. */
  export interface SetInstancePoliciesOneOf {
  }

  /** SetInstancePoliciesOneOfSetInstancePolicyAllowedIPResourcesItem. */
  export interface SetInstancePoliciesOneOfSetInstancePolicyAllowedIPResourcesItem {
    /** The type of policy to be set. */
    policy_type: string;
    /** User defined metadata that is associated with the `allowedIP` instance policy type. */
    policy_data: InstancePolicyAllowedIPPolicyData;
  }

  /** SetInstancePoliciesOneOfSetInstancePolicyAllowedNetworkResourcesItem. */
  export interface SetInstancePoliciesOneOfSetInstancePolicyAllowedNetworkResourcesItem {
    /** The type of policy to be set. */
    policy_type: string;
    /** User defined metadata that is associated with the `allowedNetwork` instance policy type. */
    policy_data: InstancePolicyAllowedNetworkPolicyData;
  }

  /** SetInstancePoliciesOneOfSetInstancePolicyKeyCreateImportAccessResourcesItem. */
  export interface SetInstancePoliciesOneOfSetInstancePolicyKeyCreateImportAccessResourcesItem {
    /** The type of policy to be set. */
    policy_type: string;
    /** User defined metadata that is associated with the `keyCreateImportAccess` instance policy type. */
    policy_data: InstancePolicyKeyCreateImportAccessPolicyData;
  }

  /** SetInstancePoliciesOneOfSetInstancePolicyMetricsResourcesItem. */
  export interface SetInstancePoliciesOneOfSetInstancePolicyMetricsResourcesItem {
    /** The type of policy to be set. */
    policy_type: string;
    /** User defined metadata that is associated with the `metrics` instance policy type. */
    policy_data: MetricsProperties;
  }

  /** SetInstancePolicyDualAuthDeleteResourcesItem. */
  export interface SetInstancePolicyDualAuthDeleteResourcesItem {
    /** The type of policy to be set. */
    policy_type: string;
    /** User defined metadata that is associated with the `dualAuthDelete` instance policy type. */
    policy_data: DualAuthDeleteProperties;
  }

  /** SetKeyPoliciesOneOf. */
  export interface SetKeyPoliciesOneOf {
  }

  /** SetMultipleInstancePoliciesResourcesItem. */
  export interface SetMultipleInstancePoliciesResourcesItem {
    /** The type of policy to be set. */
    policy_type: string;
    /** User defined metadata that is associated with any instance policy. */
    policy_data: SetMultipleInstancePoliciesResourcesItemPolicyData;
  }

  /** User defined metadata that is associated with any instance policy. */
  export interface SetMultipleInstancePoliciesResourcesItemPolicyData {
    /** If set to `true`, Key Protect enables the specified policy for your service instance. If set to `false`, Key
     *  Protect disables the specified policy for your service instance, and the policy will no longer affect Key
     *  Protect actions.
     *
     *  **Note:** If a policy with attributes is disabled, all attributes are reset and are not retained.
     */
    enabled: boolean;
    /** Attributes associated with any instance policy type. Must be provided if the `enabled` field is `true`.
     *  Cannot be provided if the `enabled` field is `false`. Only attributes corresponding to the `policy_type` can be
     *  provided.
     */
    attributes?: SetMultipleInstancePoliciesResourcesItemPolicyDataAttributes;
  }

  /** Attributes associated with any instance policy type. Must be provided if the `enabled` field is `true`. Cannot be provided if the `enabled` field is `false`. Only attributes corresponding to the `policy_type` can be provided. */
  export interface SetMultipleInstancePoliciesResourcesItemPolicyDataAttributes {
    /** If set to `public-and-private`, Key Protect allows the instance to be accessible through public and private
     *  endpoints. If set to `private-only`, Key Protect restricts the instance to only be accessible through a private
     *  endpoint.
     */
    allowed_network?: string;
    /** A string array of IPv4 or IPv6 CIDR notated subnets that are authorized to interact with the instance. If
     *  both `allowedNetwork` and `allowedIP` policies are set, only traffic aligning with both the `allowed_network`
     *  allowed network policy attribute and the
     *  `allowed_ip` allowed IP policy attribute will be allowed.
     *
     *  IPv4 and iIP6 addresses are accepted for public endpoints. Only the IPv4 private network gateway addresses from
     *  the array will be authorized to access your instance via private endpoint.
     *
     *  **Important:** Once set, accessing your instance may require additional steps. Please visit
     *  [Accessing an instance via public
     *  endpoint](/docs/key-protect?topic=key-protect-manage-allowed-ip#access-allowed-ip-public-endpoint) and
     *  [Accessing an instance via private
     *  endpoint](/docs/key-protect?topic=key-protect-manage-allowed-ip#access-allowed-ip-private-endpoint) for more
     *  details.
     *
     *  **Note:** An allowed IP policy does not affect requests from other IBM Cloud services.
     */
    allowed_ip?: string[];
    /** If set to `false`, the service prevents you or any authorized users from using Key Protect to create root
     *  keys in the specified service instance. If set to `true`, Key Protect allows you or any authorized users to
     *  create root keys in the instance.
     *
     *  **Note:** If omitted, `POST /instance/policies` will set this attribute to the default value (`true`).
     */
    create_root_key?: boolean;
    /** If set to `false`, the service prevents you or any authorized users from using Key Protect to create
     *  standard keys in the specified service instance. If set to `true`, Key Protect allows you or any authorized
     *  users to create standard keys in the instance.
     *
     *  **Note:** If omitted, `POST /instance/policies` will set this attribute to the default value (`true`).
     */
    create_standard_key?: boolean;
    /** If set to `false`, the service prevents you or any authorized users from importing root keys into the
     *  specified service instance. If set to `true`, Key Protect allows you or any authorized users to import root keys
     *  into the instance.
     *
     *  **Note:** If omitted, `POST /instance/policies` will set this attribute to the default value (`true`).
     */
    import_root_key?: boolean;
    /** If set to `false`, the service prevents you or any authorized users from importing standard keys into the
     *  specified service instance. If set to `true`, Key Protect allows you or any authorized users to import standard
     *  keys into the instance.
     *
     *  **Note:** If omitted, `POST /instance/policies` will set this attribute to the default value (`true`).
     */
    import_standard_key?: boolean;
    /** If set to `true`, the service prevents you or any authorized users from importing key material into the
     *  specified service instance without using an import token. If set to `false`, Key Protect allows you or any
     *  authorized users to import key material into the instance without the use of an import token.
     *
     *  **Note:** If omitted, `POST /instance/policies` will set this attribute to the default value (`false`).
     */
    enforce_token?: boolean;
  }

  /** Properties that are associated with key level dual authorization delete policy. */
  export interface SetMultipleKeyPoliciesResource {
    /** Specifies the MIME type that represents the policy resource. Currently, only the default is supported. */
    type: string;
    /** Data associated with the dual authorization delete policy. */
    dualAuthDelete: SetMultipleKeyPoliciesResourceDualAuthDelete;
    /** Specifies the key rotation time interval in months, with a minimum of 1, and a maximum of 12. */
    rotation: SetMultipleKeyPoliciesResourceRotation;
  }

  /** Data associated with the dual authorization delete policy. */
  export interface SetMultipleKeyPoliciesResourceDualAuthDelete {
    /** If set to `true`, Key Protect enables a dual authorization policy on a single key.
     *
     *  After you enable the policy, Key Protect requires an authorization from two users to delete this key. For
     *  example, you can authorize the deletion first by using the
     *  [SetKeyForDeletion](#invoke-an-action-on-a-key) action. Then, a different user provides a second authorization
     *  implicitly by calling `DELETE /keys` to delete the key.
     *
     *  **Note:** Once the dual authorization policy is set on the key, it cannot be reverted.
     */
    enabled: boolean;
  }

  /** Specifies the key rotation time interval in months, with a minimum of 1, and a maximum of 12. */
  export interface SetMultipleKeyPoliciesResourceRotation {
    /** Specifies the key rotation time interval in months. */
    interval_month: number;
  }

  /** Properties that are associated with the response body of an unwrap action. */
  export interface UnwrapKeyResponseBody {
    /** The data encryption key (DEK) used in wrap actions when the query parameter is set to `wrap`. The system
     *  returns a base64 encoded plaintext in the response entity-body when you perform an `unwrap` action on a key.
     *
     *  To wrap an existing DEK, provide a base64 encoded plaintext during a
     *  `wrap` action. To generate a new DEK, omit the `plaintext` property. Key Protect generates a random plaintext
     *  (32 bytes) that is rooted in an HSM and then wraps that value.
     *
     *  **Note:** When you unwrap a wrapped data encryption key (WDEK) by using a rotated root key, the service returns
     *  a new ciphertext in the response entity-body. Each ciphertext remains available for
     *  `unwrap` actions. If you unwrap a DEK with a previous ciphertext, the service also returns the latest ciphertext
     *  in the response. Use the latest ciphertext for future unwrap operations.
     */
    plaintext: string;
    /** The wrapped data encryption key (WDEK) that you can export to your app or service. The value is base64
     *  encoded.
     */
    ciphertext?: string;
    /** The key version that was used to wrap the DEK. This key version is associated with the `ciphertext` value
     *  that was used in the request.
     */
    keyVersion?: KeyVersion;
    /** The latest key version that was used to rewrap the DEK. This key version is associated with the `ciphertext`
     *  value that's returned in the response.
     */
    rewrappedKeyVersion?: KeyVersion;
  }

  /** Properties that are associated with the response body of a wrap action. */
  export interface WrapKeyResponseBody {
    /** The data encryption key (DEK) used in wrap actions when the query parameter is set to `wrap`. The system
     *  returns a base64 encoded plaintext in the response entity-body when you perform an `unwrap` action on a key.
     *
     *  To wrap an existing DEK, provide a base64 encoded plaintext during a
     *  `wrap` action. To generate a new DEK, omit the `plaintext` property. Key Protect generates a random plaintext
     *  (32 bytes) that is rooted in an HSM and then wraps that value.
     *
     *  **Note:** When you unwrap a wrapped data encryption key (WDEK) by using a rotated root key, the service returns
     *  a new ciphertext in the response entity-body. Each ciphertext remains available for
     *  `unwrap` actions. If you unwrap a DEK with a previous ciphertext, the service also returns the latest ciphertext
     *  in the response. Use the latest ciphertext for future unwrap operations.
     */
    plaintext?: string;
    /** The wrapped data encryption key (WDEK) that you can export to your app or service. The value is base64
     *  encoded.
     */
    ciphertext: string;
    /** The key version that was used to wrap the DEK. This key version is associated with the `ciphertext` value
     *  that was used in the request.
     */
    keyVersion?: KeyVersion;
  }

  /** Properties that are associated with retrieving an instance level allowed IP policy. */
  export interface GetInstancePoliciesOneOfGetInstancePolicyAllowedIP extends GetInstancePoliciesOneOf {
    /** The metadata that describes the resource array. */
    metadata: CollectionMetadata;
    /** A collection of resources. */
    resources: GetInstancePolicyAllowedIPResourcesItem[];
  }

  /** Properties that are associated with retrieving an instance level allowed network policy. */
  export interface GetInstancePoliciesOneOfGetInstancePolicyAllowedNetwork extends GetInstancePoliciesOneOf {
    /** The metadata that describes the resource array. */
    metadata: CollectionMetadata;
    /** A collection of resources. */
    resources: GetInstancePoliciesOneOfGetInstancePolicyAllowedNetworkResourcesItem[];
  }

  /** Properties that are associated with retrieving an instance level dual authorization delete policy. */
  export interface GetInstancePoliciesOneOfGetInstancePolicyDualAuthDelete extends GetInstancePoliciesOneOf {
    /** The metadata that describes the resource array. */
    metadata: CollectionMetadata;
    /** A collection of resources. */
    resources: GetInstancePolicyDualAuthDeleteResourcesItem[];
  }

  /** Properties that are associated with retrieving an instance level key create and import access policy. */
  export interface GetInstancePoliciesOneOfGetInstancePolicyKeyCreateImportAccess extends GetInstancePoliciesOneOf {
    /** The metadata that describes the resource array. */
    metadata: CollectionMetadata;
    /** A collection of resources. */
    resources: GetInstancePoliciesOneOfGetInstancePolicyKeyCreateImportAccessResourcesItem[];
  }

  /** Properties that are associated with retrieving an instance level metrics policy. */
  export interface GetInstancePoliciesOneOfGetInstancePolicyMetrics extends GetInstancePoliciesOneOf {
    /** The metadata that describes the resource array. */
    metadata: CollectionMetadata;
    /** A collection of resources. */
    resources: GetInstancePolicyMetricsResourcesItem[];
  }

  /** Properties that are associated with the instance level policies. */
  export interface GetInstancePoliciesOneOfGetMultipleInstancePolicies extends GetInstancePoliciesOneOf {
    /** The metadata that describes the resource array. */
    metadata: CollectionMetadata;
    /** A collection of resources. */
    resources: InstancePolicyResource[];
  }

  /** The base schema for retrieving a dual authorization key policy. */
  export interface GetKeyPoliciesOneOfGetKeyPolicyDualAuthDelete extends GetKeyPoliciesOneOf {
    /** The metadata that describes the resource array. */
    metadata: CollectionMetadata;
    /** A collection of resources. */
    resources: GetKeyPoliciesOneOfGetKeyPolicyDualAuthDeleteResourcesItem[];
  }

  /** The base schema for retrieving a dual authorization key policy. */
  export interface GetKeyPoliciesOneOfGetKeyPolicyRotation extends GetKeyPoliciesOneOf {
    /** The metadata that describes the resource array. */
    metadata: CollectionMetadata;
    /** A collection of resources. */
    resources: GetKeyPolicyRotationResourcesItem[];
  }

  /** The base schema for retrieving all key policies. */
  export interface GetKeyPoliciesOneOfGetMultipleKeyPolicies extends GetKeyPoliciesOneOf {
    /** The metadata that describes the resource array. */
    metadata: CollectionMetadata;
    /** A collection of resources. */
    resources: GetMultipleKeyPoliciesResource[];
  }

  /** Properties that are associated with the response body of an rewrap action. */
  export interface KeyActionOneOfResponseRewrapKeyResponseBody extends KeyActionOneOfResponse {
    /** The wrapped data encryption key (WDEK) that you can export to your app or service. The value is base64
     *  encoded.
     */
    ciphertext: string;
    /** The key version that was used to wrap the DEK. This key version is associated with the `ciphertext` value
     *  that was used in the request.
     */
    keyVersion?: KeyVersion;
    /** The latest key version that was used to rewrap the DEK. This key version is associated with the `ciphertext`
     *  value that's returned in the response.
     */
    rewrappedKeyVersion?: KeyVersion;
  }

  /** Properties that are associated with the response body of an unwrap action. */
  export interface KeyActionOneOfResponseUnwrapKeyResponseBody extends KeyActionOneOfResponse {
    /** The data encryption key (DEK) used in wrap actions when the query parameter is set to `wrap`. The system
     *  returns a base64 encoded plaintext in the response entity-body when you perform an `unwrap` action on a key.
     *
     *  To wrap an existing DEK, provide a base64 encoded plaintext during a
     *  `wrap` action. To generate a new DEK, omit the `plaintext` property. Key Protect generates a random plaintext
     *  (32 bytes) that is rooted in an HSM and then wraps that value.
     *
     *  **Note:** When you unwrap a wrapped data encryption key (WDEK) by using a rotated root key, the service returns
     *  a new ciphertext in the response entity-body. Each ciphertext remains available for
     *  `unwrap` actions. If you unwrap a DEK with a previous ciphertext, the service also returns the latest ciphertext
     *  in the response. Use the latest ciphertext for future unwrap operations.
     */
    plaintext: string;
    /** The wrapped data encryption key (WDEK) that you can export to your app or service. The value is base64
     *  encoded.
     */
    ciphertext?: string;
    /** The key version that was used to wrap the DEK. This key version is associated with the `ciphertext` value
     *  that was used in the request.
     */
    keyVersion?: KeyVersion;
    /** The latest key version that was used to rewrap the DEK. This key version is associated with the `ciphertext`
     *  value that's returned in the response.
     */
    rewrappedKeyVersion?: KeyVersion;
  }

  /** Properties that are associated with the response body of a wrap action. */
  export interface KeyActionOneOfResponseWrapKeyResponseBody extends KeyActionOneOfResponse {
    /** The data encryption key (DEK) used in wrap actions when the query parameter is set to `wrap`. The system
     *  returns a base64 encoded plaintext in the response entity-body when you perform an `unwrap` action on a key.
     *
     *  To wrap an existing DEK, provide a base64 encoded plaintext during a
     *  `wrap` action. To generate a new DEK, omit the `plaintext` property. Key Protect generates a random plaintext
     *  (32 bytes) that is rooted in an HSM and then wraps that value.
     *
     *  **Note:** When you unwrap a wrapped data encryption key (WDEK) by using a rotated root key, the service returns
     *  a new ciphertext in the response entity-body. Each ciphertext remains available for
     *  `unwrap` actions. If you unwrap a DEK with a previous ciphertext, the service also returns the latest ciphertext
     *  in the response. Use the latest ciphertext for future unwrap operations.
     */
    plaintext?: string;
    /** The wrapped data encryption key (WDEK) that you can export to your app or service. The value is base64
     *  encoded.
     */
    ciphertext: string;
    /** The key version that was used to wrap the DEK. This key version is associated with the `ciphertext` value
     *  that was used in the request.
     */
    keyVersion?: KeyVersion;
  }

  /** The base schema for the request body of deactivate registration. */
  export interface RegistrationActionOneOfDeactivateRegistration extends RegistrationActionOneOf {
    /** The metadata that describes the resource array. */
    metadata?: CollectionMetadata;
    /** A collection of resources. */
    resources?: CloudResourceName[];
  }

  /** Properties that are associated with setting an instance level allowed IP policy. */
  export interface SetInstancePoliciesOneOfSetInstancePolicyAllowedIP extends SetInstancePoliciesOneOf {
    /** The metadata that describes the resource array. */
    metadata: CollectionMetadata;
    /** A collection of resources. */
    resources: SetInstancePoliciesOneOfSetInstancePolicyAllowedIPResourcesItem[];
  }

  /** Properties that are associated with setting an instance level allowed network policy. */
  export interface SetInstancePoliciesOneOfSetInstancePolicyAllowedNetwork extends SetInstancePoliciesOneOf {
    /** The metadata that describes the resource array. */
    metadata: CollectionMetadata;
    /** A collection of resources. */
    resources: SetInstancePoliciesOneOfSetInstancePolicyAllowedNetworkResourcesItem[];
  }

  /** Properties that are associated with setting a dual authorization delete instance policy. */
  export interface SetInstancePoliciesOneOfSetInstancePolicyDualAuthDelete extends SetInstancePoliciesOneOf {
    /** The metadata that describes the resource array. */
    metadata: CollectionMetadata;
    /** A collection of resources. */
    resources: SetInstancePolicyDualAuthDeleteResourcesItem[];
  }

  /** Properties that are associated with setting an instance level key create and import access policy. */
  export interface SetInstancePoliciesOneOfSetInstancePolicyKeyCreateImportAccess extends SetInstancePoliciesOneOf {
    /** The metadata that describes the resource array. */
    metadata: CollectionMetadata;
    /** A collection of resources. */
    resources: SetInstancePoliciesOneOfSetInstancePolicyKeyCreateImportAccessResourcesItem[];
  }

  /** Properties that are associated with setting a metrics instance policy. */
  export interface SetInstancePoliciesOneOfSetInstancePolicyMetrics extends SetInstancePoliciesOneOf {
    /** The metadata that describes the resource array. */
    metadata: CollectionMetadata;
    /** A collection of resources. */
    resources: SetInstancePoliciesOneOfSetInstancePolicyMetricsResourcesItem[];
  }

  /** Properties that are associated with setting any type of instance level policy. */
  export interface SetInstancePoliciesOneOfSetMultipleInstancePolicies extends SetInstancePoliciesOneOf {
    /** The metadata that describes the resource array. */
    metadata: CollectionMetadata;
    /** A collection of resources. */
    resources: SetMultipleInstancePoliciesResourcesItem[];
  }

  /** Base schema for request of create/update of key level dual authorization delete policy. */
  export interface SetKeyPoliciesOneOfSetKeyPolicyDualAuthDelete extends SetKeyPoliciesOneOf {
    /** The metadata that describes the resource array. */
    metadata: CollectionMetadata;
    /** A collection of resources. */
    resources: KeyPolicyDualAuthDelete[];
  }

  /** Base schema for request of create/update of key level rotation policy. */
  export interface SetKeyPoliciesOneOfSetKeyPolicyRotation extends SetKeyPoliciesOneOf {
    /** The metadata that describes the resource array. */
    metadata: CollectionMetadata;
    /** A collection of resources. */
    resources: KeyPolicyRotation[];
  }

  /** Properties that are associated with key. */
  export interface SetKeyPoliciesOneOfSetMultipleKeyPolicies extends SetKeyPoliciesOneOf {
    /** The metadata that describes the resource array. */
    metadata: CollectionMetadata;
    /** A collection of resources. */
    resources: SetMultipleKeyPoliciesResource[];
  }

}

export = IbmKeyProtectApiV2;
