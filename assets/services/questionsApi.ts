import question from "../components/Question";
import {UrlFiltersInterface} from "../types/urlFilters";

const BASE_URL = '/api/question';

export const getQuestions = async (filters = {}) => {
    const params = new URLSearchParams(filters);
    const response = await fetch(`${BASE_URL}?${params}`);
    return response.json();
};

export const getQuestion = async (filters: UrlFiltersInterface = {}) => {
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

export const submitAnswer = async (questionId, selectedAnswers) => {
    const response = await fetch(`${BASE_URL}/${questionId}/check`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ questionId, selectedAnswers }),
    });
    return response.json();
};
