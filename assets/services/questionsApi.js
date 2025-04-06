const BASE_URL = '/api/question';

export const getQuestions = async (filters = {}) => {
    const params = new URLSearchParams(filters);
    const response = await fetch(`${BASE_URL}?${params}`);
    return response.json();
};

export const getQuestion = async (id) => {
    // const response = await fetch(`${BASE_URL}/${id}`);
    const response = await fetch(`${BASE_URL}/${id}`);
    // console.log(response.json())
    return response.json();
};

export const submitAnswer = async (questionId, answer) => {
    const response = await fetch(`${BASE_URL}/${questionId}/check`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answer }),
    });
    return response.json();
};