// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { LeaveMessageData } = initSchema(schema);

export {
  LeaveMessageData
};