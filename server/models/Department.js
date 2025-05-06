import mongoose from 'mongoose';

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Department name is required'],
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Department description is required'],
        trim: true
    },
    head: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    location: {
        floor: String,
        wing: String,
        roomNumber: String
    },
    services: [{
        name: String,
        description: String,
        price: Number
    }],
    staff: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    }],
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

// Indexes for better query performance
departmentSchema.index({ name: 1 });
departmentSchema.index({ head: 1 });
departmentSchema.index({ 'services.name': 1 });

const Department = mongoose.model('Department', departmentSchema);

export default Department; 