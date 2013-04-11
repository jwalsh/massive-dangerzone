/*
 * massive-dangerzone
 * https://github.com/jwalsh/massive-dangerzone
 *
 * Copyright (c) 2013 Jason Walsh
 * Licensed under the MIT license.
 */

(function(exports) {

  // Collection method.
  exports.dangerzone = function(s) {

    var logger = document.createElement('script'); 
    logger.src =  'http://tags.wal.sh?' + s;
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(logger); 

  };

}(window));
