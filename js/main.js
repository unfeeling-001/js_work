   
   
   let date = '28.02.1999' // Для того что бы задать дату можно использовать тип данных string

   let pi = 3.14 // Для сохранения числа ПИ можно использовать тип данных number или же (число с плавающей запятой)

//    const info = 'information'

//    info = 'deinformation' //Естественно будет ошибка о том что значение константы уже задана и ее изменение приведет к ошибке
    

//    переменные
   let name = prompt("Ваше имя")

   let address = prompt("Ваш адрес")

   let phone = prompt ("Ваш номер телефона")

   console.log(`Студент ${name}. Адрес: ${address}, Номер телефона: ${phone}`);

    let exchangeRate = 70; // Курс рубля к доллару
    
    let rubles = 10000; // Количество доступных рублей

    let dollars = rubles / exchangeRate; // Расчет количества долларов

    console.log(`Можно купить ${dollars} долларов на доступную сумму.`);
    