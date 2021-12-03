const voterInner: HTMLElement = document.getElementById('voter-inner') as HTMLElement;
const voterForm: HTMLElement = document.getElementById('voter-form') as HTMLElement;
const property: HTMLInputElement = document.getElementById('property') as HTMLInputElement;
const value: HTMLInputElement = document.getElementById('value') as HTMLInputElement;
const formButton: HTMLElement = document.getElementById('form-button') as HTMLElement;
const submit: HTMLElement = document.getElementById('submit') as HTMLElement;
const reset: HTMLElement = document.getElementById('reset') as HTMLElement;
const success: HTMLElement = document.getElementById('success') as HTMLElement;
const wrong: HTMLElement = document.getElementById('wrong') as HTMLElement; 
const voterListEl: HTMLElement = document.getElementById('voter-list') as HTMLElement;

type Voter = {
    name: string,
    age: number,
    registered: boolean
}

type VoterFunc = {
    (voter: Voter, voters: Voter[]): void
}

const addVoter: VoterFunc = (voter: Voter, voters: Voter[]) => {
    voters.push(voter);
}

const populateTodoList = (voters: Voter[]): void => {
    voterListEl.innerHTML = '';
    voters.forEach(el => voterListEl.innerHTML += `<tr><td>${el.name}</td><td>${el.age}</td><td>${el.registered}</td></tr>`);
}

let voterObj: Partial<Voter> = {};
const voterList: Voter[] = [];

voterForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!voterObj[property.value]) {
        voterInner.innerHTML += `<p style="text-indent: 40px;">${property.value}: ${/^\d+$/.test(value.value) ? value.value : value.value === 'true' ? true : value.value === 'false' ? false : `"${value.value}"`},<p>`;
        voterObj[property.value] = /^\d+$/.test(value.value) ? Number(value.value) : value.value === 'true' ? true : value.value === 'false' ? false : value.value;
    }
    property.value = '';
    value.value = '';
})

submit.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(voterObj);
    const voterKeys = Object.keys(voterObj);
    if (voterKeys.length === 3 
        && voterKeys.includes('name')
        && voterKeys.includes('age')
        && voterKeys.includes('registered')
        && typeof voterObj.name === 'string'
        && typeof voterObj.age === 'number' 
        && typeof voterObj.registered === 'boolean') {
        success.style.display = 'contents';
        reset.style.visibility = 'visible';
        const newVoter: Voter = voterObj as Voter;
        addVoter(newVoter, voterList);
        populateTodoList(voterList);
        voterObj = {};
        voterInner.innerHTML = '';
        property.value = '';
        value.value = '';
    } else {
        wrong.style.display = 'contents';
        reset.style.visibility = 'visible';
    }   
    submit.style.visibility = 'hidden';
})

reset.addEventListener('click', (event) => {
    success.style.display = 'none';
    wrong.style.display = 'none';
    reset.style.visibility = 'hidden';
    submit.style.visibility = 'visible';
    voterObj = {};
    voterInner.innerHTML = '';
    property.value = '';
    value.value = '';
})