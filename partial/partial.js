var voterInner2 = document.getElementById('voter-inner2');
var voterForm2 = document.getElementById('voter-form2');
var property2 = document.getElementById('property2');
var value2 = document.getElementById('value2');
var formButton2 = document.getElementById('form-button2');
var submit2 = document.getElementById('submit2');
var reset2 = document.getElementById('reset2');
var success2 = document.getElementById('success2');
var wrong2 = document.getElementById('wrong2');
var voterListEl2 = document.getElementById('voter-list2');
var change = document.getElementById('change');
var begin = document.getElementById('begin');
var addVoterPartial = function (voter, voters) {
    voters.push(voter);
};
var populateVoterListPartial = function (voters) {
    voterListEl2.innerHTML = '';
    voters.forEach(function (el) { return voterListEl2.innerHTML += "<tr><td>".concat(el.name, "</td><td>").concat(el.age, "</td><td>").concat(el.registered, "</td></tr>"); });
};
var voterObjPartial = {};
var voterListPartial = [];
voterForm2.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!voterObjPartial[property2.value]) {
        voterInner2.innerHTML += "<p style=\"text-indent: 40px;\">".concat(property2.value, ": ").concat(/^\d+$/.test(value2.value) ? value2.value : value2.value === 'true' ? true : value2.value === 'false' ? false : "\"".concat(value2.value, "\""), ",<p>");
        voterObjPartial[property2.value] = /^\d+$/.test(value2.value) ? Number(value2.value) : value2.value === 'true' ? true : value2.value === 'false' ? false : value2.value;
    }
    property2.value = '';
    value2.value = '';
});
change.addEventListener('change', function (event) {
    if (change.value === 'Partial') {
        begin.innerHTML = 'const voter: Partial&ltVoter&gt = {';
    }
    else {
        begin.innerHTML = 'const voter: Required&ltVoter&gt = {';
    }
});
submit2.addEventListener('click', function (event) {
    event.preventDefault();
    var voterKeys = Object.keys(voterObjPartial);
    if (change.value === 'Required') {
        if (voterKeys.length === 3
            && voterKeys.indexOf('name') !== -1
            && voterKeys.indexOf('age') !== -1
            && voterKeys.indexOf('registered') !== -1
            && typeof voterObjPartial.name === 'string'
            && typeof voterObjPartial.age === 'number'
            && typeof voterObjPartial.registered === 'boolean') {
            success2.style.display = 'flex';
            reset2.style.visibility = 'visible';
            var newVoter = voterObjPartial;
            addVoterPartial(newVoter, voterListPartial);
            populateVoterListPartial(voterListPartial);
            voterObjPartial = {};
            voterInner2.innerHTML = '';
            property2.value = '';
            value2.value = '';
        }
        else {
            wrong2.style.display = 'flex';
            reset2.style.visibility = 'visible';
        }
    }
    else {
        if (!voterKeys.some(function (key) { return key !== 'name' && key !== 'age' && key !== 'registered'; })
            && voterKeys.map(function (key) {
                if (key === 'name' && typeof voterObjPartial[key] !== 'string') {
                    return false;
                }
                if (key === 'age' && typeof voterObjPartial[key] !== 'number') {
                    return false;
                }
                if (key === 'registered' && typeof voterObjPartial[key] !== 'boolean') {
                    return false;
                }
                return true;
            }).every(function (item) { return item === true; })) {
            success2.style.display = 'flex';
            reset2.style.visibility = 'visible';
            var newVoter = voterObjPartial;
            addVoterPartial(newVoter, voterListPartial);
            populateVoterListPartial(voterListPartial);
            voterObjPartial = {};
            voterInner2.innerHTML = '';
            property2.value = '';
            value2.value = '';
        }
        else {
            wrong2.style.display = 'flex';
            reset2.style.visibility = 'visible';
        }
    }
    submit2.style.visibility = 'hidden';
});
reset2.addEventListener('click', function (event) {
    success2.style.display = 'none';
    wrong2.style.display = 'none';
    reset2.style.visibility = 'hidden';
    submit2.style.visibility = 'visible';
    voterObjPartial = {};
    voterInner2.innerHTML = '';
    property2.value = '';
    value2.value = '';
});
