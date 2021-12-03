const voterInner2: HTMLElement = document.getElementById('voter-inner2') as HTMLElement;
const voterForm2: HTMLElement = document.getElementById('voter-form2') as HTMLElement;
const property2: HTMLInputElement = document.getElementById('property2') as HTMLInputElement;
const value2: HTMLInputElement = document.getElementById('value2') as HTMLInputElement;
const formButton2: HTMLElement = document.getElementById('form-button2') as HTMLElement;
const submit2: HTMLElement = document.getElementById('submit2') as HTMLElement;
const reset2: HTMLElement = document.getElementById('reset2') as HTMLElement;
const success2: HTMLElement = document.getElementById('success2') as HTMLElement;
const wrong2: HTMLElement = document.getElementById('wrong2') as HTMLElement; 
const voterListEl2: HTMLElement = document.getElementById('voter-list2') as HTMLElement;
const change: HTMLInputElement = document.getElementById('change') as HTMLInputElement;
const begin: HTMLElement = document.getElementById('begin') as HTMLElement;

type VoterPartial = {
    name: string,
    age: number,
    registered?: boolean
}

type VoterFuncPartial = {
    (voter: VoterPartial, voters: VoterPartial[]): void
}

const addVoterPartial: VoterFuncPartial = (voter: VoterPartial, voters: VoterPartial[]) => {
    voters.push(voter);
}

const populateVoterListPartial = (voters: VoterPartial[]): void => {
    voterListEl2.innerHTML = '';
    voters.forEach(el => voterListEl2.innerHTML += `<tr><td>${el.name}</td><td>${el.age}</td><td>${el.registered}</td></tr>`);
}

let voterObjPartial: Partial<VoterPartial> = {};
const voterListPartial: VoterPartial[] = [];

voterForm2.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!voterObjPartial[property2.value]) {
        voterInner2.innerHTML += `<p style="text-indent: 40px;">${property2.value}: ${/^\d+$/.test(value2.value) ? value2.value : value2.value === 'true' ? true : value2.value === 'false' ? false : `"${value2.value}"`},<p>`;
        voterObjPartial[property2.value] = /^\d+$/.test(value2.value) ? Number(value2.value) : value2.value === 'true' ? true : value2.value === 'false' ? false : value2.value;
    }
    property2.value = '';
    value2.value = '';
})

change.addEventListener('change', (event) => {
    if (change.value === 'Partial') {
        begin.innerHTML = 'const voter: Partial&ltVoter&gt = {';
    } else {
        begin.innerHTML = 'const voter: Required&ltVoter&gt = {'
    }
})

submit2.addEventListener('click', (event) => {
    event.preventDefault();

    const voterKeys = Object.keys(voterObjPartial);
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
            const newVoter: VoterPartial = voterObjPartial as VoterPartial;
            addVoterPartial(newVoter, voterListPartial);
            populateVoterListPartial(voterListPartial);
            voterObjPartial = {};
            voterInner2.innerHTML = '';
            property2.value = '';
            value2.value = '';
        } else {
            wrong2.style.display = 'flex';
            reset2.style.visibility = 'visible';
        }   
    } else {
        if (!voterKeys.some(key => key !== 'name' && key !== 'age' && key !== 'registered')
            && voterKeys.map(key => {
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
            }).every(item => item === true)) {
                success2.style.display = 'flex';
                reset2.style.visibility = 'visible';
                const newVoter: VoterPartial = voterObjPartial as VoterPartial;
                addVoterPartial(newVoter, voterListPartial);
                populateVoterListPartial(voterListPartial);
                voterObjPartial = {};
                voterInner2.innerHTML = '';
                property2.value = '';
                value2.value = '';
        } else {
            wrong2.style.display = 'flex';
            reset2.style.visibility = 'visible';
        }
    }
    submit2.style.visibility = 'hidden';
})

reset2.addEventListener('click', (event) => {
    success2.style.display = 'none';
    wrong2.style.display = 'none';
    reset2.style.visibility = 'hidden';
    submit2.style.visibility = 'visible';
    voterObjPartial = {};
    voterInner2.innerHTML = '';
    property2.value = '';
    value2.value = '';
})
