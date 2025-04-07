const BASE_URL = '/api/question';

export const getQuestions = async (filters = {}) => {
    const params = new URLSearchParams(filters);
    const response = await fetch(`${BASE_URL}?${params}`);
    return response.json();
};

export const getQuestion = async (filters = {}) => {
    const params = new URLSearchParams();

    if (filters.difficulty) {
        params.append('difficulty', filters.difficulty);
    }

    if (filters.categories && filters.categories.length > 0) {
        filters.categories.forEach(category => {
            params.append('category[]', category);
        });
    }


    // const params = new URLSearchParams(filters);
    console.log(filters)
    // // const params = filters
    // // console.log(params)
    //
    // const params = new URLSearchParams(filters);
    console.log(filters.categories);
    console.log(params.toString());

    // const searchParams = new URLSearchParams(window.location.search);
    //
    // // console.log(searchParams);
    //
    // // const urlFilters = {};
    // //
    // if (searchParams.has('difficulty')) {
    //     urlFilters.difficulty = searchParams.get('difficulty');
    //     console.log(urlFilters.difficulty);
    // }
    //
    // if (searchParams.has('categories')) {
    //     urlFilters.categories = searchParams.get('categories').split(',');
    //     console.log(urlFilters.categories);
    // }
    //
    // console.log(URLSearchParams);
    const response = await fetch(`${BASE_URL}?${params}`);
    return response.json();
};

// export const getQuestion = async (id) => {
//     const response = await fetch(`${BASE_URL}/${id}`);
//     return response.json();
// };

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