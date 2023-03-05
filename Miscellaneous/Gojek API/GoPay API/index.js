"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var request = require("request-promise-native");
module.exports.GoPay = /** @class */ (function () {
    function GoPay(clientId, secretID, sandbox) {
        if (sandbox === void 0) { sandbox = true; }
        this.cid = clientId;
        this.sid = secretID;
        this.apiUrl = sandbox ? "https://gw.sandbox.gopay.com/api" : "https://gate.gopay.cz/api";
    }
    GoPay.prototype.getToken = function (scope) {
        if (scope === void 0) { scope = "payment-all"; }
        return __awaiter(this, void 0, void 0, function () {
            var authString, settings, res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authString = "Basic " + toBase64(this.cid + ":" + this.sid);
                        settings = {
                            method: 'POST',
                            uri: this.apiUrl + "/oauth2/token",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'Authorization': authString
                            },
                            form: {
                                grant_type: 'client_credentials',
                                scope: scope
                            },
                            json: true
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, request(settings)];
                    case 2:
                        res = _a.sent();
                        return [2 /*return*/, res.access_token];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, "StatusCode: " + error_1.statusCode + ", message: " + error_1.message];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GoPay.prototype.createPayment = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var token, settings, res, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getToken()];
                    case 1:
                        token = _a.sent();
                        if (!token || token === '')
                            return [2 /*return*/, 'Error: Missing token'];
                        settings = {
                            method: 'POST',
                            uri: this.apiUrl + "/payments/payment",
                            headers: {
                                'Accept': 'application/json',
                                'Authorization': "Bearer " + token
                            },
                            body: data,
                            json: true
                        };
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, request(settings)];
                    case 3:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 4:
                        error_2 = _a.sent();
                        return [2 /*return*/, "StatusCode: " + error_2.statusCode + ", message: " + error_2.message];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    GoPay.prototype.voidAuthorization = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var token, settings, res, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getToken()];
                    case 1:
                        token = _a.sent();
                        if (!token || token === '')
                            return [2 /*return*/, 'Error: Missing token'];
                        settings = {
                            method: 'POST',
                            uri: this.apiUrl + "/payments/payment/" + id + "/void-authorization",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'Authorization': "Bearer " + token
                            },
                            json: true
                        };
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, request(settings)];
                    case 3:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 4:
                        error_3 = _a.sent();
                        return [2 /*return*/, "StatusCode: " + error_3.statusCode + ", message: " + error_3.message];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    GoPay.prototype.captureAuthorization = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var token, settings, res, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getToken()];
                    case 1:
                        token = _a.sent();
                        if (!token || token === '')
                            return [2 /*return*/, 'Error: Missing token'];
                        settings = {
                            method: 'POST',
                            uri: this.apiUrl + "/payments/payment/" + id + "/capture",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'Authorization': "Bearer " + token
                            },
                            json: true
                        };
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, request(settings)];
                    case 3:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 4:
                        error_4 = _a.sent();
                        return [2 /*return*/, "StatusCode: " + error_4.statusCode + ", message: " + error_4.message];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    GoPay.prototype.partialAuthorization = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var token, settings, res, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getToken()];
                    case 1:
                        token = _a.sent();
                        if (!token || token === '')
                            return [2 /*return*/, 'Error: Missing token'];
                        settings = {
                            method: 'POST',
                            uri: this.apiUrl + "/payments/payment/" + id + "/capture",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'Authorization': "Bearer " + token
                            },
                            body: data,
                            json: true
                        };
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, request(settings)];
                    case 3:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 4:
                        error_5 = _a.sent();
                        return [2 /*return*/, "StatusCode: " + error_5.statusCode + ", message: " + error_5.message];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    GoPay.prototype.createRecurrence = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var token, settings, res, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getToken()];
                    case 1:
                        token = _a.sent();
                        if (!token || token === '')
                            return [2 /*return*/, 'Error: Missing token'];
                        settings = {
                            method: 'POST',
                            uri: this.apiUrl + "/payments/payment/" + id + "/create-recurrence",
                            headers: {
                                'Accept': 'application/json',
                                'Authorization': "Bearer " + token
                            },
                            body: data,
                            json: true
                        };
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, request(settings)];
                    case 3:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 4:
                        error_6 = _a.sent();
                        return [2 /*return*/, "StatusCode: " + error_6.statusCode + ", message: " + error_6.message];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    GoPay.prototype.voidRecurrence = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var token, settings, res, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getToken()];
                    case 1:
                        token = _a.sent();
                        if (!token || token === '')
                            return [2 /*return*/, 'Error: Missing token'];
                        settings = {
                            method: 'POST',
                            uri: this.apiUrl + "/payments/payment/" + id + "/void-recurrence",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'Authorization': "Bearer " + token
                            },
                            json: true
                        };
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, request(settings)];
                    case 3:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 4:
                        error_7 = _a.sent();
                        return [2 /*return*/, "StatusCode: " + error_7.statusCode + ", message: " + error_7.message];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    GoPay.prototype.getStatus = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var token, settings, res, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getToken()];
                    case 1:
                        token = _a.sent();
                        if (!token || token === '')
                            return [2 /*return*/, 'Error: Missing token'];
                        settings = {
                            method: 'GET',
                            uri: this.apiUrl + "/payments/payment/" + id,
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'Authorization': "Bearer " + token
                            },
                            json: true
                        };
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, request(settings)];
                    case 3:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 4:
                        error_8 = _a.sent();
                        return [2 /*return*/, "StatusCode: " + error_8.statusCode + ", message: " + error_8.message];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    GoPay.prototype.refundPayment = function (id, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var token, settings, res, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getToken()];
                    case 1:
                        token = _a.sent();
                        if (!token || token === '')
                            return [2 /*return*/, 'Error: Missing token'];
                        settings = {
                            method: 'POST',
                            uri: this.apiUrl + "/payments/payment/" + id,
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'Authorization': "Bearer " + token
                            },
                            json: true,
                            body: "amount=" + amount
                        };
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, request(settings)];
                    case 3:
                        res = _a.sent();
                        return [2 /*return*/, res];
                    case 4:
                        error_9 = _a.sent();
                        return [2 /*return*/, "StatusCode: " + error_9.statusCode + ", message: " + error_9.message];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return GoPay;
}());
function toBase64(s) {
    return new Buffer(s).toString("base64");
}
