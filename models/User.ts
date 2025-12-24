import mongoose, { Schema, Model } from 'mongoose'
import type { User } from '@/types/session'

const UserSchema = new Schema<User>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'editor'],
      default: 'editor',
    },
    lastLogin: Date,
  },
  {
    timestamps: true,
  }
)

// Index for authentication queries
UserSchema.index({ email: 1 })

const UserModel: Model<User> =
  mongoose.models.User || mongoose.model<User>('User', UserSchema)

export default UserModel
