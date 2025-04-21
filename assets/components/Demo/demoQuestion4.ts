export const demoQuestion4 =
    {
        "id": 279,
        "categories": [
            {
                "id": 703,
                "name": "PHP"
            }
        ],
        "choices": [
            {
                "id": 202,
                "content": "Converts all characters to uppercase"
            },
            {
                "id": 203,
                "content": "Converts all characters to lowercase"
            },
            {
                "id": 204,
                "content": "Capitalizes the first letter of each word"
            },
            {
                "id": 205,
                "content": "Returns \"HELLO WORLD\""
            }
        ],
        "comments": [],
        "content": "What does this PHP function do?\r\n```php\r\nfunction process($str) {\r\n    return ucwords(strtolower($str));\r\n}\r\necho process(\"HELLO world\");\r\n```",
        "difficulty": 2,
        "explanation": "This function processes a string in two steps: First, it converts the entire string to lowercase using `strtolower()`.",
        "numberOfCorrectChoices": 1,
        "correctChoices": [
            204
        ]
    }

export const demoAnswers4 =
    [
        202
    ]