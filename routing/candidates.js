const express = require('express');
const router = express.Router();

// data storaged in memory
let memoryCandidates = [];
let memoryIdCounter = 1;

// Create a candidate
router.post('/', (request, response) => {
	const candidate = { id: memoryIdCounter++, ...request.body };
	memoryCandidates.push(candidate);
	response.status(201).json(candidate);
});

// Read all candidates
router.get('/', (request, response) => {
	const { stage } = request.query;
	const filtered = stage ? memoryCandidates.filter(candidate => candidate.applicationStage === stage) : memoryCandidates;
	response.json(filtered);
});

// Read a single candidate
router.get("/:id", (request, response) => {
	const candidate = memoryCandidates.find(candidate => candidate.id == request.params.id);
	if (!candidate) return response.status(404).json({ message: 'Candidate not found in database' });
	response.json(candidate);
})

// Update all candidate details
router.put("/:id", (request, response) => {
	const index = memoryCandidates.findIndex(candidate => candidate.id == request.params.id);
	if (index === -1) return response.status(404).json({ message: 'Candidate not found' });

	memoryCandidates[index] = { ...memoryCandidates[index], ...request.body };
	response.json(memoryCandidates[index]);
});


// Delete a cadidate
router.delete("/:id", (request, response) => {
	const index = memoryCandidates.findIndex(candidate => candidate.id == request.params.id);
	if (index === -1) return response.status(404).json({ message: 'Candidate not found' });

	const deleted = memoryCandidates.splice(index, 1);
	response.json(deleted[0]);
});

module.exports = router;
