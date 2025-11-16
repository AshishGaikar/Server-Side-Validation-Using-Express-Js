const path = require('path');
const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

const registrationValidationRules = [
  body('fullName')
    .trim()
    .notEmpty()
    .withMessage('Full name is required.')
    .isLength({ min: 3 })
    .withMessage('Full name must be at least 3 characters long.'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required.')
    .isEmail()
    .withMessage('Please enter a valid email address.'),
  body('password')
    .notEmpty()
    .withMessage('Password is required.')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long.'),
  body('confirmPassword')
    .custom((value, { req }) => value === req.body.password)
    .withMessage('Passwords do not match.'),
  body('age')
    .optional({ checkFalsy: true })
    .isInt({ min: 18, max: 120 })
    .withMessage('Age must be a number between 18 and 120.'),
  body('terms')
    .equals('on')
    .withMessage('You must accept the terms and conditions.')
];

app.get('/', (req, res) => {
  res.render('form', {
    data: {},
    errors: {}
  });
});

app.post('/register', registrationValidationRules, (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const mappedErrors = errors.mapped();

    return res.status(422).render('form', {
      data: req.body,
      errors: mappedErrors
    });
  }

  res.render('success', {
    fullName: req.body.fullName,
    email: req.body.email
  });
});

app.use((req, res) => {
  res.status(404).render('error', {
    message: 'The page you are looking for could not be found.'
  });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).render('error', {
    message: 'Something went wrong on the server. Please try again later.'
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

