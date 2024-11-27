function toggleDeliveryAddress(show) {
    document.getElementById('deliveryAddress').classList.toggle('hidden', !show);
  }
  
  function togglePaymentFields(show) {
    document.getElementById('creditCardInfo').classList.toggle('hidden', !show);
  }
  
  function copyAddress() {
    const deliveryAddr = document.getElementById('deliveryAddr').value;
    const billingAddr = document.getElementById('billingAddr');
    const alertMessage = document.getElementById('alertMessage');
  
    if (document.getElementById('sameAddressCheckbox').checked) {
      if (!deliveryAddr.trim()) {
        alertMessage.classList.remove('hidden');
      } else {
        alertMessage.classList.add('hidden');
        billingAddr.value = deliveryAddr;
      }
    } else {
      alertMessage.classList.add('hidden');
      billingAddr.value = "";
    }
  }
  