$(document).ready(function () {
  var currentFloor = 2; //Переменная с текущем этажем
  var floorPath = $(".home-image path"); //каждый отдельный этаж в SVG
  var counterUp = $(".counter-up"); /*кнопка вверх*/
  var counterDown = $(".counter-down"); /*кнопка вниз*/
    
  //функция при наведении мышкой на этаж
  floorPath.on("mouseover", function (){
    floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); //получаем значение текущего этажа
    $(".counter").text(currentFloor); //записываем значение этажа в счетчик
  });

  //функция - отслеживаем клик по кнопке вверх
  counterUp.on("click", function (){
    //проверяем значение этажа оно не должно быть больше 18
    if (currentFloor < 18){ 
      currentFloor++; //прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}); //форматируем переменнуюю с этажем, чтобы было 01 а не 1
      $(".counter").text(usCurrentFloor); //записываем значение этажа в счетчик
      floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //подсвечиваем текущий этаж
    }
  });

  //функция - отслеживаем клик по кнопке вниз
  counterDown.on("click", function (){
    //проверяем значение этажа оно не должно быть меньше 2
    if (currentFloor > 2){
      currentFloor--; //отнимаем один этаж
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}); //форматируем переменнуюю с этажем, чтобы было 01 а не 1
      $(".counter").text(usCurrentFloor); //записываем значение этажа в счетчик
      floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //подсвечиваем текущий этаж
    }
  });
});