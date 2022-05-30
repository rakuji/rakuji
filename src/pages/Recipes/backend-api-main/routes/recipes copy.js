const express = require("express");
const router = express.Router();
const multer = require("multer");
const db = require("../modules/mysql_config");
const upload = multer();
//GET　http://localhost:3001/categories/
router
  .route("/")
  .get(async (req, res, next) => {
    const sql = "SELECT * FROM recipeslist";
    const [datas] = await db.query(sql);
    res.json(datas);
  })
  .post(upload.none(), async (req, res, next) => {
    const sql =
      "INSERT INTO recipeslist(Recipes_ID,Recipes_Name,Recipes_Clicks,Recipes_Picture) VALUES (?,?,?,?)";
    // const [datas] = await db.query(sql,[req.body]);
    const [datas] = await db.query(sql, [
      req.body.CategoryID,
      req.body.CategoryName,
      req.body.Recipes_Clicks,
      req.body.Recipes_Picture,
    ]);
    console.log(datas);
    res.send("新增資料");
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    const id = req.params.id;
    const sql = "SELECT * FROM recipeslist WHERE Recipes_ID=?";
    const [datas] = await db.query(sql, [id]);
    res.json(datas);
    //  res.send(`讀取${id}的資料`)
  })
  .put(upload.none(), async (req, res, next) => {
    let output = {
      ok: false,
    };
    const id = req.params.id;
    const sql =
      "UPDATE recipeslist SET RecipesName=?, Recipes_Clicks=? WHERE Recipes_ID=?";
    const [datas] = await db.query(sql, [
      req.body.RecipesName,
      req.body.Recipes_Clicks,
      id,
    ]);
    if (datas.affectedRows === 1) {
      output.ok = true;
    }
    res.json(output);
  })
  .delete(async (req, res, next) => {
    let output = {
      ok: false,
    };
    const id = req.params.id;
    const sql = "DELETE FROM recipeslist WHERE Recipes_ID=?";
    const [datas] = await db.query(sql, [id]);
    if (datas.affectedRows === 1) {
      output.ok = true;
    }
    res.json(output);
  });

module.exports = router;
