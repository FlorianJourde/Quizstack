const BASE_URL = '/api';

export async function getComments(questionId) {
    const response = await fetch(`${BASE_URL}/question/${questionId}/comments`);
    return response.json();
}


export async function getLastComments() {
    const response = await fetch(`${BASE_URL}/comments/last`);
    const data = await response.json();
    return data.comments;
}

export async function addComment(questionId, content) {
    const response = await fetch(`${BASE_URL}/question/${questionId}/comment/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({content: content}),
        credentials: 'include',
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error('Server error:', errorText);
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

export async function updateComment(commentId, content) {
    const response = await fetch(`${BASE_URL}/comment/${commentId}/edit`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({commentId: commentId, content: content}),
        credentials: 'include'
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error while comment edition.');
    }

    return response.json();
}

export async function deleteComment(commentId) {
    const response = await fetch(`${BASE_URL}/comment/${commentId}/delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error while comment edition.');
    }

    return response.json();
}