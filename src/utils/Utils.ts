import { Request, Response } from "express";
import Logger from "./Logger";

export default class Utils {

  validation(body: any, objects: any[], response: Response) {
    let requiredItem = undefined;
    let requiredObject = undefined;

    if (JSON.stringify(body) != "{}") {
      objects.forEach(object => {
        if (body[object.name]) {
          object.items.forEach((item:any) => {
            if (body[object.name][item] == undefined) {
              requiredItem = item + " is required in " + object.name + " object";
            }
          });
        } else {
          requiredObject = "object " + object.name + " is required in the json body";
        }
      });

      if (requiredObject == undefined) {
        if (requiredItem == undefined) {
          return true;
        } else {
          Logger.info("validation: " + requiredItem)
          response.status(400).send({ "error": requiredItem });
          return false;
        }
      } else {
        Logger.info("validation: " + requiredObject)
        response.status(400).send({ "error": requiredObject });
        return false;
      }
    } else {
      Logger.info("validation: null body")
      response.status(400).send({ "error": "null body" });
      return false;
    }
  }
}