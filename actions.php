<?php
	/*	escape_chars	очищает строку от инъекций кода
	 *  getbool			получает из строки булевую
	 *  checknumber		проверяет номер телефона
	 * */

	header('Content-Type: text\nhtml; charset=UTF-8', true);
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text\nplain; charset=UTF-8' . "\r\n";
	$headers .= 'From: SRO' . "\r\n";

	//очищает строку от инъекций кода
	function escape_chars($strinput){
		$strinput = trim($strinput);
		$strinput = stripslashes($strinput);
		$strinput = strip_tags($strinput);
		$strinput = htmlspecialchars($strinput);
		return $strinput;
	
	}
	//проверка на длину
	function check_length($value = "", $min, $max) {
		$result = (mb_strlen($value) < $min || mb_strlen($value) > $max);
		return !$result;
	}
	//получает из строки булевую
	function getbool($boolstr){
		$boolstr = filter_var($boolstr, FILTER_VALIDATE_BOOLEAN);
		return $boolstr;
	}
	//проверяет номер телефона
	function checknumber($num){
		$arrayreplace = array("-","(",")"," ");
		$num = str_replace($arrayreplace,"",$num);
		$result = preg_match('/^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/', $num, $res);
		if ($num == '')
			$result = 0;
		return $result;
	}
	
	//действие получаемое из формы
	$action = escape_chars($_POST['action']);
	//емейл
	$email = 'prg2.promocity.ekb@yandex.ru';
	
	//вопрос
	if ($action == 'question'){
		//получаем данные с  формы
		$question_name = escape_chars($_POST['question_name']);
		$question_tel = escape_chars($_POST['question_tel']);
		$question_text = escape_chars($_POST['question_text']);
		if (!empty($question_name) && !empty($question_tel) && !empty($question_text)){
			if (checknumber($question_tel)==1 && check_length($question_name, 2, 25) && check_length($question_tel, 5, 25) && check_length($question_text, 1, 10000) ){
				//формирование емейла
				$mail_message = "Вопрос от лица:\n";
				$mail_message .="Имя: ".$question_name."\n";
				$mail_message .="Телефон: ".$question_tel."\n";
				$mail_message .="Вопрос: ".$question_text."\n";
				mail($email, 'Вопрос', $mail_message, $headers);
				$errormessage = "Заявка успешно отправлена.";
			} else {
				$errormessage = 'Введены некорректные данные.';
			}
		}else {
			$errormessage = 'Введены некорректные данные.';
		}		
	} else if ($action == 'consultation'){
		//получаем данные с  формы
		$consultation_name = escape_chars($_POST['consultation_name']);
		$consultation_tel = escape_chars($_POST['consultation_tel']);
		$consultation_email = escape_chars($_POST['consultation_email']);
		//проверка данных
		$email_validate = filter_var($consultation_email, FILTER_VALIDATE_EMAIL); 
		if (!empty($consultation_name) && !empty($consultation_tel) && !empty($consultation_email)){
			if ($email_validate && checknumber($consultation_tel)==1 && check_length($consultation_name, 2, 25) && check_length($consultation_tel, 5, 25) && check_length($consultation_email, 3, 255) ){
				//формирование емейла
				$mail_message = "Заявка  от лица:\n";
				$mail_message .="Имя: ".$consultation_name."\n";
				$mail_message .="Телефон: ".$consultation_tel."\n";
				$mail_message .="E-Mail: ".$consultation_email."\n";
				mail($email, 'Заявка', $mail_message, $headers);
				$errormessage = "Заявка успешно отправлена.";
			} else {
				$errormessage = 'Введены некорректные данные.';
			}
		}else {
			$errormessage = 'Введены некорректные данные.';
		}
	}else if ($action == 'call'){
		//получаем данные с  формы
		$call_name = escape_chars($_POST['call_name']);
		$call_tel = escape_chars($_POST['call_tel']);
		//проверка данных
		if (!empty($call_name) && !empty($call_tel)){
			if (checknumber($call_tel)==1 && check_length($call_name, 2, 25) && check_length($call_tel, 5, 25) ){
				//формирование емейла
				$mail_message = "Заявка от лица:\n";
				$mail_message .="Имя: ".$call_name."\n";
				$mail_message .="Телефон: ".$call_tel."\n";
				mail($email, 'Заявка', $mail_message, $headers);
				$errormessage = "Заявка успешно отправлена.";
			} else {
				$errormessage = 'Введены некорректные данные.';
			}
		}else {
			$errormessage = 'Введены некорректные данные.';
		}
	}else {
		$errormessage = "Не верное действие.";
	}
	echo $errormessage;
?>