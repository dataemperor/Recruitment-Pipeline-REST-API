class Candidate {
	constructor(name, applicationStage, applicationDate, overallScore, referralStatus, assessmentStatus) {
		this.name = name;
		this.applicationStage = applicationStage;
		this.applicationDate = applicationDate;
		this.overallScore = overallScore;
		this.referralStatus = referralStatus;
		this.assessmentStatus = assessmentStatus;
	}
	// getter and setter for the name field 
	// getter 
	get name() {
		console.log("Getting name field" + this.name);
		return this.name;
	}

	// setter
	set name(name) {
		console.log("Setting name field " + this.name + " to " + name);
		this.name = name;
	}

	// getter and setter for the applicationStage field
	// getter
	get applicationStage() {
		console.log("Getting applicationStage field " + this.applicationStage);
		return this.applicationStage;
	}

	// setter
	set applicationStage(applicationStage) {
		console.log("Setting applicationStage  field " + this.applicationStage + " to " + applicationStage);
		this.applicationStage = applicationStage;
	}

	// getter and setter for the applicationDate field
	// getter
	get applicationDate() {
		console.log("Getting applicationDate field " + this.applicationDate);
		return this.applicationDate;
	}

	// setter
	set applicationDate(applicationDate) {
		console.log("Setting applicationDate field " + this.applicationDate + " to " + applicationDate)
		this.applicationDate = applicationDate;
	}

	// getter and setter for the overallScore field
	// getter
	get overallScore() {
		console.log("Getting overallScore field " + this.overallScore);
		return this.overallScore;
	}

	// setter
	set overallScore(overallScore) {
		console.log("Setting overallScore field " + this.overallScore + " to " + overallScore);
		this.overallScore = overallScore;
	}

	// getter and setter for the referralStatus field
	// getter
	get referralStatus() {
		console.log("Getting referralStatus field " + this.referralStatus);
		return this.referralStatus;
	}

	// setter
	set referralStatus(referralStatus) {
		console.log("Setting referralStatus " + this.referralStatus + " to " + referralStatus);
		this.referralStatus = referralStatus;
	}

	// getter and setter for the assessmentStatus field
	// getter
	get assessmentStatus() {
		console.log("Getting assessmentStatus field " + this.assessmentStatus);
		return this.assessmentStatus;
	}

	// setter 
	set assessmentStatus(assessmentStatus) {
		console.log("Setting assessmentStatus field " + this.assessmentStatus + " to " + assessmentStatus);
		this.assessmentStatus = assessmentStatus;
	}
}
