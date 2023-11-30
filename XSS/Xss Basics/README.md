# Xss Basics



## Description
Cross-site scripting (XSS) is a type of computer security vulnerability typically found in web applications. XSS enables attackers to inject client-side scripts into web pages viewed by other users.

These scripts are often non-malicious, but pose as a nuisance to potential web users.

Cause a "helloworld" alert with a single search query.


## Solution
1. Forge a blank Script for an alert
    ``` html
    <script>alert()</script>
    ```
2. Fill in the the "helloworld"
    ```html
    <script>alert("helloworld")</script>
    ```
