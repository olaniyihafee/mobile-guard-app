import express = require('express');
import multer = require('multer');
import { Multer } from 'multer';
import assert = require('assert');

import GridFsStorage from "multer-gridfs-storage";
import { RequestHandler, Request, Response, NextFunction } from "express";

const url = "mongodb://localhost:27017/juniper";
const options = { useNewUrlParser: true, useUnifiedTopology: true }

var storage = new GridFsStorage({
  url,
  options,
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}--${file.originalname}`;
      return filename;
    }    

    return {
      bucketName: "Users",
      filename: `${Date.now()}--${file.originalname}`
    };
  }
});

var storage2 = new GridFsStorage({
  url,
  options,
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}--${file.originalname}`;
      return filename;
    }    

    return {
      bucketName: "Groups",
      filename: `${Date.now()}--${file.originalname}`
    };
  }
});

//var uploadFiles = multer({ storage: storage }).fields([{ name: "multi-files", maxCount: 1}]);
//var uploadFiles = multer({ storage: storage }).array("multi-files", 2);
export var uploadUserFiles = multer({ storage: storage }).single("multi-files");
export var uploadGroupFiles = multer({ storage: storage2 }).single("multi-files");