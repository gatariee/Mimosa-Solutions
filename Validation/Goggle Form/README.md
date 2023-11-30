# Goggle Form

## Description
Client-side validation is a common technique used by web developers to put in place checks for user input. As it's name suggests, it takes place in the browser.

Beginner developers may mistake that this type of validation is sufficient. However, they are visible to the user and can be bypassed.

As a normal user, bypass the restrictions and send invalid data to the system

## Solution 1

1. They state that we need to send invalid data so lets begin by checking the types of data and the limitations set. (inspect each field and see the limitations/conten-types )

2. First we notice that the admin number field has a min and max length of 7. So we begin by adjusting that, we can decrease or increase the value that is up to you.

3. After that we notice that the email field can only really be altered in 1 way, the content-type. So we have to change the field ( u=you can change it to password or just a text field that is up to you).

4. Lastly we see the radio field, we notice that each option has a designated value. So our only option is to alter this value to whatever we want.

5. FIll in the form with data that doesnt conform to the intended input and submit.

## Notes

If you have 1/3 or 2/3 of the data altered you only gain 10 points out of the 15. You need to have all 3 to get the full points.

## Solution 2

1. Use burpsuite to intercept and alter the data to meet the requirements of the challenge (This is not the intended method but it works).
