
exports.get_info = (request, response, next) => {
    response.render('about', {
        username: request.session.username || '',
        src: '', 
        alt: '',
    });
};

exports.post_info = (request, response, next) => {
    response.render('about'); 
};


