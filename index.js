/** @format */

// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

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
		type: "input",
		name: "license",
		message:
			"Choose (retype) which open source license you would like to use for your " +
			"project: None, MIT License, or ISC License.",
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
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
