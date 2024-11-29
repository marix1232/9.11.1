const GENDER_MALE = 'Мужчина';
const GENDER_FEMALE = 'Женщина';

const firstNames = {
    male: ['Александр', 'Дмитрий', 'Сергей'],
    female: ['Елена', 'Анна', 'Мария']
};

const surnames = ['Иванов', 'Петров', 'Сидоров'];
const femaleSurnames = surnames.map(surname => surname + 'а');

const patronymics = {
    male: ['Александрович', 'Дмитриевич', 'Сергеевич'],
    female: ['Александровна', 'Дмитриевна', 'Сергеевна']
};

const professions = {
    male: ['Слесарь', 'Шахтёр', 'Солдат'],
    female: ['Учитель', 'Врач', 'Инженер']
};

function randomIntNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFirstName(gender) {
    return gender === GENDER_MALE
        ? firstNames.male[randomIntNumber(0, firstNames.male.length - 1)]
        : firstNames.female[randomIntNumber(0, firstNames.female.length - 1)];
}

function randomSurname(gender) {
    return gender === GENDER_MALE
        ? surnames[randomIntNumber(0, surnames.length - 1)]
        : femaleSurnames[randomIntNumber(0, femaleSurnames.length - 1)];
}

function randomPatronymic(gender) {
    return gender === GENDER_MALE
        ? patronymics.male[randomIntNumber(0, patronymics.male.length - 1)]
        : patronymics.female[randomIntNumber(0, patronymics.female.length - 1)];
}

function randomProfession(gender) {
    return gender === GENDER_MALE
        ? professions.male[randomIntNumber(0, professions.male.length - 1)]
        : professions.female[randomIntNumber(0, professions.female.length - 1)];
}

function randomBirthDate() {
    const year = randomIntNumber(1950, 2000);
    const month = randomIntNumber(0, 11);
    const day = randomIntNumber(1, new Date(year, month + 1, 0).getDate());
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    return `${day} ${months[month]} ${year}`;
}
