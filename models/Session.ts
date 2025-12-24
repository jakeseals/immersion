import mongoose, { Schema, Model } from 'mongoose'
import type { Session } from '@/types/session'

const ActivitySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true }, // in minutes
})

const VideoSchema = new Schema({
  url: { type: String, required: true },
  title: { type: String, required: true },
  thumbnail: String,
})

const SessionSchema = new Schema<Session>(
  {
    sessionNumber: {
      type: Number,
      required: true,
      min: 1,
      max: 3,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      introduction: String,
      mainContent: String,
      learningObjectives: [String],
      activities: [ActivitySchema],
    },
    navigation: {
      previousSession: {
        type: Schema.Types.ObjectId,
        ref: 'Session',
      },
      nextSessions: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Session',
        },
      ],
      branch: {
        type: String,
        enum: ['main', 'path-a', 'path-b'],
        default: 'main',
      },
    },
    media: {
      heroImage: String,
      gallery: [String],
      videos: [VideoSchema],
    },
    metadata: {
      order: {
        type: Number,
        required: true,
      },
      isPublished: {
        type: Boolean,
        default: false,
      },
      publishedAt: Date,
      lastModified: {
        type: Date,
        default: Date.now,
      },
      author: String,
    },
    seo: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String],
    },
  },
  {
    timestamps: true,
  }
)

// Indexes for better query performance
SessionSchema.index({ sessionNumber: 1 })
SessionSchema.index({ slug: 1 })
SessionSchema.index({ 'metadata.isPublished': 1 })

const SessionModel: Model<Session> =
  mongoose.models.Session || mongoose.model<Session>('Session', SessionSchema)

export default SessionModel
