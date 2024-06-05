import { SortOrder } from "../../util/SortOrder";

export type ChannelOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  members?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
