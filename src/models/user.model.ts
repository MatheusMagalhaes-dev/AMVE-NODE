import { Document, Model, model, Schema } from "mongoose";

import { IUser } from "@ts";

interface IUserDocument extends IUser, Document<string> {}
interface IUserModel extends Model<IUserDocument> {}
interface IUserMethods extends IUserDocument {
  comparePassword(password: string): Promise<boolean>;
  changeActive(): Promise<IUser>;
}

const UserSchema = new Schema<IUser, IUserModel, IUserMethods>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model("User", UserSchema);
