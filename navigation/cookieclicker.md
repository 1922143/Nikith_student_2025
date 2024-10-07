---
layout: page
title: Cookie Clicker
permalink: /cookieclicker/
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookie Clicker Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f8f8f8;
            margin: 0;
            padding: 20px;
        }
        #cookie {
            width: 200px;
            height: 200px;
            background-color: #e5c29f;
            border-radius: 50%;
            border: 5px solid #a16b4b;
            margin: 0 auto;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            transition: transform 0.1s;
        }
        #cookie:active {
            transform: scale(0.95);
        }
        #score {
            font-size: 24px;
            margin: 20px 0;
        }
        #upgrade {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>Cookie Clicker Game</h1>
    <div id="cookie"></div>
    <div id="score">Cookies: 0</div>
    <button id="upgrade">Upgrade (Cost: 10 Cookies)</button>

    <!-- Sound effects -->
    <audio id="clickSound" src="../sounds/click.mp3" preload="auto"></audio>
    <audio id="upgradeSound" src="upgrade.mp3" preload="auto"></audio>

    <script>
        let cookies = 0;
        let clickValue = 1;
        const cookieElement = document.getElementById('cookie');
        const scoreElement = document.getElementById('score');
        const upgradeButton = document.getElementById('upgrade');
        const clickSound = document.getElementById('clickSound');
        const upgradeSound = document.getElementById('upgradeSound');

        cookieElement.addEventListener('click', () => {
            cookies += clickValue;
            updateScore();
            clickSound.play(); // Play click sound
        });

        upgradeButton.addEventListener('click', () => {
            if (cookies >= 10) {
                cookies -= 10;
                clickValue += 1;
                updateScore();
                upgradeSound.play(); // Play upgrade sound
            } else {
                alert("Not enough cookies!");
            }
        });

        function updateScore() {
            scoreElement.textContent = `Cookies: ${cookies}`;
        }
    </script>
</body>
