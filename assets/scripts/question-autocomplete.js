
/**
 * Parse YAML-like content manually (simple parser for our specific format)
 */
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

        // Skip empty lines
        if (!line.trim()) continue;

        // Handle start of new question
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

        // Handle other main keys
        if (line.match(/^\s+(explanation|difficulty|category):/)) {
            // Save previous value
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

        // Handle answers section
        if (line.match(/^\s+answers:/)) {
            // Save previous value
            if (currentKey && !inAnswers) {
                question[currentKey] = currentValue.trim();
            }
            inAnswers = true;
            continue;
        }

        // Handle individual answers
        if (inAnswers && line.match(/^\s+-\s+answer_content:/)) {
            // Save previous answer
            if (currentAnswer.answer_content) {
                answers.push(currentAnswer);
            }

            currentAnswer = {};
            currentAnswer.answer_content = line.replace(/^\s+-\s+answer_content:\s*/, '');
            continue;
        }

        // Handle correct_answer
        if (inAnswers && line.match(/^\s+correct_answer:/)) {
            const value = line.replace(/^\s+correct_answer:\s*/, '');
            currentAnswer.correct_answer = value === 'true';
            continue;
        }

        // Handle multiline content
        if (inMultilineValue && line.match(/^\s{4,}/)) {
            currentValue += (currentValue ? '\n' : '') + line.replace(/^\s{4}/, '');
            continue;
        }

        // End of multiline
        if (inMultilineValue && !line.match(/^\s{4,}/)) {
            inMultilineValue = false;
            if (currentKey && !inAnswers) {
                question[currentKey] = currentValue.trim();
            }
        }
    }

    // Save final values
    if (currentKey && !inAnswers) {
        question[currentKey] = currentValue.trim();
    }
    if (currentAnswer.answer_content) {
        answers.push(currentAnswer);
    }

    question.answers = answers;
    return question;
}

/**
 * Load file content and inject into form
 */
function loadFileContent() {
    const fileInput = document.getElementById('yamlFileInput');

    if (!fileInput.files || fileInput.files.length === 0) {
        showMessage('Please select a file first.', true);
        return;
    }

    const file = fileInput.files[0];

    // Check file extension
    if (!file.name.match(/\.(yml|yaml)$/i)) {
        showMessage('Please select a YAML file (.yml or .yaml extension).', true);
        return;
    }

    const reader = new FileReader();

    reader.onload = function(event) {
        try {
            const yamlContent = event.target.result;

            // Parse YAML content
            const questionData = parseSimpleYaml(yamlContent);

            // Validate parsed data
            if (!questionData.question) {
                showMessage('No question found in the YAML content.', true);
                return;
            }

            // Inject into form
            const success = injectIntoForm(questionData);

            if (success) {
                showMessage(`File "${file.name}" loaded and injected successfully!`);
            } else {
                showMessage('Failed to inject data into form. Please check the console for errors.', true);
            }

        } catch (error) {
            console.error('Error processing file:', error);
            showMessage('Error processing file: ' + error.message, true);
        }
    };

    reader.onerror = function() {
        showMessage('Error reading the selected file.', true);
    };

    reader.readAsText(file);
}

/**
 * Map category names to their corresponding values in the form
 */
function getCategoryValue(categoryName) {
    const categoryMap = {
        'HTML': '701',
        'PHP': '703',
        'JavaScript': '704',
        'CSS': '721',
        'SQL': '723',
        'Frontend': '724',
        'Backend': '725',
        'Accessibility': '726',
        'UX / UI': '727',
        'SEO': '728',
        'Security': '729',
        'Performance': '730',
        'Culture': '731'
    };
    return categoryMap[categoryName] || null;
}

/**
 * Inject parsed question data into the form
 */
function injectIntoForm(questionData) {
    try {
        // Fill content field
        const contentField = document.getElementById('question_form_content');
        if (contentField && questionData.question) {
            contentField.value = questionData.question;
        }

        // Fill explanation field
        const explanationField = document.getElementById('question_form_explanation');
        if (explanationField && questionData.explanation) {
            explanationField.value = questionData.explanation;
        }

        // Set difficulty
        if (questionData.difficulty) {
            const difficultyRadio = document.getElementById(`question_form_difficulty_${questionData.difficulty - 1}`);
            if (difficultyRadio) {
                difficultyRadio.checked = true;
            }
        }

        // Note: Category is intentionally not pre-filled to allow manual selection

        // Fill choices
        if (questionData.answers && Array.isArray(questionData.answers)) {
            questionData.answers.forEach(function(answer, index) {
                // Fill choice content
                const choiceContentField = document.getElementById(`question_form_choice_${index}_content`);
                if (choiceContentField && answer.answer_content) {
                    choiceContentField.value = answer.answer_content;
                }

                // Set correct answer checkbox
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

/**
 * Show message to user
 */
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

    // Hide message after 5 seconds
    setTimeout(function() {
        errorDiv.style.display = 'none';
        successDiv.style.display = 'none';
    }, 5000);
}

/**
 * Main injection function (no longer needed as separate function)
 */
function handleInject() {
    // This function is no longer used since we inject directly from file
    showMessage('Please use "Load & Inject" button to load a YAML file.', true);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    const loadFileButton = document.getElementById('loadFileButton');

    if (loadFileButton) {
        loadFileButton.addEventListener('click', loadFileContent);
    }
});