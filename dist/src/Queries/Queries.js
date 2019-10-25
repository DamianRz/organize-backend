"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = __importDefault(require("../utils/Logger"));
var Queries = (function () {
    function Queries() {
        this.table = '';
        this.action = '';
        this.query = '';
        this.queries = {
            event: {
                add: 'INSERT INTO organize.event(name, location, start, end, description, guestsNumber, created) VALUES(?,?,?,?,?,?,?);',
                getId: 'SELECT id FROM organize.event WHERE name=? and created=?',
                save: 'UPDATE organize.event SET name=?, location=?, start=?, end=?, description=?, guestsNumber=? WHERE id=?;',
                delete: 'DELETE FROM organize.event where id=?;',
                link: 'INSERT INTO organize.uses(idEvent, idQuestionnaire, idOption) VALUES(?,?,?);',
            },
            joinEvent: {
                add: 'INSERT INTO organize.joinevent(idUser, idEvent, idType) VALUES(?,?,?);',
                setUserType: 'UPDATE organize.joinevent SET idType=? WHERE idEvent=? and idUser=?;',
                save: 'UPDATE organize.event SET name=?, location=?, start=?, end=?, description=?, guestsNumber=? WHERE id=?;',
                delete: 'DELETE FROM organize.joinevent WHERE idEvent=?;',
                getJoinUsers: 'SELECT id, username, email FROM organize.usersystem u, joinevent j where u.id = j.idUser and j.idEvent = ? and j.idType = ?;',
                getJoinEvents: 'SELECT e.* FROM organize.event e, joinevent j WHERE e.id = j.idEvent AND j.idUser = ? and j.idType = ?;',
            },
            option: {
                add: 'INSERT INTO organize.option(idUser, idQuestion, name, cost) VALUES(?,?,?,?);',
                link: 'INSERT INTO organize.questionnaire_option(idQuestionnaire, idOption) VALUES(?,?);',
                save: 'UPDATE organize.option SET name=?, cost=?, idUser=?, idQuestion=? WHERE id=?;',
                delete: 'DELETE FROM organize.option WHERE id=?;',
                deleteRelation: 'DELETE FROM organize.questionnaire-option WHERE idOption=?;',
                getByIdUser: 'SELECT * FROM organize.option where idUser = ?;',
                getIdByIdQuestionnaire: 'SELECT idOption FROM organize.questionnaire_option where idQuestionnaire = ?;',
                getId: 'SELECT id FROM organize.option o where o.idUser = ? AND o.idQuestion = ? AND o.name = ?;',
            },
            questionnaire: {
                add: 'INSERT INTO organize.questionnaire(idUser, name, category) VALUES(?,?,?);',
                getId: 'SELECT id FROM organize.questionnaire q where q.idUser = ? AND q.name = ? and q.category = ?;',
                save: 'UPDATE organize.questionnaire SET idUser=?, name=?, category=? WHERE id=?;',
                delete: 'DELETE FROM organize.questionnaire WHERE id=?;',
                getByIdUser: 'SELECT id, name, category FROM organize.questionnaire where questionnaire.idUser = ?;',
                getIdByIdQuestionnaire: 'SELECT idOption FROM organize.questionnaire_option where idQuestionnaire = ?;',
                deleteRelation: 'DELETE FROM organize.questionnaire-option WHERE idQuestionnaire=?;',
            },
            question: {
                add: 'INSERT INTO organize.question(idType, name, category) VALUES(?,?,?);',
                getByIdType: 'SELECT * FROM organize.question q where q.idType = ?;',
                getId: 'SELECT id FROM organize.question q where q.idType = ? AND q.name = ? AND q.category = ?;',
                save: 'UPDATE organize.question SET idType=?, name=?, category=? WHERE id=?;',
                delete: 'DELETE FROM organize.question WHERE id=?;',
            },
            timeLimit: {
                add: 'INSERT INTO organize.timelimit(idEvent, idQuestion, maxtime) VALUES(?,?,?);',
                setMaxTime: 'UPDATE organize.timelimit SET maxtime=? WHERE idEvent=? AND idQuestion=?;',
                delete: 'DELETE FROM organize.timelimit where WHERE idEvent=? AND idQuestion=?;',
                get: 'SELECT * FROM organize.timelimit WHERE idEvent=? AND idQuestion=?;',
            },
            userSystem: {
                add: 'insert into organize.usersystem(username, password, email) values(?,?,?);',
                get: 'SELECT id, username FROM organize.usersystem where email=? and password=? LIMIT 1;',
                existsEmail: 'select email from organize.usersystem where email=?',
                getIdByEmail: 'select id from organize.usersystem where email=?',
                save: 'update organize.usersystem set username=?, password=?, email=? where id=?;',
                delete: 'DELETE FROM organize.usersystem where id=?;',
            },
        };
        this.table = '';
        this.action = '';
        this.query = '';
    }
    Queries.prototype.getQuery = function (tableName, actionQuery) {
        Logger_1.default.info('query: ' + this.queries[tableName][actionQuery]);
        try {
            return {
                table: tableName,
                action: actionQuery,
                query: this.queries[tableName][actionQuery],
            };
        }
        catch (error) {
            Logger_1.default.error('Error in getQuery :' + error);
            return null;
        }
    };
    return Queries;
}());
exports.default = Queries;
//# sourceMappingURL=Queries.js.map