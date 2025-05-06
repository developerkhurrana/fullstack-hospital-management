import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: [true, 'Patient is required']
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: [true, 'Doctor is required']
    },
    appointment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    },
    diagnosis: {
        type: String,
        required: [true, 'Diagnosis is required']
    },
    symptoms: [{
        type: String,
        required: [true, 'At least one symptom is required']
    }],
    prescription: [{
        medicine: {
            name: String,
            dosage: String,
            frequency: String,
            duration: String
        },
        notes: String
    }],
    tests: [{
        name: String,
        result: String,
        date: Date,
        notes: String
    }],
    vitals: {
        bloodPressure: String,
        heartRate: Number,
        temperature: Number,
        weight: Number,
        height: Number
    },
    allergies: [{
        name: String,
        severity: {
            type: String,
            enum: ['mild', 'moderate', 'severe']
        },
        notes: String
    }],
    followUp: {
        required: {
            type: Boolean,
            default: false
        },
        date: Date,
        notes: String
    },
    notes: String,
    attachments: [{
        name: String,
        url: String,
        type: String
    }]
}, {
    timestamps: true
});

// Indexes for better query performance
medicalRecordSchema.index({ patient: 1 });
medicalRecordSchema.index({ doctor: 1 });
medicalRecordSchema.index({ appointment: 1 });
medicalRecordSchema.index({ createdAt: -1 });

const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);

export default MedicalRecord; 