var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// 注册ejs模板为html页。简单的讲，就是原来以.ejs为后缀的模板页，现在的后缀名可以//是.html了
// app.engine('.html', require('ejs').__express);
// 设置视图模板的默认后缀名为.html,避免了每次res.Render("xx.html")的尴尬
// app.set('view engine', 'html');
// 设置模板文件文件夹,__dirname为全局变量,表示网站根目录
// app.set('views', path.join(__dirname, './dist'));
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use('/', (req, res, next) => {
  res.render(path.join(__dirname, './dist/index.ejs'), {
    hello: 'hello'
  })
  next()
});
app.use('/',express.static(path.join(__dirname, './dist')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
