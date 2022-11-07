jQuery(document).ready(function () {
  jQuery("form").submit(function () {
    // Событие отправки с формы
    let form_data = jQuery(this).serialize();
    let token = "5651868206:AAEaD7Y2SejsjUE2EmkHra_QUvNJ6IaBoZE"; // Собираем данные из полей
    let chat_id = "-829571158";

    jQuery.ajax({
      type: "POST", // Метод отправки
      url: "sendform.php", // Путь к PHP обработчику sendform.php
      data: form_data,
      success: swal({
        title: "Спасибо за заявку!",
        type: "success",
        showConfirmButton: false,
        timer: 2000,
      }),
    });
    jQuery(this).find("input, textarea").prop("disabled", true);
    event.preventDefault();
  });
  console.log("Все ок!");
});
