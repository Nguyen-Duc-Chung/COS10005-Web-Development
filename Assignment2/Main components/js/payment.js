document.addEventListener("DOMContentLoaded", function () {
    // ******************************* Pay Online or Pay on Pickup Parts *******************************
    // Variables related to payment method and back button
    const onlineRadio = document.getElementById("Online");
    const paymentTypeDiv = document.querySelector(".payment-type");
    const backButton = document.querySelector(".comeback");

    // Fields to be displayed only when 'Online' payment is selected
    const cardAccept = document.querySelector(".card-accept");
    const creditType = document.querySelector(".credit-type");
    const cardName = document.querySelector(".card-name");
    const cardNum = document.querySelector(".card-num input"); // Input field for credit card number
    const cardExp = document.querySelector(".card-exp");

    // Additional variables for credit card type and form submission
    const cardTypeSelect = document.getElementById("cardType");
    const submitButton = document.querySelector("form .btn");

    // ******************************* Delivery or Pickup Parts *******************************
    // Variables related to delivery and pickup options
    const deliveryButton = document.querySelector(".ship-opt button:first-child");
    const pickupButton = document.querySelector(".ship-opt button:last-child");
    const deliveryBox = document.getElementById("deliveryBox");

    // Checkbox and input fields for billing and delivery address
    const sameAsDeliveryCheckbox = document.getElementById("sameAsDelivery");
    const deliveryAddressField = deliveryBox.querySelector(".delivery-text");
    const billingAddressFields = document.querySelectorAll(".input-box .bill-input");


    // ******************************* Pay Online or Pay on Pickup Parts Implementation *******************************
    // Function to toggle display of payment fields and payment-type div based on payment method
    function togglePaymentFields(show) {
        paymentTypeDiv.style.display = show ? "none" : "flex";

        const displayValue = show ? "block" : "none";
        cardAccept.style.display = displayValue;
        creditType.style.display = displayValue;
        cardName.style.display = displayValue;
        cardNum.parentElement.style.display = displayValue; // Show parent div for card number
        cardExp.style.display = displayValue;
        backButton.style.display = displayValue;
    }

    // Event listener to show payment fields when 'Online' is selected
    onlineRadio.addEventListener("change", function() {
        togglePaymentFields(true);
    });

    // Event listener for Back button to go back to payment method selection
    backButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevents form submission if inside form
        togglePaymentFields(false);
    });

    // ******************************* Delivery or Pickup Parts Implementation *******************************
    // Function to toggle display of the delivery input based on the selected shipping method
    function toggleShipmtd(showDelivery) {
        deliveryBox.style.display = showDelivery ? "block" : "none";
    }

    // Event listener for Delivery button to show delivery input fields
    deliveryButton.addEventListener("click", function() {
        toggleShipmtd(true);
    });

    // Event listener for Pickup button to hide delivery input fields
    pickupButton.addEventListener("click", function() {
        toggleShipmtd(false);
    });

    // Event listener for 'Same as delivery address' checkbox to auto-fill billing address
    sameAsDeliveryCheckbox.addEventListener("change", function() {
        if (sameAsDeliveryCheckbox.checked) {
            if (deliveryAddressField.value.trim() === "") {
                alert("Please enter your delivery address first");
                sameAsDeliveryCheckbox.checked = false;
            } else {
                // Auto-fill each billing address field with the delivery address
                billingAddressFields.forEach(field => {
                    if (field !== deliveryAddressField) {
                        field.value = deliveryAddressField.value;
                    }
                });
            }
        }
    });

    // Postcode validation function
    function validatePostcode() {
        const postcode = document.getElementById("postcode");
        if (!/^\d{4}$/.test(postcode.value)) {
            alert("Please enter a valid 4-digit postcode.");
            return false;
        }
        return true;
    }
    // Form submission event with postcode validation
    const orderForm = document.querySelector("form");
    orderForm.addEventListener("submit", function (event) {
        if (!validatePostcode()) {
            event.preventDefault(); // Prevent form submission if postcode is invalid
        }
    });
    

    // ******************************* Card Type and Length Restriction *******************************
    // Function to set the maximum length of the credit card number based on the selected card type
    function setCardNumberLength() {
        let maxLength;
        const selectedCardType = cardTypeSelect.value;

        if (selectedCardType === "Visa" || selectedCardType === "MasterCard") {
            maxLength = 16;
        } else if (selectedCardType === "American Express") {
            maxLength = 15;
        } else {
            maxLength = null; // Default or reset length if no valid selection
        }

        if (maxLength) {
            cardNum.maxLength = maxLength; // Set max length for card number input
        }
    }

    // Event listener to set card number length limit when card type changes
    cardTypeSelect.addEventListener("change", setCardNumberLength);

    // ******************************* Form Validation for Card Number Length *******************************
    // Event listener for form submission to validate the card number length based on card type
    submitButton.addEventListener("click", function(event) {
        if (onlineRadio.checked) {
            const selectedCardType = cardTypeSelect.value;
            const cardNumberLength = cardNum.value.length;

            if ((selectedCardType === "Visa" || selectedCardType === "MasterCard") && cardNumberLength !== 16) {
                event.preventDefault();
                alert("Please enter a 16-digit card number for Visa or MasterCard.");
            } else if (selectedCardType === "American Express" && cardNumberLength !== 15) {
                event.preventDefault();
                alert("Please enter a 15-digit card number for American Express.");
            }
        }
    });
});
