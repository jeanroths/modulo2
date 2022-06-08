
var hptxt = 'Linkedin';
var link = 'https://www.linkedin.com/in/jean-lucas-rothstein-machado-345872231/'; console.log("acesse meu" + hptxt.link(link));

//document.onreadystatechange = function () {
    //if (document.readyState == "complete") {
        //console.log('oi');
        //document.getElementById("lista").innerHTML += "<li>Acesse meu <a href="+url+">"+hptxt+"</a></li>"; 
    //}
//};


    
//AJAX
api = 'http://localhost:3010'


$(document).ready(() => {
    $("#lista").append("<li> Acesse meu <a href='"+link+"'>"+hptxt+" </a></li>");
    users.list();
});


var users = {
    
    list() {
        $.ajax({
            url: api + '/useredit',
            type: 'GET',
            success: data => {
                var tx = '';
                tx += '<div class="insert" onclick="user.insert()">Inserir</div>';
                data.forEach(element => {
                    tx += '<div class="user">';
                        tx += '<div class="title">' + element.title + '</div>';
                        tx += '<div class="actions">';
                            tx += '<div class="action" onclick="user.update(' + element.userId + ',\'' + element.title + '\')">Editar</div>';
                            tx += '<div class="action" onclick="user.delete(' + element.userId + ')">Excluir</div>';
                        tx += '</div>';
                    tx += '</div>';
                });
                $('#main').html(tx);
            }
        });
        
    }
    
};

var user = {

    insert() {
        var title = prompt('Digite o nome:');
        if (title) {
            if (title.trim() != '') {
                $.ajax({
                    type: 'POST',
                    url: api + '/userinsert',
                    data: {title: title},
                }).done(function () {
                    users.list();
                }).fail(function (msg) {
                    //console.log('FAIL');
                }).always(function (msg) {
                    //console.log('ALWAYS');
                });
            }
        }
    },


    update(userId, oldTitle) {

        var title = prompt('Digite o novo nome:', oldTitle);
        if (title) {
            if (title.trim() != '') {
                $.ajax({
                    type: 'POST',
                    url: api + '/userupdate',
                    data: {title: title, userId: userId},
                }).done(function () {
                    users.list();
                }).fail(function (msg) {
                    //console.log('FAIL');
                }).always(function (msg) {
                    //console.log('ALWAYS');
                });
            }
        }
    },

    delete(userId) {

        if (confirm('Confirma a exclusão?')) {
            $.ajax({
                type: 'POST',
                url: api + '/userdelete',
                data: {userId: userId},
            }).done(function () {
                users.list();
            }).fail(function (msg) {
                //console.log('FAIL');
            }).always(function (msg) {
                //console.log('ALWAYS');
            });
        }
    },

}