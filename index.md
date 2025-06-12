---
layout: base
title: Home Page
hide: true
---

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #ffffff;
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
  }

  h1 {
    color:rgb(255, 255, 255);
    font-size: 64px;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    color: #555;
    max-width: 700px;
    line-height: 1.6;
  }

  .button-container {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .btn {
    border: 2px solid #2e7d32;
    color: #2e7d32;
    background-color: white;
    padding: 15px 30px;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.3s, color 0.3s;
  }

  .btn:hover {
    background-color: #2e7d32;
    color: white;
  }

  .contact-card {
    background-color: #f5f5f5;
    border-radius: 20px;
    padding: 40px;
    text-align: center;
    max-width: 600px;
    box-shadow: 0 0 10px rgba(0,0,0,0.05);
    margin: 40px auto 0 auto;
  }

  .contact-card h2 {
    color: #2e7d32;
    font-size: 32px;
    margin-bottom: 20px;
  }

  .contact-card p {
    font-size: 18px;
    color: #555;
    margin-bottom: 30px;
  }

  .email-button {
    display: block;
    margin: 0 auto;
    padding: 15px 30px;
    border: 2px solid #2e7d32;
    color: #2e7d32;
    text-decoration: none;
    font-weight: bold;
    border-radius: 10px;
    font-size: 18px;
    transition: background-color 0.3s, color 0.3s;
    width: fit-content;
  }

  .email-button:hover {
    background-color: #2e7d32;
    color: white;
  }
</style>

<h1>Nikith Muralikrishnan</h1>
<p>
  Engineering student at Del Norte High School with a strong interest in <br>
  mechanical and electrical systems, exploring their integration through <br>
  the power of computer science.
</p>

<div class="button-container">
  <a class="btn" href="https://www.linkedin.com/in/nikith-muralikrishnan-940408353/" target="_blank">LinkedIn Profile</a>
  <a class="btn" href="_notebooks/Foundation/2025-06-11-Experiences.ipynb">Experience</a>
  <a class="btn" href="#showcases">Showcases</a>
  <a class="btn" href="#_notebooks/Foundation/2025-06-12-Homework-Certification.ipynb">Certificates</a>
</div>

<div class="contact-card">
  <h2>Contact Me</h2>
  <p>Want to learn more about my projects or explore a collaboration? Get in touch!</p>
  <a href="mailto:nikith.muralikrishnan@gmail.com" class="email-button">
    nikith.muralikrishnan@gmail.com
  </a>
</div>

