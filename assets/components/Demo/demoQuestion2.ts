export const demoQuestion2 = {
    "id": 272,
    "categories": [
    {
        "id": 704,
        "name": "JavaScript"
    }
],
    "choices": [
    {
        "id": 173,
        "content": "20, 10"
    },
    {
        "id": 174,
        "content": "20, 20"
    },
    {
        "id": 175,
        "content": "10, 10"
    },
    {
        "id": 176,
        "content": "20, undefined"
    }
],
    "comments": [],
    "content": "What will be the output of the following JavaScript code?\r\n  ```javascript\r\n  function example() {\r\n    var x = 10;\r\n    if (true) {\r\n      var x = 20;\r\n      console.log(x);\r\n    }\r\n    console.log(x);\r\n  }\r\n  example();",
    "difficulty": 1,
    "explanation": "This question tests understanding of JavaScript variable scoping with `var`. Unlike `let` and `const`, variables declared with `var` are function-scoped, not block-scoped.",
    "numberOfCorrectChoices": 1,
    "correctChoices": [
    174
]
}

export const demoAnswers2 = [
    174
]