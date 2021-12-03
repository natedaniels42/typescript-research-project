var voterInner3 = document.getElementById('voter-inner');
var voterForm3 = document.getElementById('voter-form');
var property3 = document.getElementById('property3');
var value3 = document.getElementById('value3');
var formButton3 = document.getElementById('form-button');
var submit3 = document.getElementById('submit3');
var reset3 = document.getElementById('reset3');
var success3 = document.getElementById('success3');
var wrong3 = document.getElementById('wrong3');
var voterListEl3 = document.getElementById('voter-list');
var addVoter = function (voter, voters) {
    voters.push(voter);
};
var populateVoterList = function (voters) {
    voterListEl3.innerHTML = '';
    voters.forEach(function (el) { return voterListEl3.innerHTML += "<tr><td>".concat(el.name, "</td><td>").concat(el.age, "</td><td>").concat(el.registered, "</td></tr>"); });
};
var voterObj = {};
var voterList = [];
voterForm3.addEventListener('submit3', function (event) {
    event.preventDefault();
    if (!voterObj[property3.value]) {
        voterInner3.innerHTML += "<p style=\"text-indent: 40px;\">".concat(property3.value, ": ").concat(/^\d+$/.test(value3.value) ? value3.value : value3.value === 'true' ? true : value3.value === 'false' ? false : "\"".concat(value3.value, "\""), ",<p>");
        voterObj[property3.value] = /^\d+$/.test(value3.value) ? Number(value3.value) : value3.value === 'true' ? true : value3.value === 'false' ? false : value3.value;
    }
    property3.value = '';
    value3.value = '';
});
submit3.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(voterObj);
    var voterKeys = Object.keys(voterObj);
    if (voterKeys.length === 3
        && voterKeys.indexOf('name') !== -1
        && voterKeys.indexOf('age') !== -1
        && voterKeys.indexOf('registered') !== -1
        && typeof voterObj.name === 'string'
        && typeof voterObj.age === 'number'
        && typeof voterObj.registered === 'boolean') {
        success3.style.display = 'flex';
        reset3.style.visibility = 'visible';
        var newVoter = voterObj;
        addVoter(newVoter, voterList);
        populateVoterList(voterList);
        voterObj = {};
        voterInner3.innerHTML = '';
        property3.value = '';
        value3.value = '';
    }
    else {
        wrong3.style.display = 'flex';
        reset3.style.visibility = 'visible';
    }
    submit3.style.visibility = 'hidden';
});
reset3.addEventListener('click', function (event) {
    success3.style.display = 'none';
    wrong3.style.display = 'none';
    reset3.style.visibility = 'hidden';
    submit3.style.visibility = 'visible';
    voterObj = {};
    voterInner3.innerHTML = '';
    property3.value = '';
    value3.value = '';
});
