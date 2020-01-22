require(`dotenv`).config();
const DATABASE: string = process.env.DATABASE || ``;

export const EVENT_TABLE: string = `${DATABASE}.event`;
export const USES_TABLE: string = `${DATABASE}.uses`;
export const JOIN_EVENT_TABLE: string = `${DATABASE}.joinEvent`;
export const USER_SYSTEM_TABLE: string = `${DATABASE}.usersystem`;
export const QUESTIONNAIRE_TABLE: string = `${DATABASE}.questionnaire`;
export const QUESTION_TABLE: string = `${DATABASE}.question`;
export const OPTION_TABLE: string = `${DATABASE}.option`;
export const QUESTIONNAIRE_OPTION_TABLE: string = `${DATABASE}.questionnaire_option`;
export const TIME_LIMIT_TABLE: string = `${DATABASE}.timeLimit`;

export const EVENT_QUERIES = {
  ADD: 'add',
  GET_ID: 'getId',
  SAVE: 'save',
  DELETE: 'delete',
  LINK: 'link',
  REMOVE_LINK: 'removeLink',
}

export const JOIN_EVENT_QUERIES = {
  ADD: 'add',
  SET_USER_TYPE: 'setUserType',
  SAVE: 'save',
  DELETE: 'delete',
  GET_JOIN_USERS: 'getJoinUsers',
  GET_JOIN_EVENTS: 'getJoinEvents'
}

export const OPTION_QUERIES = {
  ADD: 'add',
  GET_ID: 'getId',
  LINK: 'link',
  SAVE: 'save',
  DELETE: 'delete',
  DELETE_RELATION: 'deleteRelation',
  GET_BY_ID_USER: 'getByIdUser',
  GET_ID_BY_ID_QUESTIONNAIRE: 'getIdByIdQuestionnaire'
}

export const QUESTIONNAIRE_QUERIES = {
  ADD: 'add',
  GET_ID: 'getId',
  SAVE: 'save',
  DELETE: 'delete',
  GET_BY_ID_USER: 'getByIdUser',
  GET_ID_BY_ID_QUESTIONNAIRE: 'getIdByIdQuestionnaire',
  DELETE_RELATION: 'deleteRelation',
  GET_BY_ID_EVENT: 'getByIdEvent'
}

export const QUESTION_QUERIES = {
  ADD: 'add',
  GET_ID: 'getId',
  GET_BY_ID_TYPE: 'getByIdType',
  GET_ALL: 'getAll',
  SAVE: 'save',
  DELETE: 'delete',
}

export const TIME_LIMIT_QUERIES = {
  ADD: 'add',
  SET_MAX_TIME: 'setMaxTime',
  DELETE: 'delete',
  GET: 'get'
}

export const USER_SYSTEM_QUERIES = {
  ADD: 'add',
  GET: 'get',
  EXIST_EMAIL: 'existEmail',
  GET_ID_BY_EMAIL: 'getIdByEmail',
  SAVE: 'save',
  DELETE: 'delete'
}

export default class Queries {
  private queries: any = {
    [EVENT_TABLE]: {
      [EVENT_QUERIES.ADD]: `INSERT INTO ${EVENT_TABLE}(name, location, start, end, description, guestsNumber, state, created) VALUES(?,?,?,?,?,?,?,?);`,
      [EVENT_QUERIES.GET_ID]: `SELECT id FROM ${EVENT_TABLE} WHERE name=? and created=?`,
      [EVENT_QUERIES.SAVE]: `UPDATE ${EVENT_TABLE} SET name=?, location=?, start=?, end=?, description=?, guestsNumber=?, state=? WHERE id=?;`,
      [EVENT_QUERIES.DELETE]: `DELETE FROM ${EVENT_TABLE} where id=?;`,
      [EVENT_QUERIES.LINK]: `INSERT INTO ${USES_TABLE}(idEvent, idQuestionnaire, idOption) VALUES(?,?,?);`,
      [EVENT_QUERIES.REMOVE_LINK]: `DELETE FROM ${USES_TABLE} where idEvent=?;`,
    },

    [JOIN_EVENT_TABLE]: {
      [JOIN_EVENT_QUERIES.ADD]: `INSERT INTO ${JOIN_EVENT_TABLE}(idUser, idEvent, idType) VALUES(?,?,?);`,
      [JOIN_EVENT_QUERIES.SET_USER_TYPE]: `UPDATE ${JOIN_EVENT_TABLE} SET idType=? WHERE idEvent=? and idUser=?;`,
      [JOIN_EVENT_QUERIES.SAVE]: `UPDATE ${EVENT_TABLE} SET name=?, location=?, start=?, end=?, description=?, guestsNumber=? WHERE id=?;`,
      [JOIN_EVENT_QUERIES.DELETE]: `DELETE FROM ${JOIN_EVENT_TABLE} WHERE idEvent=?;`,
      [JOIN_EVENT_QUERIES.GET_JOIN_USERS]: `SELECT id, username, email FROM ${USER_SYSTEM_TABLE} u, ${JOIN_EVENT_TABLE} j where u.id = j.idUser and j.idEvent = ? and j.idType = ?;`,
      [JOIN_EVENT_QUERIES.GET_JOIN_EVENTS]: `SELECT e.* FROM event e, ${JOIN_EVENT_TABLE} j WHERE e.id = j.idEvent AND j.idUser = ? and j.idType = ?;`,
    },

    [OPTION_TABLE]: {
      [OPTION_QUERIES.ADD]: `INSERT INTO ${OPTION_TABLE}(idUser, idQuestion, name, cost) VALUES(?,?,?,?);`,
      [OPTION_QUERIES.GET_ID]: `SELECT id FROM ${OPTION_TABLE} o where o.idUser = ? AND o.idQuestion = ? AND o.name = ?;`,
      [OPTION_QUERIES.LINK]: `INSERT INTO ${QUESTIONNAIRE_OPTION_TABLE}(idQuestionnaire, idOption) VALUES(?,?);`,
      [OPTION_QUERIES.SAVE]: `UPDATE ${OPTION_TABLE} SET name=?, cost=?, idUser=?, idQuestion=? WHERE id=?;`,
      [OPTION_QUERIES.DELETE]: `DELETE FROM ${OPTION_TABLE} WHERE id=?;`,
      [OPTION_QUERIES.DELETE_RELATION]: `DELETE FROM ${QUESTIONNAIRE_OPTION_TABLE} WHERE idOption=?;`,
      [OPTION_QUERIES.GET_BY_ID_USER]: `SELECT * FROM ${OPTION_TABLE} where idUser = ?;`,
      [OPTION_QUERIES.GET_ID_BY_ID_QUESTIONNAIRE]: `SELECT idOption FROM ${QUESTIONNAIRE_OPTION_TABLE} where idQuestionnaire = ?;`,
    },

    [QUESTIONNAIRE_TABLE]: {
      [QUESTIONNAIRE_QUERIES.ADD]: `INSERT INTO ${QUESTIONNAIRE_TABLE}(idUser, name, category) VALUES(?,?,?);`,
      [QUESTIONNAIRE_QUERIES.GET_ID]: `SELECT id FROM ${QUESTIONNAIRE_TABLE} q where q.idUser = ? AND q.name = ? and q.category = ?;`,
      [QUESTIONNAIRE_QUERIES.SAVE]: `UPDATE ${QUESTIONNAIRE_TABLE} SET idUser=?, name=?, category=? WHERE id=?;`,
      [QUESTIONNAIRE_QUERIES.DELETE]: `DELETE FROM ${QUESTIONNAIRE_TABLE} WHERE id=?;`,
      [QUESTIONNAIRE_QUERIES.GET_BY_ID_USER]: `SELECT id, name, category FROM ${QUESTIONNAIRE_TABLE} where questionnaire.idUser = ?;`,
      [QUESTIONNAIRE_QUERIES.GET_ID_BY_ID_QUESTIONNAIRE]: `SELECT idOption FROM ${QUESTIONNAIRE_OPTION_TABLE} where idQuestionnaire = ?;`,
      [QUESTIONNAIRE_QUERIES.DELETE_RELATION]: `DELETE FROM ${QUESTIONNAIRE_OPTION_TABLE} WHERE idQuestionnaire=?;`,
      // can add userId in the future
      [QUESTIONNAIRE_QUERIES.GET_BY_ID_EVENT]: `SELECT DISTINCT q.* from ${QUESTIONNAIRE_TABLE} q, uses u where u.idEvent=? and q.id=u.idQuestionnaire;`,
    },

    [QUESTION_TABLE]: {
      [QUESTION_QUERIES.ADD]: `INSERT INTO ${QUESTION_TABLE}(idType, name, category) VALUES(?,?,?);`,
      [QUESTION_QUERIES.GET_ID]: `SELECT id FROM ${QUESTION_TABLE} q where q.idType = ? AND q.name = ? AND q.category = ?;`,
      [QUESTION_QUERIES.GET_BY_ID_TYPE]: `SELECT * FROM ${QUESTION_TABLE} q where q.idType = ?;`,
      [QUESTION_QUERIES.GET_ALL]: `SELECT id, name FROM ${QUESTION_TABLE};`,
      [QUESTION_QUERIES.SAVE]: `UPDATE ${QUESTION_TABLE} SET idType=?, name=?, category=? WHERE id=?;`,
      [QUESTION_QUERIES.DELETE]: `DELETE FROM ${QUESTION_TABLE} WHERE id=?;`,
    },

    [TIME_LIMIT_TABLE]: {
      [TIME_LIMIT_QUERIES.ADD]: `INSERT INTO ${TIME_LIMIT_TABLE}(idEvent, idQuestion, maxtime) VALUES(?,?,?);`,
      [TIME_LIMIT_QUERIES.SET_MAX_TIME]: `UPDATE ${TIME_LIMIT_TABLE} SET maxtime=? WHERE idEvent=? AND idQuestion=?;`,
      [TIME_LIMIT_QUERIES.DELETE]: `DELETE FROM ${TIME_LIMIT_TABLE} where WHERE idEvent=? AND idQuestion=?;`,
      [TIME_LIMIT_QUERIES.GET]: `SELECT * FROM ${TIME_LIMIT_TABLE} WHERE idEvent=? AND idQuestion=?;`,
    },

    [USER_SYSTEM_TABLE]: {
      [USER_SYSTEM_QUERIES.ADD]: `insert into ${USER_SYSTEM_TABLE}(username, password, email) values(?,?,?);`,
      [USER_SYSTEM_QUERIES.GET]: `SELECT id, username, password FROM ${USER_SYSTEM_TABLE} where email=? LIMIT 1;`,
      [USER_SYSTEM_QUERIES.EXIST_EMAIL]: `select email from ${USER_SYSTEM_TABLE} where email=?`,
      [USER_SYSTEM_QUERIES.GET_ID_BY_EMAIL]: `select id from ${USER_SYSTEM_TABLE} where email=?`,
      [USER_SYSTEM_QUERIES.SAVE]: `update ${USER_SYSTEM_TABLE} set username=?, password=?, email=? where id=?;`,
      [USER_SYSTEM_QUERIES.DELETE]: `DELETE FROM ${USER_SYSTEM_TABLE} where id=?;`,
    },
  };

  public getQuery(tableName: string, actionQuery: string) {
    try {
      return {
        table: tableName,
        action: actionQuery,
        query: this.queries[tableName][actionQuery],
      };
    } catch (error) {
      console.log('Error in get query', error)
      return null;
    }
  }
}
