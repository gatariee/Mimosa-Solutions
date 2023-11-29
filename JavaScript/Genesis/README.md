# Genesis

## Description

You've just stumbled upon the latest web game sensation, Genesis. The seemingly endless game promises hours upon hours of fun.

Just, hours of pure fun. Hours.


Reach the end.
## Solution
> ⚠️ This is possibly the most CTF/riddle-type challenge in all of mimosa, please prepare yourself.

1. Play the first couple levels of the game with burp intercept on, and wait for a request.
2. The first request is made after level 1, which is an outgoing POST request to /challenges/genesis with the following data:
```json
{
    "key": "level-0"
}
```
3. The next obvious step would be changing this to an arbitrarily large number, like 100:
> For the next few steps, continue with right-click on the intercepted request in the `Proxy` and `Send to Repeater`
```json
{
    "key": "level-100"
}
```
4. The following response is returned:
```json
{
    "attempt": {
        "id": 0,
        "points": 5,
        "status": "Fail",
        "submission": null,
        "dateSubmitted": "2023-11-29T07:00:31.733+00:00",
        "data": {
            "code": "hacker",
            "raw": "texts = [ { color : '#da4453', weight : 700, size : '120px', font : 'Raleway', message : 'Hacker Detected', position : { x : 400, y : 500 } }, { color : '#da4453', weight : 300, size : '36px', font : 'Raleway', message : 'Did you try to hack us? That\\'s a big no-no.', position : { x : 405, y : 550 } } ]; player.render.fillStyle = '#da4453';",
        },
    },
    "category": "",
    "first": "",
    "rank": "",
}
```
5. We managed to get 5 out of the maximum 25 points, at least.
6. Let's continue playing the game, and/or slowly increasing the level from 1 to 10.
7. `"key": "level-8"`
```json
"data": {
    "code": "delta",
    "raw": "/* no one said my level names are numeric */",
},
```
8. `"key": "delta"`
```json
"data":{
    "code":"zenith",
    "raw":""
}  
```
9. `"key": "zenith"`
```json
"data":{
    "code":"wall",
    "raw":"texts = [ { color : '#37bc9b', weight : 700, size : '120px', font : 'Raleway', message : 'Bummer', position : { x : 400, y : 500 } }, { color : '#37bc9b', weight : 300, size : '36px', font : 'Raleway', message : 'I guess this is the end of the road.', position : { x : 405, y : 550 } } ];  var wall = Bodies.rectangle(canvas.width - 50, canvas.height / 2 - 50, 50, canvas.height, { isStatic : true, render : { fillStyle : '#e6e9ed' } }); bodies.push(wall); World.add(engine.world, wall);"
}
```

10. `"key": "wall"`, and we finally get our... 10 points out of 25 points lol...
```json
{
   "attempt":{
      "id":0,
      "points":10,
      "status":"Fail",
      "submission":null,
      "dateSubmitted":"2023-11-29T07:07:05.934+00:00",
      "data":{
         "code":"wait-what",
         "raw":"texts = [ { color : '#37bc9b', weight : 700, size : '120px', font : 'Raleway', message : 'How', position : { x : 400, y : 500 } }, { color : '#37bc9b', weight : 300, size : '36px', font : 'Raleway', message : 'You managed to cross that? Impressive!', position : { x : 405, y : 550 } } ];"
      }
   },
   "category":"",
   "first":"",
   "rank":""
}
```

11. `"key": "wait-what"`
```json
{
   "attempt":{
      "id":0,
      "points":0,
      "status":"Fail",
      "submission":null,
      "dateSubmitted":"2023-11-29T07:08:14.550+00:00",
      "data":{
         "code":"recursion",
         "raw":"texts = [ { color : '#37bc9b', weight : 700, size : '120px', font : 'Raleway', message : 'Dejavu', position : { x : 400, y : 500 } }, { color : '#37bc9b', weight : 300, size : '36px', font : 'Raleway', message : 'Nothing quite like a little repetition.', position : { x : 405, y : 550 } } ];  /* the next level's key is \"castle\" */  var box = Bodies.rectangle(1100, 960, 100, 100, { render : { fillStyle : '#37bc9b' } }); bodies.push(box); World.add(engine.world, box);"
      }
   },
   "category":"",
   "first":"",
   "rank":""
}
```
12. `"key": "recursion"`
```json
{
   "attempt":{
      "id":0,
      "points":0,
      "status":"Fail",
      "submission":null,
      "dateSubmitted":"2023-11-29T07:08:55.398+00:00",
      "data":{
         "code":"recursion",
         "raw":"texts = [ { color : '#37bc9b', weight : 700, size : '120px', font : 'Raleway', message : 'Dejavu', position : { x : 400, y : 500 } }, { color : '#37bc9b', weight : 300, size : '36px', font : 'Raleway', message : 'Nothing quite like a little repetition.', position : { x : 405, y : 550 } } ];  /* the next level's key is \"castle\" */  var box = Bodies.rectangle(1100, 960, 100, 100, { render : { fillStyle : '#37bc9b' } }); bodies.push(box); World.add(engine.world, box);"
      }
   },
   "category":"",
   "first":"",
   "rank":""
}
```
13. Following the code brings you back to the key "recursion", hence the key name `recursion`.
14. This, however, is important.
```
message : 'Nothing quite like a little repetition.', position : { x : 405, y : 550 } } ]; /* the next level's key is \"castle\" *
```
15. `"key": "castle"` - and we get our 15 points out of 25 points.
```json
{
   "attempt":{
      "id":0,
      "points":15,
      "status":"Completed",
      "submission":null,
      "dateSubmitted":"2023-11-29T07:10:41.732+00:00",
      "data":{
         "code":"bad-ending",
         "raw":"texts = [ { color : '#37bc9b', weight : 700, size : '120px', font : 'Raleway', message : 'Congratulations', position : { x : 400, y : 500 } }, { color : '#37bc9b', weight : 300, size : '36px', font : 'Raleway', message : 'You\\'re reaching the end!', position : { x : 405, y : 550 } } ];"
      }
   },
   "category":"",
   "first":"",
   "rank":""
}
```
16. Do you hate this challenge yet? Don't worry, it gets worse. `"key": "bad-ending"`
```json
{
   "attempt":{
      "id":0,
      "points":0,
      "status":"Fail",
      "submission":null,
      "dateSubmitted":"2023-11-29T07:12:01.331+00:00",
      "data":{
         "code":"bad-ending",
         "raw":"texts = [ { color : '#37bc9b', weight : 700, size : '120px', font : 'Raleway', message : 'Mama Mia', position : { x : 400, y : 500 } }, { color : '#37bc9b', weight : 300, size : '36px', font : 'Raleway', message : 'Your secret is in another caSVGtle!', position : { x : 405, y : 550 } } ];"
      }
   },
   "category":"",
   "first":"",
   "rank":""
}
```
17. The result message: `message : 'Your secret is in another caSVGtle!'`, suggests that the secret is "SVG".
18. Let's go back to step 6, and run through all the levels again to find an SVG file.
19. `"key": "level-5"`
```json
{
   "attempt":{
      "id":0,
      "points":0,
      "status":"Fail",
      "submission":null,
      "dateSubmitted":"2023-11-29T07:13:31.770+00:00",
      "data":{
         "code":"level-6",
         "raw":"prepareSVG('/external/pages/challenges/genesis/logo.svg', (vertexSets) => { var logo = Bodies.fromVertices(1200, 600, vertexSets, { render: {                         fillStyle: '#37bc9b'                     }                 }, true); bodies.push(logo); Composite.add(engine.world, logo); });"
      }
   },
   "category":"",
   "first":"",
   "rank":""
}
```
20. And, we found our SVG file located at: `/external/pages/challenges/genesis/logo.svg` or https://mimosadism.dmit.local/external/pages/challenges/genesis/logo.svg
21. Visiting the page, we get a `logo.svg` file, view page source to find the raw xml:
```xml
<svg xmlns="http://www.w3.org/2000/svg" width="646" height="645" viewBox="0 0 646 645" key="eternity">
```
22. We found the key: "eternity"
23. `"key": "eternity"`
```json
{
   "attempt":{
      "id":184987,
      "points":25,
      "status":"Perfect",
      "submission":null,
      "dateSubmitted":"2023-11-29T07:15:29.125+00:00",
      "data":{
         "code":"eternity",
         "raw":"texts = [ { color : '#37bc9b', weight : 700, size : '120px', font : 'Raleway', message : 'The Crawl', position : { x : 400, y : 500 } }, { color : '#37bc9b', weight : 300, size : '36px', font : 'Raleway', message : 'Congratulations! You win.', position : { x : 405, y : 550 } } ];"
      }
   },
   "category":"",
   "first":"",
   "rank":""
}
```