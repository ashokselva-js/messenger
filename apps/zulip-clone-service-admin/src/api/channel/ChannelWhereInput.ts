import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ChannelWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  members?: StringNullableFilter;
  name?: StringNullableFilter;
};
