const express = require('express');
const Color = require('../models/color');
const userColor = require('../models/userColor');
const resultRouter = express.Router();

resultRouter.route('/')
  .get(async (req, res, next) => {
    try {
      const colors = await Color.find({});
      res.json(colors);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });
  /*
  .post(async (req, res, next) => {
    try {
      const colorData = await userColor.create({
        user_id: req.body.user_id,
        color_id: req.body.color_id,
      });
      console.log(colorData);
      res.status(201).json(colorData);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });
  */
module.exports = resultRouter;