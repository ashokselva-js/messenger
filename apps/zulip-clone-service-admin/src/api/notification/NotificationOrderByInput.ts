import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  recipient?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
