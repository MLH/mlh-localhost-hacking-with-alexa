/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.  It's intended to be used at an MLH Localhost
 * Workshop.
 *
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/mlh/mlh-localhost-hacking-with-alexa
 **/

'use strict';

// TODO: replace with facts about yourself
const FACTS = [
  "Major League Hacking is commonly called M, L, H.",
  "Major League Hacking's mission is to empower hackers.",
  "Over 65,000 student hackers participated in Major League Hacking hackathons in 2017.",
  "Major League Hacking was founded in 2013 by Mike Swift and Jon Gottfried.",
  "Hackers created over 12,000 projects at Major League Hacking hackathons in 2017.",
  "Over 200 universities and high schools around the world hosted Major League Hacking hackathons in 2017.",
  "Major League Hacking is headquartered in New York City."
];

var handlers = {
  'LaunchRequest': function () { this.emit('GetFact'); },
  'GetNewFactIntent': function () { this.emit('GetFact'); },
  'GetFact': function() {
    // Randomly select a fact from the array
    const factIndex = Math.floor(Math.random() * FACTS.length);
    const randomFact = FACTS[factIndex];

    // Create speech output
    const speechOutput = "Here's your fact: " + randomFact;
    this.emit(':tellWithCard', speechOutput, "Major League Hacking (MLH) Facts", randomFact);
  }
};

// This is the function that AWS Lambda calls every time Alexa uses your skill.
exports.handler = function(event, context, callback) {
  // Include the AWS Alexa Library.
  const Alexa = require("alexa-sdk");

  // Create an instance of the Alexa library and pass it the requested command.
  var alexa = Alexa.handler(event, context);

  // Give our Alexa instance instructions for handling commands and execute the request.
  alexa.registerHandlers(handlers);
  alexa.execute();
};
