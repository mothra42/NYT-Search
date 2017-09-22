// import Article from "../models/Article";
// import express from "express";
// import path from "path";
//for testing
var Article = require("../models/Article");
var express = require("express");
var path = require("path");

var router = new express.Router();

router.get("/api/article", (req, res) =>
{
  Article.find({}).then(data =>
  {
    res.json(data);
  }).catch(err =>
    {
      res.json(err);
    });
});

router.post("/api/article/", (req, res) =>
{
  Article.create(req.body).then(data =>
  {
    res.json(data);
  }).catch(err =>
    {
      res.json(err);
    });
});

router.post("/api/article/:id", (req, res) =>
{
  Article.remove({
    _id: req.params.id
  }).then(data =>
    {
      res.json(data);
    }).catch(err =>
      {
        res.json(err);
      });
});

router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
//export default router;
