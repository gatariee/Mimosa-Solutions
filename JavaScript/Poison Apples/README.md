# Poison Apples

## Description

The "Poison Apples" challenge is a test of Javascript skills in the context of web gaming. The task is to either score 500 points in the game or manipulate the game's scoring system to record a high score of 500 points. This challenge is unique as it involves understanding and manipulating an inline Javascript script that controls the game's mechanics and scoring system.

## Objective

Achieve a high score of 500 points, either by playing the game or by using Javascript to manipulate the score.

## Game Script

Below is the inline script present in the game's HTML. This script is crucial for understanding the game mechanics and finding a way to achieve the objective. For better readability and easier analysis, you can use a code beautifier like [js-beautify](https://beautifier.io/) to format this script.

```html
<script>
    $(document).ready(function(){let e=$("#game-canvas")[0],t=e.getContext("2d");setInterval(function(){n+=a,py+=c,n<0&&(n=tc-1);n>tc-1&&(n=0);py<0&&(py=tc-1);py>tc-1&&(py=0);t.fillStyle="#e6e9ed",t.fillRect(0,0,e.width,e.height),t.fillStyle="#37bc9b";for(var i=0;i<f.length;i++)t.fillRect(f[i].x*l,f[i].y*l,l-2,l-2),f[i].x==n&&f[i].y==py&&(r=5);f.push({x:n,y:py});for(;f.length>r;)f.shift();o==n&&ay==py&&(r++,o=Math.floor(Math.random()*tc),ay=Math.floor(Math.random()*tc),r-5>y&&(y=r-5,$("#highscore").html(y),y>=500&&$.ajax({url:"/challenges/poison-apples",type:"post",data:JSON.stringify({highscore:y}),contentType:"application/json",beforeSend:function(e){e.setRequestHeader(_csrf_header,_csrf_token)},success:function(e,t,n){"function"==typeof window.default_challenge_success&&window.default_challenge_success(e)},error:function(e,t,n){"function"==typeof window.default_challenge_error&&window.default_challenge_error(n)}})));t.fillStyle="#da4453",t.fillRect(o*l,ay*l,l-2,l-2)},1e3/15);let n=py=15,l=tc=30,o=ay=20,a=1,c=0,f=[],r=5,y=0;$("body").keydown(function(e){37==e.keyCode&&(a=-1,c=0,e.preventDefault()),38==e.keyCode&&(a=0,c=-1,e.preventDefault()),39==e.keyCode&&(a=1,c=0,e.preventDefault()),40==e.keyCode&&(a=0,c=1,e.preventDefault())})});
</script>
```

Can use https://beautifier.io/ to make the script more easier for the eye to read.

## Solution

1. Inspect the game's source code, particularly the inline script within the HTML file. This script manages the game logic and the score submission process.
2. Analyze the script to understand how the score is calculated, stored, and submitted.
3. Craft a Javascript snippet to manipulate the game to reach 500 points in the browser console directly to the server.
4. As an example, the following AJAX request can be used to send a high score of 500:

   ```javascript
   $.get("/challenges/poison-apples", function (data) {
       var parser = new DOMParser();
       var doc = parser.parseFromString(data, "text/html");
       var csrfToken = doc.querySelector("meta[name='_csrf']").content;

       $.ajax({
           url: "/challenges/poison-apples",
           type: "POST",
           data: JSON.stringify({ highscore: 500 }),
           contentType: "application/json",
           beforeSend: function (e) {
               e.setRequestHeader("X-CSRF-TOKEN", csrfToken);
           },
           success: function (response) {
               console.log('Highscore updated successfully', response);
           },
           error: function (response) {
               console.log('Error updating highscore', response);
           }
       });
   });
   ```
Execute this script while the game is running to update your high score to 500.