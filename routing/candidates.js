const express = require('express');
const router = express.Router();
const Candidate = require("../candidate");

// data storaged in memory
let memoryCandidates = [];
let memoryIdCounter = 1;

// Create a candidate
router.post('/', async (request, response) => {
	try {
		const candidate = new Candidate(request.body);
		await candidate.save();
		response.status(201).json(candidate);
	} catch (err) {
		response.status(400).json({ error: err.message });
	}
});

// Read all candidates
router.get('/', async (request, response) => {
	try {
		const filter = request.query.stage ? { applicationStage: request.query.stage } : {};
		const readCandidates = await Candidate.find(filter);
		response.json(readCandidates);

	} catch (err) {
		response.status(500).json({ error: err.message });
	}
});

// Read a single candidate
router.get("/:id", async (request, response) => {
	try {
		const readCandidate = await Candidate.findById(request.params.id);
		if (!readCandidate) return response.status(404).json({ message: 'Candidte not found in database' });
		response.json(readCandidate);

	} catch (err) {
		response.status(500).json({ error: err.message });
	}
});

// Update all candidate details
router.put("/:id", async (request, response) => {
	try {
		const updateCandidate = await Candidate.findByIdAndUpdate(request.params.id, request.body, { new: true });
		if (!updateCandidate) return response.status(404).json({ message: 'Candidate not found' });
		response.json(updateCandidate);
	} catch (err) {
		response.status(400).json({ error: err.message });
	}
});


// Delete a cadidate
router.delete("/:id", async (request, response) => {
	try {
		const deleteCandidate = await Candidate.findByIdAndDelete(request.params.id);
		if (!deleteCandidate) return response.status(404).json({ message: 'Candidate not found' });
		response.json(deleteCandidate);
	} catch (err) {
		response.status(500).json({ error: err.message });
	}
});

module.exports = router;
