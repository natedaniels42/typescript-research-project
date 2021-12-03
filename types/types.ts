const voterInner3: HTMLElement = document.getElementById('voter-inner') as HTMLElement;
const voterForm3: HTMLElement = document.getElementById('voter-form') as HTMLElement;
const property3: HTMLInputElement = document.getElementById('property3') as HTMLInputElement;
const value3: HTMLInputElement = document.getElementById('value3') as HTMLInputElement;
const formButton3: HTMLElement = document.getElementById('form-button') as HTMLElement;
const submit3: HTMLElement = document.getElementById('submit3') as HTMLElement;
const reset3: HTMLElement = document.getElementById('reset3') as HTMLElement;
const success3: HTMLElement = document.getElementById('success3') as HTMLElement;
const wrong3: HTMLElement = document.getElementById('wrong3') as HTMLElement; 
const voterListEl3: HTMLElement = document.getElementById('voter-list') as HTMLElement;

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

const populateVoterList = (voters: Voter[]): void => {
    voterListEl3.innerHTML = '';
    voters.forEach(el => voterListEl3.innerHTML += `<tr><td>${el.name}</td><td>${el.age}</td><td>${el.registered}</td></tr>`);
}

let voterObj: Partial<Voter> = {};
const voterList: Voter[] = [];

voterForm3.addEventListener('submit3', (event) => {
    event.preventDefault();

    if (!voterObj[property3.value]) {
        voterInner3.innerHTML += `<p style="text-indent: 40px;">${property3.value}: ${/^\d+$/.test(value3.value) ? value3.value : value3.value === 'true' ? true : value3.value === 'false' ? false : `"${value3.value}"`},<p>`;
        voterObj[property3.value] = /^\d+$/.test(value3.value) ? Number(value3.value) : value3.value === 'true' ? true : value3.value === 'false' ? false : value3.value;
    }
    property3.value = '';
    value3.value = '';
})

submit3.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(voterObj);
    const voterKeys = Object.keys(voterObj);
    if (voterKeys.length === 3 
        && voterKeys.indexOf('name') !== -1
        && voterKeys.indexOf('age') !== -1
        && voterKeys.indexOf('registered') !== -1
        && typeof voterObj.name === 'string'
        && typeof voterObj.age === 'number' 
        && typeof voterObj.registered === 'boolean') {
        success3.style.display = 'flex';
        reset3.style.visibility = 'visible';
        const newVoter: Voter = voterObj as Voter;
        addVoter(newVoter, voterList);
        populateVoterList(voterList);
        voterObj = {};
        voterInner3.innerHTML = '';
        property3.value = '';
        value3.value = '';
    } else {
        wrong3.style.display = 'flex';
        reset3.style.visibility = 'visible';
    }   
    submit3.style.visibility = 'hidden';
})

reset3.addEventListener('click', (event) => {
    success3.style.display = 'none';
    wrong3.style.display = 'none';
    reset3.style.visibility = 'hidden';
    submit3.style.visibility = 'visible';
    voterObj = {};
    voterInner3.innerHTML = '';
    property3.value = '';
    value3.value = '';
})