    var operationVeiw = document.form.operationview;

    function insert (el){
        var value = operationVeiw.value;

        var lastElement = value[value.length - 1]
        if (value.length <= 23){
        if(!isNaN(lastElement) | lastElement == null | !isNaN(el)){
            operationVeiw.value = value + el;
        }
        else if(el != lastElement){
            operationVeiw.value = value.replace(lastElement , el);
        }
    }
    }
    function equal (){
        if(operationVeiw.value){
            var lastElement = operationVeiw.value[operationVeiw.value.length - 1]
            if(!isNaN(lastElement)){
            operationVeiw.value = eval(operationVeiw.value);
        }
        }
    }
    function clean(){
        document.form.operationview.value = '';
        }
    function Back(){
        var value = operationVeiw.value;
        operationVeiw.value = value.substring(0 , value.length - 1)
    }