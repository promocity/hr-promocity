function OutData(inResultForm){
	//вывод данных об ошибках
	console.log(inResultForm);
}

function SendQuestion(){	//отправка данных вопроса с контактов
    $.ajax({
        type: "POST",
        url: "/actions.php",
        data: 'action=question'+
              '&question_name='+$('#question_name').val()+
              '&question_tel='+$('#question_tel').val()+
              '&question_text='+$('#question_text').val(),
        success: function(data){
		/*
			Действия для вывода уведовлений
			data - выводимый текст
		*/
			OutData(data);
        }
    });
}

function RequestConsultation(){	//отправка данных вопроса с контактов
    $.ajax({
        type: "POST",
        url: "/actions.php",
        data: 'action=consultation'+
              '&consultation_name='+$('#consultation_name').val()+
              '&consultation_tel='+$('#consultation_tel').val()+
              '&consultation_email='+$('#consultation_email').val(),
        success: function(data){
		/*
			Действия для вывода уведовлений
			data - выводимый текст
		*/
			OutData(data);
        }
    });
}

function RequestCall(){	//отправка данных вопроса с контактов
    $.ajax({
        type: "POST",
        url: "/actions.php",
        data: 'action=call'+
              '&call_name='+$('#call_name').val()+
              '&call_tel='+$('#call_tel').val(),
        success: function(data){
		/*
			Действия для вывода уведовлений
			data - выводимый текст
		*/
			OutData(data);
        }
    });
}
