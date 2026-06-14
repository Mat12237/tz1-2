const { body } = require('express-validator');

const createClientRules = [
  body('surname').notEmpty().withMessage('surname обязателен'),
  body('name').notEmpty().withMessage('name обязателен'),
  body('patronymic').optional({ nullable: true }).isString(),
  body('birthday')
    .notEmpty().withMessage('birthday обязателен')
    .isISO8601().withMessage('birthday должен быть в формате YYYY-MM-DD'),
  body('phone')
    .notEmpty().withMessage('phone обязателен')
    .matches(/^\+?[\d\s\-()]{7,20}$/).withMessage('Некорректный формат телефона'),
  body('email')
    .notEmpty().withMessage('email обязателен')
    .isEmail().withMessage('Некорректный email'),
  body('is_active')
    .optional()
    .isBoolean().withMessage('is_active должен быть булевым значением'),
  body('trainer_id')
    .optional({ nullable: true })
    .isUUID().withMessage('trainer_id должен быть валидным UUID'),
];

const updateClientRules = [
  body('surname').optional().notEmpty().withMessage('surname не может быть пустым'),
  body('name').optional().notEmpty().withMessage('name не может быть пустым'),
  body('patronymic').optional({ nullable: true }).isString(),
  body('birthday')
    .optional()
    .isISO8601().withMessage('birthday должен быть в формате YYYY-MM-DD'),
  body('phone')
    .optional()
    .matches(/^\+?[\d\s\-()]{7,20}$/).withMessage('Некорректный формат телефона'),
  body('email')
    .optional()
    .isEmail().withMessage('Некорректный email'),
];

const updateStatusRules = [
  body('is_active')
    .notEmpty().withMessage('is_active обязателен')
    .isBoolean().withMessage('is_active должен быть булевым значением (true/false)'),
];

module.exports = { createClientRules, updateClientRules, updateStatusRules };
