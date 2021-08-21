function updateMemoryAmount(isMemorySixteen) {
    const memoryAmount = document.getElementById('extra-memory-amount');
    if (isMemorySixteen) {
        memoryAmount.innerText = 180;
    } else {
        memoryAmount.innerText = 0;
    }
}

function updateStorageAmount(storage) {
    const storageAmount = document.getElementById('extra-storage-amount');
    if (storage == 1) {
        storageAmount.innerText = 180;
    } else if (storage == 512) {
        storageAmount.innerText = 100;
    } else if (storage == 256) {
        storageAmount.innerText = 0;
    }
}

function updateDelivery(isDeliveryFree) {
    const deliveryAmount = document.getElementById('delivery-charge-amount');
    if (isDeliveryFree) {
        deliveryAmount.innerText = 0;
    } else {
        deliveryAmount.innerText = 20;
    }
}

function updateTotalAmount() {
    const defaultAmount = document.getElementById('default-amount').innerText;
    const memoryAmount = document.getElementById("extra-memory-amount").innerText;
    const storageAmount = document.getElementById("extra-storage-amount").innerText;
    const deliveryAmount = document.getElementById("delivery-charge-amount").innerText;

    const totalAmount = parseInt(memoryAmount) + parseInt(storageAmount) + parseInt(deliveryAmount) + parseInt(defaultAmount);
    document.getElementById('total-amount').innerText = totalAmount;
    document.getElementById('discount-amount').innerText = totalAmount;
}

// Add Memory Event Handler
document.getElementById('memory-btn1').addEventListener('click', function() {
    updateMemoryAmount(false);
    updateTotalAmount();


})

document.getElementById('memory-btn2').addEventListener('click', function() {
    updateMemoryAmount(true);
    updateTotalAmount();

})

// Add storage event handler
document.getElementById('storage-btn1').addEventListener('click', function() {

    updateStorageAmount(256);
    updateTotalAmount();
})

document.getElementById('storage-btn2').addEventListener('click', function() {
    updateStorageAmount(512);
    updateTotalAmount();
})

document.getElementById('storage-btn3').addEventListener('click', function() {
    updateStorageAmount(1);
    updateTotalAmount();
})

//Add delivery button event handler 
document.getElementById('delivery-btn1').addEventListener('click', function() {
    updateDelivery(true);
    updateTotalAmount();

})

document.getElementById('delivery-btn2').addEventListener('click', function() {
    updateDelivery(false);
    updateTotalAmount();

})

//Add Promo Code event and Discount total
document.getElementById("apply-btn").addEventListener("click", function() {
    const promoInput = document.getElementById('promo-input-form');
    const totalDiscountAmount = document.getElementById('discount-amount');
    const totalAmount = document.getElementById('total-amount').innerText;
    const totalPrice = parseInt(totalAmount);
    if (promoInput.value == 'stevekaku') {
        totalDiscountAmount.innerText = totalPrice * (0.8);
    } else {
        totalDiscountAmount.innerText = totalPrice;
    }
    promoInput.value = "";
});