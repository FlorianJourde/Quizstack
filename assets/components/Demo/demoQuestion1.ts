export const demoQuestion1 =
    {
        "id": 275,
        "categories": [
            {
                "id": 701,
                "name": "HTML"
            }
        ],
        "choices": [
            {
                "id": 188,
                "content": "The input is missing a proper label, which makes it inaccessible to screen reader users."
            },
            {
                "id": 186,
                "content": "The submit button doesn't have an explicit aria-label attribute."
            },
        ],
        "comments": [],
        "content":
            "What is the accessibility issue with the following form element ?\n" +
            "```html\n" +
            "<input type=\"text\" placeholder=\"Enter your email\">\n" +
            "<button type=\"submit\">Submit</button>\n" +
            "```",
        "difficulty": 1,
        // "explanation": "To create a checkbox in HTML, you use the `<input>` element with its `type` attribute set to `\"checkbox\"`.",
        "numberOfCorrectChoices": 1,
        "correctChoices": [
            188
        ]
    }

export const demoAnswers1 = [
    188
]
