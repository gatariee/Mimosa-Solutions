# Mimosa Solutions
This repository contains the solutions for the challenges from [Mimosa](https://github.com/OWASP/mimosa).

> ⚠️ This repository is not meant to be used as a walkthrough, but rather as a reference for those who are stuck on a challenge. Please try to solve the challenges on your own before looking at the solutions.

## Challenges
- Access Control
    - [Bad Teacher](./Access%20Control/Bad%20Teacher/) (Beginner - 15 points)
- General
    - [HTTP Basics](./General/HTTP%20Basics/) (Beginner - 15 points)
- JavaScript
    - [Cookie Muncher](./JavaScript/Cookie%20Muncher/) (Beginner - 10 points)
    - [Faster than Light](./JavaScript/Faster%20than%20Light/) (Beginner - 15 points)
    - [Genesis](./JavaScript/Genesis/) (Intermediate - 25 points)
    - [Poison Apples](./JavaScript/Poison%20Apples/) (Easy - 25 points)
    - [Tree Chopper](./JavaScript/Tree%20Chopper/) (Easy - 25 points)

- SQLi
    - TBD

## Usage
Some challenges are provided with python solve scripts, do rememeber to populate your [**secrets**](./Secrets/) before running the scripts.

[csrf.py](./Secrets/csrf.py) contains the CSRF token associated with your current login session, you can obtain this from request headers.

[session.py](./Secrets/session.py) contains your session used by the platform for identification purposes.

> These secrets may or may not be disposed after every session, for best security practices- please do not share your secrets...

## Contribution
Feel free to contribute to the repository by making a PR, although not enforced- please include meaningful commit messages and follow the README.md templates. (see: [examples](./Access%20Control/Bad%20Teacher/README.md))

If you intend to make a solve script for a challenge (see [here](./Access%20Control/Bad%20Teacher/solve.py)), please remember to redact your secrets before committing it.
> The Mimosa platform has 2 local secrets used for identification and security: `X-Csrf-Token` and `JSESSIONID1`. 