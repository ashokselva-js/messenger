import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ChannelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="members" source="members" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
