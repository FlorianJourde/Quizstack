function parseSimpleYaml(yamlContent) {
    const lines = yamlContent.trim().split('\n');
    const question = {};
    let currentKey = null;
    let currentValue = '';
    let inMultilineValue = false;
    let answers = [];
    let currentAnswer = {};
    let inAnswers = false;

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        if (!line.trim()) continue;

        if (line.match(/^-\s+question:/)) {
            currentKey = 'question';
            if (line.includes('|')) {
                inMultilineValue = true;
                currentValue = '';
            } else {
                currentValue = line.replace(/^-\s+question:\s*/, '');
                inMultilineValue = false;
            }
            continue;
        }

        if (line.match(/^\s+(explanation|difficulty|category):/)) {
            if (currentKey && !inAnswers) {
                question[currentKey] = currentValue.trim();
            }

            const match = line.match(/^\s+(explanation|difficulty|category):\s*(.*)/);
            currentKey = match[1];

            if (currentKey === 'explanation' && match[2].includes('|')) {
                inMultilineValue = true;
                currentValue = '';
            } else {
                currentValue = match[2];
                inMultilineValue = false;
            }
            continue;
        }

        if (line.match(/^\s+answers:/)) {
            if (currentKey && !inAnswers) {
                question[currentKey] = currentValue.trim();
            }
            inAnswers = true;
            continue;
        }

        if (inAnswers && line.match(/^\s+-\s+answer_content:/)) {
            if (currentAnswer.answer_content) {
                answers.push(currentAnswer);
            }

            currentAnswer = {};
            currentAnswer.answer_content = line.replace(/^\s+-\s+answer_content:\s*/, '');
            continue;
        }

        if (inAnswers && line.match(/^\s+correct_answer:/)) {
            const value = line.replace(/^\s+correct_answer:\s*/, '');
            currentAnswer.correct_answer = value === 'true';
            continue;
        }

        if (inMultilineValue && line.match(/^\s{4,}/)) {
            currentValue += (currentValue ? '\n' : '') + line.replace(/^\s{4}/, '');
            continue;
        }

        if (inMultilineValue && !line.match(/^\s{4,}/)) {
            inMultilineValue = false;
            if (currentKey && !inAnswers) {
                question[currentKey] = currentValue.trim();
            }
        }
    }

    if (currentKey && !inAnswers) {
        question[currentKey] = currentValue.trim();
    }
    if (currentAnswer.answer_content) {
        answers.push(currentAnswer);
    }

    question.answers = answers;
    return question;
}

function addChoicesToForm(numberOfChoices) {
    const addButton = document.querySelector('.add_item_link');

    if (!addButton) {
        console.error('Add choice button not found');
        return false;
    }

    const wasDisabled = addButton.disabled;
    if (wasDisabled) {
        addButton.disabled = false;
    }

    for (let i = 0; i < numberOfChoices; i++) {
        addButton.click();

        const start = Date.now();
        while (Date.now() - start < 10) {
        }
    }

    if (wasDisabled) {
        addButton.disabled = true;
    }

    return true;
}

function handleFileSelection(event) {
    const file = event.target.files[0];

    if (!file) {
        return;
    }

    if (!file.name.match(/\.(yml|yaml)$/i)) {
        showMessage('Please select a YAML file.', true);
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
        try {
            const yamlContent = event.target.result;

            const questionData = parseSimpleYaml(yamlContent);

            if (!questionData.question) {
                showMessage('No question found in the YAML content.', true);
                return;
            }

            const numberOfChoices = questionData.answers ? questionData.answers.length : 4;
            const choicesAdded = addChoicesToForm(numberOfChoices);

            if (!choicesAdded) {
                showMessage('Failed to add choice fields to the form.', true);
                return;
            }

            setTimeout(function () {
                const success = injectIntoForm(questionData);

                if (success) {
                    showMessage(`File successfully loaded : ${numberOfChoices} choices added.`);
                } else {
                    showMessage('Failed to inject data into form. Please check the console for errors.', true);
                }
            }, 100);

        } catch (error) {
            console.error('Error processing file:', error);
            showMessage('Error processing file: ' + error.message, true);
        }
    };

    reader.onerror = function () {
        showMessage('Error reading the selected file.', true);
    };

    reader.readAsText(file);
}

function injectIntoForm(questionData) {
    try {
        const contentField = document.getElementById('question_form_content');
        if (contentField && questionData.question) {
            contentField.value = questionData.question;
        }

        const explanationField = document.getElementById('question_form_explanation');
        if (explanationField && questionData.explanation) {
            explanationField.value = questionData.explanation;
        }

        if (questionData.difficulty) {
            const difficultyRadio = document.getElementById(`question_form_difficulty_${questionData.difficulty - 1}`);
            if (difficultyRadio) {
                difficultyRadio.checked = true;
            }
        }

        const statusRadio = document.getElementById(`question_form_status`);
        if (statusRadio) {
            statusRadio.checked = true;
        }

        if (questionData.answers && Array.isArray(questionData.answers)) {
            questionData.answers.forEach(function (answer, index) {
                const choiceContentField = document.getElementById(`question_form_choice_${index}_content`);
                if (choiceContentField && answer.answer_content) {
                    choiceContentField.value = answer.answer_content;
                }

                const choiceCorrectField = document.getElementById(`question_form_choice_${index}_correct`);
                if (choiceCorrectField && answer.correct_answer !== undefined) {
                    choiceCorrectField.checked = answer.correct_answer;
                }
            });
        }

        return true;
    } catch (error) {
        console.error('Error injecting data into form:', error);
        return false;
    }
}

function showMessage(message, isError = false) {
    const errorDiv = document.getElementById('errorMessage');
    const successDiv = document.getElementById('successMessage');

    if (isError) {
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
        successDiv.style.display = 'none';
    } else {
        successDiv.textContent = message;
        successDiv.style.display = 'block';
        errorDiv.style.display = 'none';
    }

}

function handleInject() {
    showMessage('Please use "Load & Inject" button to load a YAML file.', true);
}

document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('yamlFileInput');

    if (fileInput) {
        fileInput.addEventListener('change', handleFileSelection);
    }
});