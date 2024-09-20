import mongoose, { Schema } from 'mongoose';

const ItemSchema = new Schema({
  info: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

export type ItemSchemaType = {
  value: string;
};

export default ItemSchema;
