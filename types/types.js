var voterInner = document.getElementById('voter-inner');
var voterForm = document.getElementById('voter-form');
var property = document.getElementById('property');
var value = document.getElementById('value');
var formButton = document.getElementById('form-button');
var submit = document.getElementById('submit');
var reset = document.getElementById('reset');
var success = document.getElementById('success');
var wrong = document.getElementById('wrong');
var voterListEl = document.getElementById('voter-list');
var addVoter = function (voter, voters) {
    voters.push(voter);
};
var populateTodoList = function (voters) {
    voterListEl.innerHTML = '';
    voters.forEach(function (el) { return voterListEl.innerHTML += "<tr><td>".concat(el.name, "</td><td>").concat(el.age, "</td><td>").concat(el.registered, "</td></tr>"); });
};
var voterObj = {};
var voterList = [];
voterForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!voterObj[property.value]) {
        voterInner.innerHTML += "<p style=\"text-indent: 40px;\">".concat(property.value, ": ").concat(/^\d+$/.test(value.value) ? value.value : value.value === 'true' ? true : value.value === 'false' ? false : "\"".concat(value.value, "\""), ",<p>");
        voterObj[property.value] = /^\d+$/.test(value.value) ? Number(value.value) : value.value === 'true' ? true : value.value === 'false' ? false : value.value;
    }
    property.value = '';
    value.value = '';
});
submit.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(voterObj);
    var voterKeys = Object.keys(voterObj);
    if (voterKeys.length === 3
        && voterKeys.includes('name')
        && voterKeys.includes('age')
        && voterKeys.includes('registered')
        && typeof voterObj.name === 'string'
        && typeof voterObj.age === 'number'
        && typeof voterObj.registered === 'boolean') {
        success.style.display = 'contents';
        reset.style.visibility = 'visible';
        var newVoter = voterObj;
        addVoter(newVoter, voterList);
        populateTodoList(voterList);
        voterObj = {};
        voterInner.innerHTML = '';
        property.value = '';
        value.value = '';
    }
    else {
        wrong.style.display = 'contents';
        reset.style.visibility = 'visible';
    }
    submit.style.visibility = 'hidden';
});
reset.addEventListener('click', function (event) {
    success.style.display = 'none';
    wrong.style.display = 'none';
    reset.style.visibility = 'hidden';
    submit.style.visibility = 'visible';
    voterObj = {};
    voterInner.innerHTML = '';
    property.value = '';
    value.value = '';
});
