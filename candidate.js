const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
	name: { type: String, required: true },
	applicationStage: { type: String, enum: ['Applying Period', 'Screening', 'Interview', 'Test'], required: true }, // must be true in order to filter by stage
	applicationDate: { type: Date, required: true },
	overallScore: { type: Number },
	referallStatus: { type: Boolean, required: true, default: false },
	assessmentStatus: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Candidate', candidateSchema);
