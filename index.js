/** @format */

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileSync = util.promisify(fs.appendFile);

// array of questions for user
const questions = [
	{
		type: "input",
		name: "title",
		message: "What is the title of your project?",
	},
	{
		type: "input",
		name: "description",
		message: "Please enter a description of your project:",
	},
	{
		type: "input",
		name: "install",
		message: "Please enter installation instructions for your project:",
	},
	{
		type: "input",
		name: "usage",
		message: "Please enter helpful usage information about your project:",
	},
	{
		type: "input",
		name: "guide",
		message: "Please enter contribution guidelines your project may have:",
	},
	{
		type: "input",
		name: "test",
		message: "Please enter instructions on how to run tests for your project:",
	},
	{
		type: "list",
		name: "license",
		message:
			"Choose which open source license you would like to use for your project:",
		choices: ["None", "MIT License", "ISC License"],
	},
	{
		type: "input",
		name: "github",
		message: "Please enter your GitHub Username:",
	},
	{
		type: "input",
		name: "email",
		message: "Please enter your Email Address:",
	},
];

// function to write README file
////////
////////
////////
////////
////////
////////THIS BELOW IS WHERE YOU LEFT OFF FROM LAST NIGHT :)
function writeToFile(fileName, data) {
	return writeFileAsync("README.md", questions, function (err) {
		if (err) {
			console.log(err);
		} else {
			console.log("README file successfully created!");
		}
	});
}

// function to initialize program
function init() {
	inquirer.prompt(questions).then((response) => {
		fs.appendFileSync("README.md", "#" + response.title + "\n", function (err) {
			if (err) {
				console.log(err);
			} else {
				console.log("Title of the project was successfully appended!");
			}
		});

		fs.appendFileSync("README.md", response.description + "\n", function (err) {
			if (err) {
				console.log(err);
			} else {
				console.log("Description of project was successfully appended!");
			}
		});

		fs.appendFileSync(
			"README.md",
			"## Installation" + "\n" + response.install + "\n",
			function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log(
						"Instructions for installation were successfully appended!"
					);
				}
			}
		);

		fs.appendFileSync(
			"README.md",
			"## Usage" + "\n" + response.usage + "\n",
			function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("Usage Information was successfully appended!");
				}
			}
		);

		fs.appendFileSync(
			"README.md",
			"## Contribution Guidelines" + "\n" + response.guide + "\n",
			function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("Contribution Guidelines were successfully appended!");
				}
			}
		);

		fs.appendFileSync(
			"README.md",
			"## Testing" + "\n" + response.test + "\n",
			function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log(
						"Instructions for running Tests were successfully appended!"
					);
				}
			}
		);

		fs.appendFileSync(
			"README.md",
			"## Licensing" + "\n" + response.license + "\n",
			function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("The chosen License was successfully appended!");
				}
			}
		);

		fs.appendFileSync(
			"README.md",
			"## Questions" + "\n" + response.github + "\n",
			function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("Your GitHub Username was successfully appended!");
				}
			}
		);

		fs.appendFileSync(
			"README.md",
			"## Questions" + "\n" + response.email + "\n",
			function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("Your Email Address was successfully appended!");
				}
			}
		);
	});
}

// function call to initialize program
init();
