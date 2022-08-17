const db = require('../config/db.config.js');
const User = db.user; //  引入表模型


// 根据id查询图书信息
exports.login = (req, res) => {
  console.log(req.body);
  User.findAll({ where: { username: req.body.username, password: req.body.password }})
    .then(book => {
      console.log(book);
      if (book && book.length) {
       return res.json(book);
      }
      res.status(500).json({
        msg:'没有当前用户'
      });
    })
    .catch(err => {
      res.status(500).json('Error -> ' + err);
    });
};

exports.register = (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
    email:'123'
  })
    .then(book => {
      let msg = {
        code: 200,
        msg: '新增成功!',
        id: book.id
      };
      res.status(200).json(msg);
    })
    .catch(err => {
      res.status(500).json('Error -> ' + err);
    });
};
