import express = require('express');
import multer = require('multer');
import { Multer } from 'multer';
import assert = require('assert');

import GridFsStorage from "multer-gridfs-storage";
import { RequestHandler, Request, Response, NextFunction } from "express";



var storage = new GridFsStorage({
  url: "mongodb://localhost:27017/juniper",
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-bezkoder-${file.originalname}`;
      return filename;
    }
    

    return {
      bucketName: "photos",
      filename: `${Date.now()}-bezkoder-${file.originalname}`
    };
  }
});

//var uploadFiles = multer({ storage: storage }).fields([{ name: "multi-files", maxCount: 1}]);
//var uploadFiles = multer({ storage: storage }).array("multi-files", 2);
export var uploadFiles = multer({ storage: storage }).single("multi-files");
//var upload = util.promisify(uploadFiles);

/* export const uploadTheFiles = async (req: Request, res: Response) => {
    console.log(req);
    try {
      console.log(req.files);
      await upload(req, res);
      console.log(req.files);
      //console.log(req.files.length);
  
      if (req.files.length <= 0) {
        return res.send(`You must select at least 1 file.`);
      }
  
      return res.send(`Files have been uploaded.`);
  
      // console.log(req.file);
  
      // if (req.file == undefined) {
      //   return res.send(`You must select a file.`);
      // }
  
      // return res.send(`File has been uploaded.`);
    } catch (error) {
      console.log(error);
  
      if (error.code === "LIMIT_UNEXPECTED_FILE") {
        return res.send("Too many files to upload.");
      }
      return res.send(`Error when trying upload many files: ${error}`);
  
      // return res.send(`Error when trying upload image: ${error}`);
    }
  }; */