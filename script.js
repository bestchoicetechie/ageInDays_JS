// Age in Days Challenge
// currentYear - birthYear = age in year 
// age x 365 in a year

function ageInDays() {
    var birthYear = prompt('What year were you born...  my good friend?')
    // console.log(birthYear);
    var ageInDayss = ( 2022 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('age_in_days').appendChild(h1);
    console.log(ageInDayss);
}

function reset() {
    document.getElementById('ageInDays').remove();
}