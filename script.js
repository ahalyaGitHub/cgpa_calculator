
function showHowToUse() {
    var section = document.getElementById('section');
    section.scrollIntoView({ behavior: 'smooth' });
}

let grades = [];
let credits = [];
let semesters = [];

function clearCourses() {
    if (grades.length === 0 && credits.length === 0) {
        const p = document.createElement('p');
        p.textContent = 'Input Required';
        p.style.color = 'red';
        const three = document.getElementsByTagName('courseListGpa');
        courseListGpa.insertAdjacentElement('afterend', p);
        document.getElementById('displayGPA').innerHTML = '';
        setTimeout(function () {
            p.remove();
        }, 2000);
    } else {
        grades = [];
        credits = [];
        document.getElementById('displayGPA').innerHTML = '';
        document.getElementById('displayGPAEntries').innerHTML = '';
    }

}

function clearSemesters() {
    if (semesters.length === 0) {
        const p = document.createElement('p');
        p.textContent = 'Input Required';
        p.style.color = 'red';
        const three = document.getElementById('courseListCgpa');
        courseListCgpa.insertAdjacentElement('afterend', p);
        document.getElementById('displayCGPA').innerHTML = '';
        setTimeout(function () { p.remove(); }, 2000);
    } else {
        semesters = [];
        document.getElementById('displayCGPA').innerHTML = '';
        document.getElementById('displayCGPAEntries').innerHTML = '';
    }

}

function addCourses() {
    grade = document.getElementById('grade').value;
    credit = document.getElementById('credit').value;
    sem = document.getElementById('sem').value;
    grades.push(grade);
    credits.push(credit);
    let displayGPAEntries = document.getElementById('displayGPAEntries');
    let entryDiv = document.createElement('div');
    let semesterElement = document.createElement('span');
    semesterElement.textContent = 'Semester: ' + sem + ' ';
    let gradeElement = document.createElement('span');
    gradeElement.textContent = 'Grade: ' + grade + ' ';
    let creditElement = document.createElement('span');
    creditElement.textContent = 'Credit: ' + credit + ' ';
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        let index = Array.from(entryDiv.parentNode.children).indexOf(entryDiv);
        grades.splice(index, 1);
        credits.splice(index, 1);
        // Remove the entry div
        displayGPAEntries.removeChild(entryDiv);
    }
    entryDiv.appendChild(semesterElement);
    entryDiv.appendChild(gradeElement);
    entryDiv.appendChild(creditElement);
    entryDiv.appendChild(deleteButton);
    displayGPAEntries.appendChild(entryDiv);
}

function addSemesters() {
    semester = document.getElementById('semester').value;

    semesters.push(semester);

    let displayCGPAEntries = document.getElementById('displayCGPAEntries');

    let entryDiv = document.createElement('div');

    let semesterElement = document.createElement('span');
    semesterElement.textContent = 'Semester GPA: ' + semester + ' ';

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.onclick = function () {
        let index = Array.from(entryDiv.parentNode.children).indexOf(entryDiv);
        semesters.splice(index, 1);
        // Remove the entry div
        displayCGPAEntries.removeChild(entryDiv);
    }
    entryDiv.appendChild(semesterElement);
    entryDiv.appendChild(deleteButton);
    displayCGPAEntries.appendChild(entryDiv);
}

function calculateGPA() {
    let totalCreditPoints = 0;
    let totalCredits = 0;

    // Calculate total credit points and total credits
    for (let i = 0; i < grades.length; i++) {
        totalCreditPoints += parseInt(grades[i]) * parseInt(credits[i]);
        totalCredits += parseInt(credits[i]);
    }

    // Calculate GPA
    let gpa = totalCreditPoints / totalCredits;

    // Display GPA
    document.getElementById('displayGPA').textContent = gpa.toFixed(2);

}

function calculateCGPA() {
    let totalSemesterPoints = 0;

    for (let i = 0; i < semesters.length; i++) {
        totalSemesterPoints += Number(semesters[i]);
    }
    let cgpa = totalSemesterPoints / semesters.length;

    document.getElementById('displayCGPA').textContent = cgpa.toFixed(2);

}