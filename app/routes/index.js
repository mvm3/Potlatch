module.exports = function(application){
    application.get('/', function(request, response) {
        application.app.controllers.index.renderIndex(application, request, response);
    });
}