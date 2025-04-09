import question from "../components/Question";

const BASE_URL = '/api';

export const getComments = async (questionId) => {
    const response = await fetch(`${BASE_URL}/question/${questionId}/comments`);
    return response.json();
};

export async function addComment(questionId, content) {
    const response = await fetch(`${BASE_URL}/question/${questionId}/comment/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ questionId: questionId, content: content }),
    });
    return response.json();
};

export async function updateComment(commentId, content) {
    const response = await fetch(`${BASE_URL}/comment/${commentId}/edit`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ commentId: commentId, content: content }),
        credentials: 'include'
    });


    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error while comment edition.');
    }

    return response.json();
};
