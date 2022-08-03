var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
//TODO: Init
var selectAlgorithmTS = document === null || document === void 0 ? void 0 : document.getElementById("algo-options");
var selectOrderTS = document === null || document === void 0 ? void 0 : document.getElementById("order-options");
var sortingContainerTS = document === null || document === void 0 ? void 0 : document.getElementById("sorting-view");
var sortingViewTS = document.querySelector("#sorting-view");
var numArray = [2, 1, 10, 6, 8, 9, 3, 19, 0, 5, 11, 16, 12, 14, 4, 17, 24, 29, 18, 30];
//TODO: CLASS
var InitAlgorithms = /** @class */ (function () {
    function InitAlgorithms(data) {
        var _this = this;
        this.setAlgorithms = function (data) {
            for (var i = 0; i < data.length; i++) {
                selectAlgorithmTS.options[selectAlgorithmTS.options.length] = new Option(data[i].name, data[i].value);
            }
        };
        this.getInformation = function () { console.log(_this.data); };
        this.data = data;
    }
    return InitAlgorithms;
}());
var InitOrders = /** @class */ (function () {
    function InitOrders(data) {
        var _this = this;
        this.setOrders = function (data) {
            for (var i = 0; i < data.length; i++) {
                selectOrderTS.options[selectOrderTS.options.length] = new Option(data[i].name, data[i].value);
            }
        };
        this.getInformation = function () { return console.log(_this.data); };
        this.data = data;
    }
    return InitOrders;
}());
var InitBar = /** @class */ (function () {
    function InitBar() {
        this.createBar = function (arrSize) {
            var windowHeight = window.innerHeight;
            var windowWidth = window.innerWidth;
            sortingContainerTS.innerHTML = "";
            // for (let i = 0; i < arrSize; i++) {
            //     numArray.push(Math.floor(Math.random() * arrSize));
            // }
            var currentOrders = selectOrderTS.options[selectOrderTS.selectedIndex].value;
            if (currentOrders === "reversed") {
                numArray = numArray.sort(function (a, b) { return b - a; });
            }
            else if (currentOrders === "sorted") {
                numArray = numArray.sort(function (a, b) { return a - b; });
            }
            else if (currentOrders === "random") {
                // numArray = numArray.map(data=>Math.floor(Math.random() * numArray.length))
            }
            for (var i = 0; i < numArray.length; i++) {
                var bar = document.createElement("div");
                bar.classList.add("bar");
                bar.style.height = windowHeight * numArray[i] * 0.006 + "px";
                bar.style.width = (windowWidth * 0.8) / arrSize - 1 + "px";
                var barTitle = document.createElement("label");
                barTitle.classList.add("bar-title");
                barTitle.innerHTML = numArray[i].toString();
                bar.appendChild(barTitle);
                sortingContainerTS.appendChild(bar);
            }
        };
    }
    return InitBar;
}());
var _SortAlgorithms = /** @class */ (function (_super) {
    __extends(_SortAlgorithms, _super);
    function _SortAlgorithms() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // data: Array<number>
        // constructor(data: Array<number>) {
        //     this.data = data;
        // }
        _this.swapNode = function (a, b) {
            sortingViewTS.insertBefore(b, a);
        };
        _this.bubbleSort = function () { return __awaiter(_this, void 0, void 0, function () {
            var bar, i, j, a, b;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bar = document.getElementsByClassName("bar");
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < bar.length - 1)) return [3 /*break*/, 6];
                        j = 0;
                        _a.label = 2;
                    case 2:
                        if (!(j < bar.length - i - 1)) return [3 /*break*/, 5];
                        a = Number(bar[j].innerText);
                        b = Number(bar[j + 1].innerText);
                        bar[j].style.transform = "translate(0, -5px)";
                        bar[j + 1].style.transform = "translate(0, -5px)";
                        return [4 /*yield*/, new Promise(function (resolve) { setTimeout(function () { return resolve(); }, 30); })];
                    case 3:
                        _a.sent();
                        if (a > b) {
                            this.swapNode(bar[j], bar[j + 1]);
                            bar = document.getElementsByClassName("bar");
                        }
                        bar[j].style.transform = "translate(0, 0)";
                        bar[j + 1].style.transform = "translate(0, 0)";
                        _a.label = 4;
                    case 4:
                        j++;
                        return [3 /*break*/, 2];
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    return _SortAlgorithms;
}(InitBar));
var Control = /** @class */ (function (_super) {
    __extends(Control, _super);
    function Control() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.reset = function () {
            _this.createBar(20);
        };
        _this.start = function () {
            var currentAlgorithm = selectAlgorithmTS.options[selectAlgorithmTS.selectedIndex].value;
            if (currentAlgorithm === "bubble") {
                _this.bubbleSort();
            }
        };
        _this.changeOrder = function () { return _this.reset(); };
        _this.changeSort = function () { return _this.reset(); };
        return _this;
    }
    return Control;
}(_SortAlgorithms));
//TODO: SET UP
var algorithmsArray = [
    { name: "Bubble Sort", value: "bubble" },
    { name: "Insert Sort", value: "insert" },
    { name: "Selection Sort", value: "selection" },
];
var ordersArray = [
    { name: "Random", value: "random" },
    { name: "Reversed", value: "reversed" },
    { name: "Sorted", value: "sorted" },
];
var algo = new InitAlgorithms(algorithmsArray);
algo.setAlgorithms(algorithmsArray);
var ord = new InitOrders(ordersArray);
ord.setOrders(ordersArray);
var crt = new InitBar();
crt.createBar(20);
var ctrl = new Control();
// export { InitAlgorithms, InitOrders, InitBar }
