const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator');

// User Model
const User = require('../models/User');
const Contact = require('../models/Contact');

// @route   GET    api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.send(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST    api/contacts
// @desc    Add new contacts
// @access  Private
router.post(
  '/',
  [auth, [body('name', 'Name is required').not().isEmpty()]],
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();

      res.json(contact);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   PUT    api/contacts/:id
// @desc    Update contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update Contact');
});

// @route   DELETE    api/contacts/:id
// @desc    Delete contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete Contact');
});

// @route   GET    api/contacts
// @desc    Get a single users contacts
// @access  Private
router.get('/:id', (req, res) => {
  res.send('Get a single contacts');
});

module.exports = router;
