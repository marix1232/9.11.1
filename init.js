let generatedData = {};

function generateData() {
    const gender = Math.random() < 0.5 ? GENDER_MALE : GENDER_FEMALE;
    const firstName = randomFirstName(gender);
    const surname = randomSurname(gender);
    const patronymic = randomPatronymic(gender);
    const profession = randomProfession(gender);
    const birthDate = randomBirthDate();

    generatedData = {
        gender,
        firstName,
        surname,
        patronymic,
        profession,
        birthDate
    };

    displayData();
}

function displayData() {
    const output = document.getElementById('output');
    output.innerHTML = `
        <p>Пол: ${generatedData.gender}</p>
        <p>ФИО: ${generatedData.firstName} ${generatedData.surname} ${generatedData.patronymic}</p>
        <p>Профессия: ${generatedData.profession}</p>
        <p>Дата рождения: ${generatedData.birthDate}</p>
    `;
}

function clearData() {
    generatedData = {};
    document.getElementById('output').innerHTML = '';
}

document.getElementById('generateBtn').addEventListener('click', generateData);
document.getElementById('clearBtn').addEventListener('click', clearData);
