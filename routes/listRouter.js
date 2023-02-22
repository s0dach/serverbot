const { Router } = require("express");
const router = new Router();
const List = require("../models/List");

router.post("/addlist", async (req, res) => {
  try {
    const { listInputValue } = req.body;
    const lection = new List({
      name: listInputValue,
      usersId: [],
      active: false,
      editable: false,
      published: 0,
    });

    await lection.save();
    res.json(lection);
  } catch (err) {
    console.log(err);
  }
});

router.patch("/updatelist", async (req, res) => {
  try {
    const list = req.body;
    const lection = await List.findOneAndUpdate(
      { _id: list._id },
      {
        $set: {
          active: list.active,
          editable: list.editable,
          name: list.name,
          usersId: list.usersId,
          optionsReply: list.optionsReply,
          published: list.published,
        },
      }
    );
    await lection.save();

    res.json(lection);
  } catch (err) {
    console.log(err);
  }
});

router.patch("/updatelistusers/:id", async (req, res) => {
  try {
    console.log(req.body);
    const list = req.body;
    const lection = await List.findOneAndUpdate(
      { _id: list.id },
      {
        $set: {
          usersId: list.usersId,
        },
      }
    );

    res.json(lection);
  } catch (err) {
    console.log(err);
  }
});

router.get("/getlist", async (req, res) => {
  try {
    const list = await List.find();
    res.json(list);
  } catch (err) {
    console.log(err);
  }
});

router.get("/getlist/:id", async (req, res) => {
  try {
    const list = await List.findOne({ _id: req.params.id });
    res.json(list);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/deletelist/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const lection = await List.findOneAndDelete({ _id: req.params.id });
    res.json(lection);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
