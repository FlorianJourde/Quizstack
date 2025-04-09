import question from "../components/Question";

const BASE_URL = '/api';

export const getComments = async (questionId) => {
    const response = await fetch(`${BASE_URL}/question/${questionId}/comments`);
    return response.json();
};

export async function addComment(questionId, comment) {
    const response = await fetch(`${BASE_URL}/question/${questionId}/comment/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ questionId: questionId, comment: comment }),
    });
    return response.json();
};
