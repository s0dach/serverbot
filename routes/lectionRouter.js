const { Router } = require("express");
const router = new Router();
const Lection = require("../models/Lection");

router.post("/addmaterial", async (req, res) => {
  try {
    const { owner, text, order } = req.body;
    const lection = new Lection({
      text,
      owner,
      documentId: 0,
      order,
      complete: false,
      pollOptions: undefined,
    });
    await lection.save();

    res.json(lection);
  } catch (err) {
    console.log(err);
  }
});

router.get("/getmaterial", async (req, res) => {
  try {
    const { params } = req.query;
    if (params) {
      const lection = await Lection.find({ owner: params?.id });
      res.json(lection);
    }
  } catch (err) {
    console.log(err);
  }
});

router.patch("/updatematerial", async (req, res) => {
  try {
    const list = req.body;
    const lection = await Lection.findOneAndUpdate(
      { _id: list._id },
      {
        $set: {
          complete: list.complete,
          documentId: list.documentId,
          order: list.order,
          owner: list.owner,
          pollId: list.pollId,
          pollOptions: list.pollOptions,
          pollQuestion: list.pollQuestion,
          text: list.text,
        },
      }
    );
    await lection.save();

    res.json(lection);
  } catch (err) {
    console.log(err);
  }
});

router.patch("/updatematerial/:id", async (req, res) => {
  try {
    const list = req.body;
    console.log(list);
    const lection = await Lection.findOneAndUpdate(
      { _id: list._id },
      {
        $set: {
          documentId: list.documentId,
        },
      }
    );
    await lection.save();

    res.json(lection);
  } catch (err) {
    console.log(err);
  }
});

router.patch("/updatestoplection", async (req, res) => {
  try {
    const params = req.body;

    const lection = await Lection.updateMany(
      { owner: params.id },
      {
        $set: {
          complete: params.complete,
        },
      }
    );

    res.json(lection);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/deletelection", async (req, res) => {
  try {
    const lection = await Lection.findOneAndDelete({ _id: req.params.id });
    res.json(lection);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
