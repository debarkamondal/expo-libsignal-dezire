import { NativeModule } from "expo";
import { KeyPair, VXEdDSAOutput } from "./LibsignalDezire.types";
declare class LibsignalDezireModule extends NativeModule {
    vxeddsaSign(_u: Uint8Array, _M: Uint8Array, _z: Uint8Array): Promise<VXEdDSAOutput>;
    vxeddsaVerify(_u: Uint8Array, _M: Uint8Array, _signature: Uint8Array): Promise<Uint8Array | null>;
    genPubKey(_k: Uint8Array): Promise<Uint8Array>;
    genSecret(): Promise<Uint8Array>;
    genKeyPair(): Promise<KeyPair>;
}
declare const _default: typeof LibsignalDezireModule;
export default _default;
//# sourceMappingURL=LibsignalDezireModule.web.d.ts.map