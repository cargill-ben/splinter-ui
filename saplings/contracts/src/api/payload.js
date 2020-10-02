/**
 * Copyright 2018-2020 Cargill Incorporated
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// import { Secp256k1Signer, Secp256k1PrivateKey } from 'transact-sdk-javascript';

// import crypto from 'crypto';
import protos from '../protobuf';

export const makeSignedPayload = (
    localNodeID,
    privateKey,
    action,
    actionType
) => {
    let actionBytes = null;
    let actionEnum = null;
    const payload = {};

    // const secp256PrivateKey = Secp256k1PrivateKey.fromHex(privateKey);
    // const signer = new Secp256k1Signer(secp256PrivateKey);

    switch (actionType) {
        case 'createContractRegistry': {
            actionBytes = protos.CreateContractRegistryAction.encode(action).finish();
            payload.createContractRegistryAction = action;
            actionEnum =
                protos.SabrePayload.Action.CREATE_CONTRACT_REGISTRY;
            break;
        }
        case 'createContract': {
            actionBytes = protos.CreateContractAction.encode(action).finish();
            payload.createContractAction = action;
            actionEnum =
                protos.SabrePayload.Action.CREATE_CONTRACT;
            break;

        }
        case 'createNamespaceRegistry': {
            actionBytes = protos.CreateNamespaceRegistryAction.encode(action).finish();
            payload.createNamespaceRegistryAction = action;
            actionEnum =
                protos.SabrePayload.Action.CREATE_NAMESPACE_REGISTRY;
            break;
        }
        case 'createSmartPermission': {
            actionBytes = protos.CreateSmartPermissionAction.encode(action).finish();
            payload.createSmartPermissionAction = action;
            actionEnum =
                protos.SabrePayload.Action.CREATE_SMART_PERMISSION;
            break;
        }
        default:
            throw new Error(`unhandled action type: ${action.type}`);
    }

    const serializedPayload = protos.SabrePayload.encode({
        ...payload,
        action
      }).finish();
    
    return serializedPayload;
};
