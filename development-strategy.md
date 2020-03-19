# Ajax type ahead: Development Strategy

Building this site one step at a time

---

## 0. README

* Write the `README.md`, including the final screen shot
* Include a License
* Include this `development-strategy.md` file

---

## 1. Setup

* Create boilerplate index.html and CSS style sheet style.css

---

## 2. Data & Log

- `cities.js` & `log.js`

---

## 3. User Story: `look-ahead`

- A user can see suggestions of cities and state names based on what he is typing in the input text field.
- I wrote the code in `listeners/look-ahead.js` & `handlers/look-ahead.js`
- The handler function matches and filters the `cities` array with the text typed in the input box, after it shows the user a list with suggestions based on the matches found, the handler is connected to the UI with a `change` and `keyup` event.