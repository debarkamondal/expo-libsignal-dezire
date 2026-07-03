import { registerWebModule, NativeModule } from "expo";
class LibsignalDezireModule extends NativeModule {
    async vxeddsaSign(_u, _M, _z) {
        throw new Error("LibsignalDezire is not available on web");
    }
    async vxeddsaVerify(_u, _M, _signature) {
        throw new Error("LibsignalDezire is not available on web");
    }
    async genPubKey(_k) {
        throw new Error("LibsignalDezire is not available on web");
    }
    async genSecret() {
        throw new Error("LibsignalDezire is not available on web");
    }
    async genKeyPair() {
        throw new Error("LibsignalDezire is not available on web");
    }
}
export default registerWebModule(LibsignalDezireModule, "LibsignalDezireModule");
//# sourceMappingURL=LibsignalDezireModule.web.js.map