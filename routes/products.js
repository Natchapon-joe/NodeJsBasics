const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../models/Product");

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  Product.findById(req.params.id)
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/", async (req, res, next) => {
  Product.create(req.body)
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      return next(err);
    });
});

router.put("/:id", (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, req.body)
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete("/:id", (req, res, next) => {
  Product.findByIdAndDelete(req.params.id)
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
