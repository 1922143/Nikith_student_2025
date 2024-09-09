---
layout: page
title: Would You Rather
permalink: /Would You Rather/
---


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Would You Rather Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
        }
        .question {
            font-size: 1.5em;
            margin-bottom: 20px;
        }
        .button-container {
            margin-top: 20px;
        }
        .choice-button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            margin: 10px;
            font-size: 1em;
            cursor: pointer;
            border-radius: 5px;
        }
        .choice-button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="question">Would you rather...</div>
    <div class="button-container">
        <button class="choice-button" onclick="chooseOption('option1')">Option 1</button>
        <button class="choice-button" onclick="chooseOption('option2')">Option 2</button>
    </div>
    <div id="result"></div>

    <script>
        const questions = [
            { question: 'Have a pet dinosaur or a pet dragon?', option1: 'Pet dinosaur', option2: 'Pet dragon' },
            { question: 'Travel to the past or the future?', option1: 'Past', option2: 'Future' },
            { question: 'Be invisible or be able to fly?', option1: 'Invisible', option2: 'Fly' },
            { question: 'Be double your weight or half your height?', option1: 'Double weight', option2: 'Half height' },
            { question: 'Never listen to music again or never watch Youtube again?', option1: 'Never listen to music again', option2: 'Never watch Youtube agin' },
            { question: 'Be homeless or in prison?', option1: 'Homeless', option2: 'Prison' },
        ];

        let currentQuestion = 0;

        function loadQuestion() {
            if (currentQuestion >= questions.length) {
                document.querySelector('.question').textContent = 'No more questions!';
                document.querySelector('.button-container').style.display = 'none';
                return;
            }

            const q = questions[currentQuestion];
            document.querySelector('.question').textContent = q.question;
            document.querySelectorAll('.choice-button')[0].textContent = q.option1;
            document.querySelectorAll('.choice-button')[1].textContent = q.option2;
        }

        function chooseOption(option) {
            const q = questions[currentQuestion];
            document.getElementById('result').textContent = `You chose: ${q[option]}`;
            currentQuestion++;
            setTimeout(loadQuestion, 1000); 
        }

        // Load the first question
        loadQuestion();
    </script>
</body>
