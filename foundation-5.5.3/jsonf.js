

function insert() {
    var data ;
    var data1 = JSON.parse(localStorage.getItem("formdata"));
    var myForm = document.getElementById('myForm');
    var formData = new FormData(myForm);
    var name = formData.get('name');
    var mail = formData.get('mail');
    var mobile = formData.get('mobile');
    var b = validform(name, mobile, mail);
    if (b) {
        var result = {};
        for (var entry of formData.entries()) {
            result[entry[0]] = entry[1];
        }
        if(data1!=null){
        data =data1;
        data.push(result);
        }else{
            data=[result];
        }
        $("#done").text("completed");
        localStorage.setItem("formdata", JSON.stringify(data));
        $("#myForm").trigger('reset');
    }
}














