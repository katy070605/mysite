document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Забороняємо формі відправлятися на сервер
  
    // Отримуємо значення полів форми
    let productName = document.getElementById("productName").value;
    let quantity = parseInt(document.getElementById("quantity").value);
    let price = parseFloat(document.getElementById("price").value);
  
    // Розраховуємо загальну вартість
    let total = quantity * price;
    
    // Заповнюємо поле "Загальна вартість"
    document.getElementById("total").value = total.toFixed(2);
  
    // Виводимо зібрані дані
    alert("Ваше замовлення:\nНазва товару: " + productName + "\nКількість: " + quantity + "\nЦіна за одиницю: " + price.toFixed(2) + "\nЗагальна вартість: " + total.toFixed(2));
  
    // Можна додати код для відправлення даних на сервер або їх обробки
});