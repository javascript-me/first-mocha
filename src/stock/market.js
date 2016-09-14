
exports.getPrice = function(symbol, cb, httpObj) {

    var http = httpObj || require('http');
    var options = {
        host: 'abc.com',
        path: '/xxx/xxx'
    };

    http.get(options, function (res) {
        res.on('data', function (d) {
            cb(null, d);
        });
    }).on('error', function (e) {
            cb(e.message);
        });
};

