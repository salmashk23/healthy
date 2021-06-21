var express = require('express');
var router = express.Router();

router.get('/logout', (req, res) => {
    if (req.session.user_id) {
      req.session.destroy((err) => {
        if (err) {
          return res.send(err);
        }
        return res.send({ res: true });
      });
    } else {
      return res.send({ res: false });
    }
  });