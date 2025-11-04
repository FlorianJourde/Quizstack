import {showMessage} from "./helper/show-message";

interface Answer {
    answer_content: string;
    correct_answer: boolean;
}

interface QuestionData {
    question: string;
    explanation?: string;
    difficulty?: number;
    category?: string;
    answers?: Answer[];
}

function parseSimpleYaml(yamlContent: string): QuestionData {
    const lines: string[] = yamlContent.trim().split('\n');
    const question: QuestionData = {} as QuestionData;
    let currentKey: string | null = null;
    let currentValue: string = '';
    let isMultilineValue: boolean = false;
    let answers: Answer[] = [];
    let currentAnswer: Partial<Answer> = {};
    let isAnswers: boolean = false;
    let isAnswerMultiline: boolean = false;

    for (let i = 0; i < lines.length; i++) {
        let line: string = lines[i];

        if (!line.trim() && !isMultilineValue && !isAnswerMultiline) continue;

        if (line.match(/^-\s+question:/)) {
            if (currentKey && !isAnswers) {
                (question as any)[currentKey] = currentValue.trim();
            }

            currentKey = 'question';
            if (line.includes('|')) {
                isMultilineValue = true;
                currentValue = '';
            } else {
                currentValue = line.replace(/^-\s+question:\s*/, '');
                isMultilineValue = false;
            }
            isAnswers = false;
            continue;
        }

        if (line.match(/^\s+(explanation|difficulty|category):/)) {
            if (currentKey && !isAnswers) {
                (question as any)[currentKey] = currentValue.trim();
            }

            const match: RegExpMatchArray | null = line.match(/^\s+(explanation|difficulty|category):\s*(.*)/);
            if (match) {
                currentKey = match[1];

                if ((currentKey === 'explanation') && line.includes('|')) {
                    isMultilineValue = true;
                    currentValue = '';
                } else {
                    currentValue = match[2];
                    isMultilineValue = false;
                }
            }
            continue;
        }

        if (line.match(/^\s+answers:/)) {
            if (currentKey && !isAnswers) {
                (question as any)[currentKey] = currentValue.trim();
            }
            currentKey = null;
            isAnswers = true;
            continue;
        }

        if (isAnswers && line.match(/^\s+-\s+answer_content:/)) {
            if (Object.keys(currentAnswer).length > 0) {
                answers.push(currentAnswer as Answer);
            }

            currentAnswer = {};

            if (line.includes('|')) {
                isAnswerMultiline = true;
                currentAnswer.answer_content = '';
            } else {
                isAnswerMultiline = false;
                currentAnswer.answer_content = line.replace(/^\s+-\s+answer_content:\s*/, '');
            }
            continue;
        }

        if (isAnswers && line.match(/^\s+correct_answer:/)) {
            const value: string = line.replace(/^\s+correct_answer:\s*/, '');
            currentAnswer.correct_answer = value === 'true';
            if (isAnswerMultiline) {
                currentAnswer.answer_content = (currentAnswer.answer_content || '').trim();
                isAnswerMultiline = false;
            }
            continue;
        }

        if (isMultilineValue && (line.match(/^\s{4,}/) || !line.trim())) {
            currentValue += line.replace(/^\s{4}/, '') + '\n';
            continue;
        }

        if (isAnswerMultiline && (line.match(/^\s{6,}/) || !line.trim())) {
            const content: string = line.replace(/^\s{6}/, '');
            currentAnswer.answer_content = (currentAnswer.answer_content || '') + content + '\n';
            continue;
        }

        if (isMultilineValue && !line.match(/^\s{4,}/)) {
            isMultilineValue = false;
            if (currentKey && !isAnswers) {
                (question as any)[currentKey] = currentValue.trim();
                currentValue = '';
            }
        }

        if (isAnswerMultiline && !line.match(/^\s{6,}/)) {
            isAnswerMultiline = false;
            if (currentAnswer.answer_content) {
                currentAnswer.answer_content = currentAnswer.answer_content.trim();
            }
        }
    }

    if (currentKey && !isAnswers) {
        (question as any)[currentKey] = currentValue.trim();
    }
    if (Object.keys(currentAnswer).length > 0) {
        if (currentAnswer.answer_content) {
            currentAnswer.answer_content = currentAnswer.answer_content.trim();
        }
        answers.push(currentAnswer as Answer);
    }

    question.answers = answers;
    return question;
}

function cleanIndentation(text: string): string {
    if (!text) return text;

    const lines = text.split('\n');

    let minIndent = Infinity;
    for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('```')) {
            let indent = 0;
            for (let i = 0; i < line.length; i++) {
                if (line[i] === ' ') {
                    indent++;
                } else if (line[i] === '\t') {
                    indent += 2;
                } else {
                    break;
                }
            }
            minIndent = Math.min(minIndent, indent);
        }
    }

    if (minIndent === Infinity || minIndent === 0) return text.trim();

    return lines.map(function (line: string): string {
        if (!line.trim()) return '';

        if (line.trim().startsWith('```')) {
            return line.trim();
        }

        let spacesToRemove = minIndent;
        let index = 0;

        while (spacesToRemove > 0 && index < line.length) {
            if (line[index] === ' ') {
                spacesToRemove--;
                index++;
            } else if (line[index] === '\t') {
                spacesToRemove -= 2;
                index++;
            } else {
                break;
            }
        }

        return line.substring(index);
    }).join('\n').trim();
}

function addChoicesToForm(numberOfChoices: number): boolean {
    const addButton: HTMLButtonElement | null = document.querySelector('.add_item_link');

    if (!addButton) {
        console.error('Add choice button not found');
        return false;
    }

    const wasDisabled: boolean = addButton.disabled;
    if (wasDisabled) {
        addButton.disabled = false;
    }

    for (let i = 0; i < numberOfChoices; i++) {
        addButton.click();

        const start: number = Date.now();
        while (Date.now() - start < 10) {
            // Small delay
        }
    }

    if (wasDisabled) {
        addButton.disabled = true;
    }

    return true;
}

function handleFileSelection(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file: File | undefined = target.files?.[0];

    if (!file) {
        return;
    }

    if (!file.name.match(/\.(yml|yaml)$/i)) {
        showMessage('Please select a YAML file.', true);
        return;
    }

    const reader: FileReader = new FileReader();

    reader.onload = function (event: ProgressEvent<FileReader>): void {
        try {
            const yamlContent = String(event.target?.result ?? '')
                .replace(/\r\n?/g, '\n')
            const questionData: QuestionData = parseSimpleYaml(yamlContent);

            if (!questionData.question) {
                showMessage('No question found in the YAML content.', true);
                return;
            }

            const numberOfChoices: number = questionData.answers ? questionData.answers.length : 4;
            const choicesAdded: boolean = addChoicesToForm(numberOfChoices);

            if (!choicesAdded) {
                showMessage('Failed to add choice fields to the form.', true);
                return;
            }

            setTimeout(function (): void {
                const success: boolean = injectIntoForm(questionData);

                if (success) {
                    showMessage(`File successfully loaded : ${numberOfChoices} choices added.`);
                } else {
                    showMessage('Failed to inject data into form. Please check the console for errors.', true);
                }
            }, 100);

        } catch (error) {
            console.error('Error processing file:', error);
            showMessage('Error processing file: ' + (error as Error).message, true);
        }
    };

    reader.onerror = function (): void {
        showMessage('Error reading the selected file.', true);
    };

    reader.readAsText(file);
}

function injectIntoForm(questionData: QuestionData): boolean {
    try {
        const contentField: HTMLTextAreaElement | null = document.querySelector('#question_form_content') as HTMLTextAreaElement;
        if (contentField && questionData.question) {
            contentField.value = questionData.question;
        }

        const explanationField: HTMLTextAreaElement | null = document.querySelector('#question_form_explanation') as HTMLTextAreaElement;
        if (explanationField && questionData.explanation) {
            explanationField.value = questionData.explanation;
        }

        if (questionData.difficulty) {
            const difficultyRadio: HTMLInputElement | null = document.querySelector(`#question_form_difficulty_${questionData.difficulty - 1}`) as HTMLInputElement;
            if (difficultyRadio) {
                difficultyRadio.checked = true;
            }
        }

        const statusRadio: HTMLInputElement | null = document.querySelector('#question_form_status') as HTMLInputElement;
        if (statusRadio) {
            statusRadio.checked = true;
        }

        if (questionData.answers && Array.isArray(questionData.answers)) {
            questionData.answers.forEach(function (answer: Answer, index: number): void {
                const choiceContentField: HTMLTextAreaElement | null = document.querySelector(`#question_form_choice_${index}_content`) as HTMLTextAreaElement;
                if (choiceContentField && answer.answer_content) {
                    choiceContentField.value = cleanIndentation(answer.answer_content);
                }

                const choiceCorrectField: HTMLInputElement | null = document.querySelector(`#question_form_choice_${index}_correct`) as HTMLInputElement;
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

document.addEventListener('DOMContentLoaded', function (): void {
    const fileInput: HTMLInputElement | null = document.querySelector('#yamlFileInput') as HTMLInputElement;

    if (fileInput) {
        fileInput.addEventListener('change', handleFileSelection);
    }
});