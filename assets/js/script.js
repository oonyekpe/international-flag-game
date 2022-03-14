const flags = {
    "AD": "Andorra",
    "AE": "United Arab Emirates",
    "AF": "Afghanistan",
    "AG": "Antigua and Barbuda",
    "AI": "Anguilla",
    "AL": "Albania",
    "AM": "Armenia",
    "AO": "Angola",
    "AQ": "Antarctica",
    "AR": "Argentina",
    "AS": "American Samoa",
    "AT": "Austria",
    "AU": "Australia",
    "AW": "Aruba",
    "AX": "\u00c5land Islands",
    "AZ": "Azerbaijan",
    "BA": "Bosnia and Herzegovina",
    "BB": "Barbados",
    "BD": "Bangladesh",
    "BE": "Belgium",
    "BF": "Burkina Faso",
    "BG": "Bulgaria",
    "BH": "Bahrain",
    "BI": "Burundi",
    "BJ": "Benin",
    "BL": "Saint Barthélemy",
    "BM": "Bermuda",
    "BN": "Brunei Darussalam",
    "BO": "Bolivia, Plurinational State of",
    "BQ": "Caribbean Netherlands",
    "BR": "Brazil",
    "BS": "Bahamas",
    "BT": "Bhutan",
    "BV": "Bouvet Island",
    "BW": "Botswana",
    "BY": "Belarus",
    "BZ": "Belize",
    "CA": "Canada",
    "CC": "Cocos (Keeling) Islands",
    "CD": "Congo, the Democratic Republic of the",
    "CF": "Central African Republic",
    "CG": "Republic of the Congo",
    "CH": "Switzerland",
    "CI": "C\u00f4te d'Ivoire",
    "CK": "Cook Islands",
    "CL": "Chile",
    "CM": "Cameroon",
    "CN": "China (People's Republic of China)",
    "CO": "Colombia",
    "CR": "Costa Rica",
    "CU": "Cuba",
    "CV": "Cape Verde",
    "CW": "Cura\u00e7ao",
    "CX": "Christmas Island",
    "CY": "Cyprus",
    "CZ": "Czech Republic",
    "DE": "Germany",
    "DJ": "Djibouti",
    "DK": "Denmark",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "DZ": "Algeria",
    "EC": "Ecuador",
    "EE": "Estonia",
    "EG": "Egypt",
    "EH": "Western Sahara",
    "ER": "Eritrea",
    "ES": "Spain",
    "ET": "Ethiopia",
    "EU": "Europe",
    "FI": "Finland",
    "FJ": "Fiji",
    "FK": "Falkland Islands (Malvinas)",
    "FM": "Micronesia, Federated States of",
    "FO": "Faroe Islands",
    "FR": "France",
    "GA": "Gabon",
    "GB-ENG": "England",
    "GB-NIR": "Northern Ireland",
    "GB-SCT": "Scotland",
    "GB-WLS": "Wales",
    "GB": "United Kingdom",
    "GD": "Grenada",
    "GE": "Georgia",
    "GF": "French Guiana",
    "GG": "Guernsey",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GL": "Greenland",
    "GM": "Gambia",
    "GN": "Guinea",
    "GP": "Guadeloupe",
    "GQ": "Equatorial Guinea",
    "GR": "Greece",
    "GS": "South Georgia and the South Sandwich Islands",
    "GT": "Guatemala",
    "GU": "Guam",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HK": "Hong Kong",
    "HM": "Heard Island and McDonald Islands",
    "HN": "Honduras",
    "HR": "Croatia",
    "HT": "Haiti",
    "HU": "Hungary",
    "ID": "Indonesia",
    "IE": "Ireland",
    "IL": "Israel",
    "IM": "Isle of Man",
    "IN": "India",
    "IO": "British Indian Ocean Territory",
    "IQ": "Iraq",
    "IR": "Iran, Islamic Republic of",
    "IS": "Iceland",
    "IT": "Italy",
    "JE": "Jersey",
    "JM": "Jamaica",
    "JO": "Jordan",
    "JP": "Japan",
    "KE": "Kenya",
    "KG": "Kyrgyzstan",
    "KH": "Cambodia",
    "KI": "Kiribati",
    "KM": "Comoros",
    "KN": "Saint Kitts and Nevis",
    "KP": "Korea, Democratic People's Republic of",
    "KR": "Korea, Republic of",
    "KW": "Kuwait",
    "KY": "Cayman Islands",
    "KZ": "Kazakhstan",
    "LA": "Laos (Lao People's Democratic Republic)",
    "LB": "Lebanon",
    "LC": "Saint Lucia",
    "LI": "Liechtenstein",
    "LK": "Sri Lanka",
    "LR": "Liberia",
    "LS": "Lesotho",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "LV": "Latvia",
    "LY": "Libya",
    "MA": "Morocco",
    "MC": "Monaco",
    "MD": "Moldova, Republic of",
    "ME": "Montenegro",
    "MF": "Saint Martin",
    "MG": "Madagascar",
    "MH": "Marshall Islands",
    "MK": "North Macedonia",
    "ML": "Mali",
    "MM": "Myanmar",
    "MN": "Mongolia",
    "MO": "Macao",
    "MP": "Northern Mariana Islands",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MS": "Montserrat",
    "MT": "Malta",
    "MU": "Mauritius",
    "MV": "Maldives",
    "MW": "Malawi",
    "MX": "Mexico",
    "MY": "Malaysia",
    "MZ": "Mozambique",
    "NA": "Namibia",
    "NC": "New Caledonia",
    "NE": "Niger",
    "NF": "Norfolk Island",
    "NG": "Nigeria",
    "NI": "Nicaragua",
    "NL": "Netherlands",
    "NO": "Norway",
    "NP": "Nepal",
    "NR": "Nauru",
    "NU": "Niue",
    "NZ": "New Zealand",
    "OM": "Oman",
    "PA": "Panama",
    "PE": "Peru",
    "PF": "French Polynesia",
    "PG": "Papua New Guinea",
    "PH": "Philippines",
    "PK": "Pakistan",
    "PL": "Poland",
    "PM": "Saint Pierre and Miquelon",
    "PN": "Pitcairn",
    "PR": "Puerto Rico",
    "PS": "Palestine",
    "PT": "Portugal",
    "PW": "Palau",
    "PY": "Paraguay",
    "QA": "Qatar",
    "RE": "Réunion",
    "RO": "Romania",
    "RS": "Serbia",
    "RU": "Russian Federation",
    "RW": "Rwanda",
    "SA": "Saudi Arabia",
    "SB": "Solomon Islands",
    "SC": "Seychelles",
    "SD": "Sudan",
    "SE": "Sweden",
    "SG": "Singapore",
    "SH": "Saint Helena, Ascension and Tristan da Cunha",
    "SI": "Slovenia",
    "SJ": "Svalbard and Jan Mayen Islands",
    "SK": "Slovakia",
    "SL": "Sierra Leone",
    "SM": "San Marino",
    "SN": "Senegal",
    "SO": "Somalia",
    "SR": "Suriname",
    "SS": "South Sudan",
    "ST": "Sao Tome and Principe",
    "SV": "El Salvador",
    "SX": "Sint Maarten (Dutch part)",
    "SY": "Syrian Arab Republic",
    "SZ": "Swaziland",
    "TC": "Turks and Caicos Islands",
    "TD": "Chad",
    "TF": "French Southern Territories",
    "TG": "Togo",
    "TH": "Thailand",
    "TJ": "Tajikistan",
    "TK": "Tokelau",
    "TL": "Timor-Leste",
    "TM": "Turkmenistan",
    "TN": "Tunisia",
    "TO": "Tonga",
    "TR": "Turkey",
    "TT": "Trinidad and Tobago",
    "TV": "Tuvalu",
    "TW": "Taiwan (Republic of China)",
    "TZ": "Tanzania, United Republic of",
    "UA": "Ukraine",
    "UG": "Uganda",
    "UM": "US Minor Outlying Islands",
    "US": "United States",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VA": "Holy See (Vatican City State)",
    "VC": "Saint Vincent and the Grenadines",
    "VE": "Venezuela, Bolivarian Republic of",
    "VG": "Virgin Islands, British",
    "VI": "Virgin Islands, U.S.",
    "VN": "Vietnam",
    "VU": "Vanuatu",
    "WF": "Wallis and Futuna Islands",
    "WS": "Samoa",
    "XK": "Kosovo",
    "YE": "Yemen",
    "YT": "Mayotte",
    "ZA": "South Africa",
    "ZM": "Zambia",
    "ZW": "Zimbabwe"
};
let questions = [];
let max_questions = 10;
let current_question = 0;
let correct_answer = "";
const answer_buttons = document.querySelectorAll('.answer');
/**
 * Music file setup
 */
let bgmusic = document.getElementById('bgMusic');
bgmusic.volume = 0.5;
bgmusic.loop = true;
let soundOn = false;

const question_10 = document.getElementById('run-10');
const question_all = document.getElementById('run-all');
const rules_section = document.querySelector('.rules');
const game_section = document.querySelector('.gameboard');
const results_section = document.querySelector('.results');
const check_answer_button = document.getElementById('check-answer');
const next_question_button = document.getElementById('next-question');
const play_again_button = document.getElementById('play-again');
let score = 0;
/**
 * Toggle on and off background music
 */
function musicControl() {
    soundOn = !soundOn;
    if (soundOn) {
        bgmusic.play();
        document.getElementById("music-on").classList.add('hide');
        document.getElementById("music-off").classList.remove('hide');
    } else {
        bgmusic.pause();
        document.getElementById("music-off").classList.add('hide');
        document.getElementById("music-on").classList.remove('hide');
    }
}

function unselectAllAnswers() {
    // loop through answers and remove selected class
    answer_buttons.forEach((option) => {
        if (option.classList.contains('selected')) {
            option.classList.remove('selected');
        }
    });
}

function selectAnswer(button) {
    // remove selected from all answers
    unselectAllAnswers();

    // add selected to the button that was clicked
    button.classList.add('selected');

    // remove disabled from check answer button
    if (check_answer_button.classList.contains('disabled')) {
        check_answer_button.classList.remove('disabled');
    }
}

function playAgain() {
    questions = [];
    max_questions = 10;
    current_question = 0;
    correct_answer = "";
    score = 0;
    game_section.classList.add('hide');
    results_section.classList.add('hide');
    rules_section.classList.remove('hide');
}
// event listeners
function eventListeners() {
    question_10.addEventListener('click', function () { startGame('10'); });
    question_all.addEventListener('click', function () { startGame('all'); });
    answer_buttons.forEach(function (option) {
        option.addEventListener('click', function (e) {
            selectAnswer(e.target);
        });
    });
    check_answer_button.addEventListener('click', function (e) { checkAnswer(e.target); });
    next_question_button.addEventListener('click', function () { displayQuestion(); });
    play_again_button.addEventListener('click', function () { playAgain(); });
}
/* Suffle from stack overflow: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/18650169#18650169
*/
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
function startGame(option) {
    if (option == '10') {
        max_questions = 10;
        let counter = 0;
        while (counter < max_questions) {
            const questionsIndex = Math.floor(Math.random() * Object.keys(flags).length);
            if (!questions.includes(questionsIndex)) {
                questions.push(questionsIndex);
                counter++;
            }
        }
    } else {
        max_questions = Object.keys(flags).length;
        questions = Array.from(Array(Object.keys(flags).length).keys());
        questions = shuffle(questions);
    }
    rules_section.classList.add('hide');
    game_section.classList.remove('hide');
    displayQuestion();
}
function displayQuestion() {
    document.querySelector('.answer-result').classList.add('hide');
    check_answer_button.classList.remove('hide');
    // Check if at max questions asked
    if (current_question < max_questions) {
        // remove selected class on answers so we don't carry over anything from previous question
        unselectAllAnswers();
        // disable the check answer button
        check_answer_button.classList.add('disabled');
        // set up new flag image 
        const key = Object.keys(flags)[questions[current_question]];
        const image_path = 'assets/images/' + key.toLowerCase() + '.svg';
        let picture = document.getElementById("picture");

        while (picture.firstChild) {
            picture.removeChild(picture.firstChild);
        }
        const flagPicture = document.createElement("img");
        flagPicture.src = image_path;
        flagPicture.alt = "This flag belongs to which country?";
        flagPicture.classList.add('flag');
        picture.appendChild(flagPicture);

        let answer_choices = [];
        // add correct answer to questions
        answer_choices.push(Object.values(flags)[questions[current_question]]);
        correct_answer = Object.values(flags)[questions[current_question]];
        // get 2 alternate answers
        while (answer_choices.length < 3) {
            const new_aswer_index = Math.floor(Math.random() * Object.keys(flags).length);
            const new_answer = Object.values(flags)[new_aswer_index];
            if (!answer_choices.includes(new_answer)) {
                answer_choices.push(new_answer);
            }
        }
        // set up answers randomly
        answer_choices = shuffle(answer_choices);
        answer_buttons.forEach((option, index) => {
            option.innerText = answer_choices[index];
        });
        // update score coumter
        if (current_question == 0) {
            document.getElementById("total-question").innerText = max_questions;
            document.getElementById("correct-score").innerText = "0";
        }

    } else {

        document.getElementById('final-score').innerText = "Your Final Score is " + score + "/" + max_questions;
        // show results
        game_section.classList.add('hide');
        results_section.classList.remove('hide');

    }
}

function checkAnswer(button) {
    if (!button.classList.contains('disabled')) {
        // get selected button
        const selected_answer = document.querySelector('.answer.selected').innerText;
        // see if answer is right or not
        if (correct_answer == selected_answer) {
            // update score
            score++;
            document.getElementById('correct-score').innerText = score;
            document.querySelector('.answer-text').innerText = "CORRECT!";
        } else {
            document.querySelector('.answer-text').innerText = "SORRY! The correct answer is: " + correct_answer;
        }
        document.querySelector('.answer-result').classList.remove('hide');
        check_answer_button.classList.add('hide');
        // update current question index
        current_question++;
    }
}
document.addEventListener('DOMContentLoaded', function () {

    eventListeners();

});



