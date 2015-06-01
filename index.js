#!/usr/bin/env node

var Youtube = require("youtube-api"),
    fs = require('fs'),
    c = require('chalk'),
    pj = require('prettyjson');


var Cmds = {
    convert: 'ffmpeg -i MP3 -loop 1 -r 1 -i JPG  -c:a copy -shortest MOV',
};