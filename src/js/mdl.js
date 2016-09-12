/*
* @Author: laihaibo
* @Date:   2016-09-12 20:39:30
* @Last Modified by:   laihaibo
* @Last Modified time: 2016-09-12 20:39:50
*/

'use strict';

window.onload=function(){
  var xixidialog = document.querySelector('#xixidialog');
  var showDialogButton = document.querySelector('#xixi');
  if (!xixidialog.showModal) {
    dialogPolyfill.registerDialog(xixidialog);
  }
  showDialogButton.addEventListener('click', function () {
    xixidialog.showModal();
  });
  xixidialog.querySelector('.close').addEventListener('click', function () {
    xixidialog.close();
  });
  // showDialogButton.addEventListener('click', function () {
  //   xixidialog.showModal();
  //   /* Or dialog.show(); to show the dialog without a backdrop. */
  // });
}
