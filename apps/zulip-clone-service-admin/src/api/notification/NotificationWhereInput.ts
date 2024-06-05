import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type NotificationWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  recipient?: StringNullableFilter;
  typeField?: "Option1";
};
