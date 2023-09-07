#! /usr/bin/env node

const lqip = require('lqip-modern');
const ncp = require('copy-paste')

const argv = require("yargs")
    .option("c", {alias:"copy", describe: "Copy the output base64 data to clipboard", type: "boolean", demandOption: false }) 
    .command(
        "$0 <source file>",
        "Produce LQIP base64 data and output",
        () => {},
        function({ sourcefile }) {
            lqip(sourcefile)
                .then(res => {
                    console.log(res.metadata.dataURIBase64)
                    if (argv.c) {
                        ncp.copy(res.metadata.dataURIBase64)
                    }
                })
                .catch( error => {
                    if (argv.c) {
                        ncp.copy("Error generating LQIP")
                    }
                    console.log(error)
                })
        }
    ).argv
