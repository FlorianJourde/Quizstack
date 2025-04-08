import question from "../components/Question";
import {UrlFiltersInterface} from "../types/urlFilters";

const BASE_URL = '/api/question';

export async function getQuestions(filters = {}) {
    const params = new URLSearchParams(filters);
    const response = await fetch(`${BASE_URL}?${params}`);
    return response.json();
};

export async function getQuestion(filters: UrlFiltersInterface = {}) {
    const params = new URLSearchParams();

    if (filters.difficulty) {
        params.append('difficulty', filters.difficulty);
    }

    if (filters.categories && filters.categories.length > 0) {
        filters.categories.forEach(category => {
            params.append('category[]', category);
        });
    }

    const response = await fetch(`${BASE_URL}?${params}`);
    return response.json();
};

export async function submitAnswers(questionId, answers) {
    const response = await fetch(`${BASE_URL}/${questionId}/check`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ questionId, answers: answers }),
    });
    return response.json();
};
