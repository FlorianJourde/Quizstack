export const demoQuestion5 =
    {
        "id": 280,
        "categories": [
            {
                "id": 723,
                "name": "SQL"
            }
        ],
        "choices": [
            {
                "id": 206,
                "content": "Returns the 5 cheapest products"
            },
            {
                "id": 207,
                "content": "Returns the 5 most expensive"
            },
            {
                "id": 208,
                "content": "Returns 5 random products"
            },
            {
                "id": 209,
                "content": "Returns products with prices higher than 5"
            }
        ],
        "comments": [],
        "content": "What does this SQL query do?\r\n```sql\r\nSELECT name, price \r\nFROM products \r\nORDER BY price DESC \r\nLIMIT 5;\r\n```",
        "difficulty": 1,
        "explanation": "This SQL query selects the `name` and `price` columns from the `products` table, orders the results by price in descending order (highest to lowest), and limits the output to only 5 rows.",
        "numberOfCorrectChoices": 1,
        "correctChoices": [
            207
        ]
    }
export const demoAnswers5 =
    [
        207
    ]
