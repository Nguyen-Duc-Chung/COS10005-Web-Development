@media (max-width: 768px) {
    /* Adjust main container */
    .Order-container {
        margin-top: 2rem;
        padding: 10px;
    }

    /* Stack columns vertically */
    .row {
        flex-direction: column;
    }

    .row .column {
        flex: 1;
        width: 100%;
        margin-bottom: 20px;
    }

    /* Adjust form size */
    .Order-container form {
        width: 90%;
        padding: 20px;
    }

    /* Adjust input box and button sizes */
    .input-box input, 
    .input-box select, 
    button.comeback,
    form .btn {
        width: 100%;
        padding: 12px;
        font-size: 16px;
    }

    /* Adjust payment option buttons */
    .ship-opt button {
        padding: 10px;
        width: 48%;
        font-size: 14px;
    }

    /* Payment type labels */
    .payment-type label {
        font-size: 20px;
        width: 100%;
        margin: 5px 0;
    }

    /* Hide card images if needed */
    .cardImage {
        display: none;
    }

    /* Fine-tune button and label sizes for touch */
    label.pay-opt::before {
        height: 24px;
        width: 24px;
        margin-right: 10px;
    }
}

/********** ship-mtd  **********/

@media (max-width: 768px) {
    /* Center the buttons on mobile viewports */
    .ship-mtd {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    /* Adjust the .ship-opt container for mobile */
    .ship-opt {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 10px;
    }

    /* Mobile button styling */
    .ship-opt button {
        font-size: 16px;
        padding: 10px 20px;
        margin: 0 5px;
        border: 1px solid #333;
        background-color: #ffffff;
        color: #333;
        border-radius: 8px;
    }

    /* Remove decorative after element for a cleaner look */
    .ship-opt::after {
        display: none;
    }
}