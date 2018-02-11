#!/usr/bin/env node
'use strict';
const commander = require('commander');
var packageinfo = require("./package");
var path = require("path");
commander
    .version(packageinfo.version)
    .description(packageinfo.description)
    .option('-u, --upload','The project upload')
    .option('-i, --init','Initialize the project')
    .option('build, -b [type]','build the project')
    .option('fetch, -f [name]','fetch the project')
    .parse(process.argv);

/*
@Seidon for you....
 */
