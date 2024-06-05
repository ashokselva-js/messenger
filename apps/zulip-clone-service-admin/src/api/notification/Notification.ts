export type Notification = {
  content: string | null;
  createdAt: Date;
  id: string;
  recipient: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
