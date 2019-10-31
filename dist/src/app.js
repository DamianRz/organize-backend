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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_1 = __importDefault(require("socket.io"));
var http_1 = __importDefault(require("http"));
var MysqlConnection_1 = __importDefault(require("./connection/MysqlConnection"));
var routes_1 = __importDefault(require("./routes"));
var Logger_1 = __importDefault(require("./utils/Logger"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var express_graphql_1 = __importDefault(require("express-graphql"));
var graphql_1 = require("graphql");
var app = express_1.default();
var server = http_1.default.createServer(app);
var io = socket_io_1.default(server);
var events = [
    {
        id: 1,
        name: 'event test',
    },
    {
        id: 2,
        name: 'event test',
    },
];
var schema = graphql_1.buildSchema("\n  type Query {\n    event(id: Int!): Event\n    events(name: String!): [Event]\n  }\n\n  type Event {\n    id: Int\n    name: String\n  }\n");
var getEvent = function (args) {
    var id = args.id;
    return events.filter(function (e) {
        return e.id === id;
    })[0];
};
var getEvents = function (args) {
    var name = args.name;
    return events.filter(function (e) {
        return e.name === name;
    });
};
var root = {
    event: getEvent,
    events: getEvents,
};
app.use('/graphql', express_graphql_1.default({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
function init() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            app.use(express_1.default.json());
            app.use(express_1.default.urlencoded({ extended: true }));
            app.use(cors_1.default({
                origin: 'http://localhost:8080'
            }));
            app.use('/api', routes_1.default);
            try {
                MysqlConnection_1.default.connect(server);
            }
            catch (ex) {
                Logger_1.default.fatal('Error in App -' + ex);
            }
            return [2];
        });
    });
}
io.on('connection', function (socket) {
    console.log('user connected');
    socket.emit('welcome', 'welcome to socket.io');
});
init();
//# sourceMappingURL=app.js.map