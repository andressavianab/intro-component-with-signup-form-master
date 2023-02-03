# 🧮 [Intro component with signup form](https://andressavianab.github.io/intro-component-with-signup-form-master/)

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned

How to create functions for formulary validation.

```js
form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
})

function checkInputs() {

    const fNameValue = fName.value.trim()
    const lNameValue = lName.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    if (fNameValue === '') {
        errorValidationFname(fName, 'Firts name cannot be empty')
    } else {
        return
    }
```

### Continued development

I want to focus on form validation in conjunction with the DOM, changing and adding classes as needed.

## Author

- github - [@andressavianab](https://github.com/andressavianab)
- Frontend Mentor - [@andressavianab](https://www.frontendmentor.io/profile/andressavianab)

