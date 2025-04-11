import {UrlFiltersInterface} from "../types/urlFilters";

const BASE_URL = '/api/question';

export async function getRandomQuestion(filters: UrlFiltersInterface = {}) {
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

export async function getQuestion(questionId: number) {
    const response = await fetch(`${BASE_URL}/${questionId}`);

    return response.json();
};

export async function submitAnswers(questionId, answers) {
    const response = await fetch(`${BASE_URL}/${questionId}/check`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answers: answers }),
    });
    return response.json();
};
