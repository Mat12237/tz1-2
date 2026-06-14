const { body } = require('express-validator');

const VALID_STATUSES = ['WORKING', 'ON_LEAVE', 'NOT_WORKING'];

const createTrainerRules = [
  body('surname').notEmpty().withMessage('surname обязателен'),
  body('name').notEmpty().withMessage('name обязателен'),
  body('patronymic').optional().isString().withMessage('patronymic должен быть строкой'),
  body('phone')
    .notEmpty().withMessage('phone обязателен')
    .matches(/^\+?[\d\s\-()]{7,20}$/).withMessage('Некорректный формат телефона'),
  body('status')
    .optional()
    .isIn(VALID_STATUSES)
    .withMessage(`status должен быть одним из: ${VALID_STATUSES.join(', ')}`),
];

const updateTrainerRules = [
  body('surname').optional().notEmpty().withMessage('surname не может быть пустым'),
  body('name').optional().notEmpty().withMessage('name не может быть пустым'),
  body('patronymic').optional({ nullable: true }).isString(),
  body('phone')
    .optional()
    .matches(/^\+?[\d\s\-()]{7,20}$/).withMessage('Некорректный формат телефона'),
];

const updateStatusRules = [
  body('status')
    .notEmpty().withMessage('status обязателен')
    .isIn(VALID_STATUSES)
    .withMessage(`status должен быть одним из: ${VALID_STATUSES.join(', ')}`),
];

module.exports = { createTrainerRules, updateTrainerRules, updateStatusRules };
