
exports.get_home = (request, response, next) => {
    response.render('home', {
        username: request.session.username || '',
        src: '', 
        alt: '',
    });
};

exports.post_home = (request, response, next) => {
    response.render('home'); 
};


