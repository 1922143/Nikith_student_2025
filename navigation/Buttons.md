---
layout: page
title: Buttons
permalink: /Buttons/
---



<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smiley Face Button</title>
    <style>
        #smiley {
            font-size: 2em;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <button onclick="showSmiley()">Click me!</button>
    <div id="smiley"></div>

    <script>
        function showSmiley() {
            document.getElementById('smiley').textContent = '😊';
        }
    </script>
</body>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sad Face Button</title>
    <style>
        #sadFace {
            font-size: 2em;
            margin-top: 10px;
            color: #333; /* Optional: Change color if desired */
        }
    </style>
</head>
<body>
    <button onclick="showSadFace()">No me!</button>
    <div id="sadFace"></div>

    <script>
        function showSadFace() {
            document.getElementById('sadFace').textContent = '😢';
        }
    </script>
</body>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fullscreen Banana Image</title>
</head>
<body>
    <button onclick="openFullscreen()">What about me?</button>

    <script>
        function openFullscreen() {
            // Create an image element
            const img = document.createElement('img');
            img.src = 'https://tse2.mm.bing.net/th?id=OIP.PJSUPgqgr59waaJNN2mcqQHaEK&pid=Api&P=0&h=220'; // Replace with your banana image URL
            img.style.position = 'fixed';
            img.style.top = '0';
            img.style.left = '0';
            img.style.width = '100vw';
            img.style.height = '100vh';
            img.style.objectFit = 'cover';
            img.style.zIndex = '9999';
            img.style.cursor = 'pointer';

            // Add a click event to remove the image
            img.onclick = function() {
                document.body.removeChild(img);
            };

            // Append the image to the body
            document.body.appendChild(img);
        }
    </script>
</body>