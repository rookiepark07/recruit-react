import { action } from "typesafe-actions";
import { Constants } from "./constants";
import { User } from "../../models/user.model";

export const setCurrentUser = (user: User) => {
  return action(Constants.SET_CURRENT_USER, user);
}
