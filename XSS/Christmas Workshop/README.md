# Christmas Workshop

## Description
Your overly enthusiastic classmate showcases his new web chat engine he had developed to your clique. Coincidentally, you have just attended a class taught by Mr Low, and understood the importance of web security. You wonder if his web service is reliable... Perhaps it's time to leave him an early Christmas gift. But watch out! Santa doesn't like javascript!

So this is XSSmas. And what have you done?

Craft a link using an anchor tag ```<a>``` in your message and make it direct users to ```https://google.com``` upon clicking.


## Solution

1. Any atempt at using ```<a></a>``` will not work due to the XSS filtering, so we got to get creative

2. We need to use malformed anchor tags ```<a>```. This will hide the anchor tag from getting filtered
``` 

\<a href="https://google.com"\>xxs link\</a\

```
