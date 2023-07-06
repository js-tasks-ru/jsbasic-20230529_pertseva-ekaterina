let calculator = {
  object : {},
  read(a, b){
    if (Number.isFinite(a) && Number.isFinite(b)){
      this.object.a = a;
      this.object.b = b;
  }
  },

  sum(){
    return this.object.a + this.object.b;
  },

  mul(){
    return this.object.a * this.object.b;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
