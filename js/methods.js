'use strict';

function fancySchmancy() {
  return $('p').addClass('iAmFancy');
}

function addText(string) {
  return $('p:nth-child(2)').append(string);
}

function showDolphin() {
  $('img').show();
}

function hideImage() {
  $("img[alt='pie in face']").hide();
}

function fadeIt() {
  $('#favorite-snacks').fadeIn(2000);
}

function fadeItOut() {
  $('p:nth-child(2)').fadeOut(0);
}

function findItByClass(string) {
  debugger;
  return $(string).hasClass('flatironLink');
}

function formValue() {
  return $('input:last').val();
}