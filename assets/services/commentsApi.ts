import question from "../components/Question";

const BASE_URL = '/api';

export const getComments = async (questionId) => {
    const response = await fetch(`${BASE_URL}/question/${questionId}/comments`);
    return response.json();
};
