// package: gitpod.v1
// file: gitpod/v1/prebuilds.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetRunningPrebuildRequest extends jspb.Message { 
    getContextUrl(): string;
    setContextUrl(value: string): GetRunningPrebuildRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRunningPrebuildRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRunningPrebuildRequest): GetRunningPrebuildRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRunningPrebuildRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRunningPrebuildRequest;
    static deserializeBinaryFromReader(message: GetRunningPrebuildRequest, reader: jspb.BinaryReader): GetRunningPrebuildRequest;
}

export namespace GetRunningPrebuildRequest {
    export type AsObject = {
        contextUrl: string,
    }
}

export class GetRunningPrebuildResponse extends jspb.Message { 
    getPrebuildId(): string;
    setPrebuildId(value: string): GetRunningPrebuildResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRunningPrebuildResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRunningPrebuildResponse): GetRunningPrebuildResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRunningPrebuildResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRunningPrebuildResponse;
    static deserializeBinaryFromReader(message: GetRunningPrebuildResponse, reader: jspb.BinaryReader): GetRunningPrebuildResponse;
}

export namespace GetRunningPrebuildResponse {
    export type AsObject = {
        prebuildId: string,
    }
}