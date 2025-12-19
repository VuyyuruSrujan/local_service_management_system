const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    role: {
        type: String,
        required: true,
        enum: ['customer', 'admin', 'technician', 'superadmin'],
        default: 'customer'
    },
    blocked: {
        isBlocked: {
            type: Boolean,
            default: false
        },
        blockedBy: {
            type: String
        },
        blockedAt: {
            type: Date
        },
        reason: {
            type: String
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Update the updatedAt timestamp before saving
UserSchema.pre('save', function() {
    this.updatedAt = Date.now();
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
