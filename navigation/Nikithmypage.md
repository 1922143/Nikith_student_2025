---
layout: page
title: Sprint 5 Reflection
permalink: /sprint5/
---

My experience setting up to start coding was interesting and while I had some trouble, I eventually did it in the end getting help from my peers and looking at slack for help. First, i created an account on github and made a repository. Then, I used the Terminal with the wsl command to set up a Linux shell and the apt command within that shell for installing developer tools on Ubuntu. On VS Code, I got all my extensions like Remote development pack, Jupyter Notebooks, Python, and Javascript to great ready to code. I also went on Ubuntu and made sure I got bundle, ruby, Jupyter, and Python all set up. After all the set up, Icreated a new project by typing this into a Linux supported terminal: 

move to project directory

    -cd student_2025


make virtual environment by script

    -scripts/venv.sh


activate virtual environment, observe prompt change after running it

    -source venv/bin/activate


install python packages for project 

    -pip install -r requirements.txt


show Kernels, python3 needs must be in the list

    -jupyter kernelspec list


install gems (Ruby packages), required for Jekyll requirements in GitHub Pages

    -bundle install


open VSCode

    -code .



After all that, I finally went to VS code, opened a terminal, and opened a local server to start working on my website. In all, I met a few problems along the way like my Python and Jupyter wasn't installing. I figured it out by talking with my friends. The problem was that it wasn't enabled in WSL: Ubuntu-22.04 so after doing that it worked. After working through it more, i got the hang of it and learned a lot about coding.