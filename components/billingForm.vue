<template>
  <div class="fullBillingForm">
    <div class="billingInfoContainer">
      <div class="headCard">
        <div class="titleCard">
          Billing Info
        </div>
        <div class="descCard">
          <div class="descInfo">
            Please enter your billing info
          </div>
          <div class="stepCard">
            Step 1 of 4
          </div>
        </div>
      </div>
      <div class="rowInputs">
        <div class="labelAndInput">
          <div class="labelInput">
            Name
          </div>
          <input type="text" placeholder="Your name" class="inputInfo">
        </div>
        <div class="labelAndInput">
          <div class="labelInput">
            Phone Number
          </div>
          <input type="tel" placeholder="Phone number" class="inputInfo">
        </div>
      </div>
      <div class="rowInputs">
        <div class="labelAndInput">
          <div class="labelInput">
            Address
          </div>
          <input type="text" placeholder="Address" class="inputInfo">
        </div>
        <div class="labelAndInput">
          <div class="labelInput">
            Town / City
          </div>
          <input type="text" placeholder="Town or city" class="inputInfo">
        </div>
      </div>
    </div>
    <div class="rentalInfoContainer">
      <div class="headCard">
        <div class="titleCard">
          Rental Info
        </div>
        <div class="descCard">
          <div class="descInfo">
            Please select your rental date
          </div>
          <div class="stepCard">
            Step 2 of 4
          </div>
        </div>
      </div>
      <div class="rowPickUp">
        <p class="pickUpTitle">
          Pick - Up
        </p>
      </div>
      <div class="rowInputs">
        <div class="labelAndInput">
          <div class="labelInput">
            Locations
          </div>
          <select name="" class="inputInfo">
            <option value="" disabled selected>
              Select your city
            </option>
            <option value="">
              Irapuato
            </option>
            <option value="">
              Guanajuato
            </option>
            <option value="">
              Leon
            </option>
          </select>
        </div>
        <div class="labelAndInput">
          <div class="labelInput">
            Date
          </div>
          <input type="date" class="inputInfo inputDT">
        </div>
      </div>
      <div class="rowInputs">
        <div class="labelAndInput">
          <div class="labelInput">
            Time
          </div>
          <input type="time" class="inputInfo inputDT">
        </div>
      </div>
      <div class="rowPickOff">
        <p class="pickOffTitle">
          Drop - Off
        </p>
      </div>
      <div class="rowInputs">
        <div class="labelAndInput">
          <div class="labelInput">
            Locations
          </div>
          <select name="" class="inputInfo">
            <option value="" disabled selected>
              Select your city
            </option>
            <option value="">
              Irapuato
            </option>
            <option value="">
              Guanajuato
            </option>
            <option value="">
              Leon
            </option>
          </select>
        </div>
        <div class="labelAndInput">
          <div class="labelInput">
            Date
          </div>
          <input type="date" class="inputInfo inputDT">
        </div>
      </div>
      <div class="rowInputs">
        <div class="labelAndInput">
          <div class="labelInput">
            Time
          </div>
          <input type="time" class="inputInfo inputDT">
        </div>
      </div>
    </div>
    <div class="paymentMethodContainer">
      <div class="headCard">
        <div class="titleCard">
          Payment Method
        </div>
        <div class="descCard">
          <div class="descInfo">
            Please enter your payment method
          </div>
          <div class="stepCard">
            Step 3 of 4
          </div>
        </div>
      </div>
      <div class="creditCardContainer">
        <div class="headCC">
          <div class="titleCC">
            <p class="textCCtitle">
              Credit Card
            </p>
          </div>
          <div class="logoCC">
            <img src="./../assets/Visa_Logo.png" alt="Visa" class="imgLogoCC">
            <img src="./../assets/Mastercard-Logo.png" alt="MasterCard" class="imgLogoCC">
          </div>
        </div>
        <div class="rowInputs">
          <div class="labelAndInput">
            <div class="labelInput">
              Card Number
            </div>
            <input type="text" placeholder="Card number" class="inputInfo inputInfoCC">
          </div>
          <div class="labelAndInput">
            <div class="labelInput">
              Expiration Date
            </div>
            <input type="text" placeholder="DD / MM / YY" class="inputInfo inputInfoCC">
          </div>
        </div>
        <div class="rowInputs">
          <div class="labelAndInput">
            <div class="labelInput">
              Card Holder
            </div>
            <input type="text" placeholder="Card holder" class="inputInfo inputInfoCC">
          </div>
          <div class="labelAndInput">
            <div class="labelInput">
              CVC
            </div>
            <input type="text" placeholder="CVC" class="inputInfo inputInfoCC">
          </div>
        </div>
      </div>
      <div class="paymentOption">
        <div class="leftSide">
          <div class="optionCircle">
            ‎
          </div>
          <div class="titlePaymentOp">
            PayPal
          </div>
        </div>
        <div class="rightSide">
          <img src="./../assets/paypal.png" alt="logo" class="imgPaymentOp">
        </div>
      </div>
      <div class="paymentOption">
        <div class="leftSide">
          <div class="optionCircle">
            ‎
          </div>
          <div class="titlePaymentOp">
            Bitcoin
          </div>
        </div>
        <div class="rightSide">
          <img src="./../assets/bitcoin.png" alt="logo" class="imgPaymentOp">
        </div>
      </div>
    </div>
    <div class="confirmationContainer">
      <div class="headCard">
        <div class="titleCard">
          Confirmation
        </div>
        <div class="descCard">
          <div class="descInfo">
            We are getting to the end. Just few clicks and your renatl is ready!
          </div>
          <div class="stepCard">
            Step 4 of 4
          </div>
        </div>
      </div>
      <div class="rowAgree">
        <v-container>
          <v-checkbox
            v-model="SPAMisChecked"
            label="I agree with sending an Marketing and newsletter email. No spam, promised!"
            class="chBoxContainer"
            color="info"
          />
          <v-checkbox
            v-model="TCPPisChecked"
            label="I agree with our terms and conditions and privacy policy."
            class="chBoxContainer"
            color="info"
          />
        </v-container>
      </div>
      <div class="rowBtnRN">
        <button class="btnRentNow">
          Rent Now
        </button>
      </div>
      <div class="rowSafety">
        <img src="./../assets/safetyIcon.png" alt="safety_img" class="imgSafety">
        <p class="safeTitle">
          All your data are safe
        </p>
        <p class="safeDesc">
          We are using the most advanced security to provide you the best experience ever.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.fullBillingForm {
  width: 852px;
  margin-right: 2em;
  font-family: 'Plus Jakarta Sans';
}
.billingInfoContainer, .rentalInfoContainer, .paymentMethodContainer, .confirmationContainer {
  background-color: white;
  border-radius: 16px;
  padding: 1.4em 1.8em;
}
.fullBillingForm > div {
  margin-bottom: 2em;
  box-shadow: 0 5px 35px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.2);
}
.headCard {
  width: 100%;
}
.titleCard {
  font-size: 1.4em;
  font-weight: 700;
  color: #1a202c;
}
.descCard {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #90a3bf;
  font-size: .9em;
  margin-bottom: 1em;
}
.descInfo {
  font-weight: 400;
}
.stepCard {
  font-weight: 500;
}
.rowInputs {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
}
.labelAndInput {
  width: 50%;
  margin-bottom: 1.8em;
}
.labelInput {
  color: #1a202c;
  font-size: 1em;
  font-weight: 600;
  margin-bottom: .7em;
}
.inputInfo {
  width: 100%;
  height: 3.8em;
  background-color: #f6f7f9;
  border-radius: 14px;
  padding-left: 2.4em;
  font-weight: 500;
  font-size: .9em;
}
.inputInfo::placeholder {
  color: #90a3bf;
}
.rowInputs .labelAndInput:nth-of-type(2) {
  margin-left: 1.5em
}
.rowInputs .labelAndInput:nth-of-type(1) {
  margin-right: 1.5em;
}
.inputDT {
  padding-right: 2em;
}
select option:disabled {
  color: gray;
}
.textCCtitle {
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 2.4em;
}
.textCCtitle::before, .textCCtitle::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: #3563e9;
}
.textCCtitle::before {
  width: 18px;
  height: 18px;
  background-color: #3563e9;
}
.textCCtitle::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}
.rowPickUp, .rowPickOff {
  margin-top: 1em;
  margin-bottom: 1.4em;
}
.pickUpTitle, .pickOffTitle {
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
  color: #1a202c;
  font-weight: 600;
  font-size: 1.1em
}
.pickUpTitle::before, .pickUpTitle::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: #3563e9;
}
.pickUpTitle::before {
  width: 18px;
  height: 18px;
  background-color: #3563e9;
}
.pickOffTitle::before, .pickOffTitle::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: #54a6ff;
}
.pickOffTitle::before {
  width: 18px;
  height: 18px;
  background-color: #54a6ff;
}
.pickUpTitle::after, .pickOffTitle::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}
.headCC {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.4em;
}
.creditCardContainer {
  background-color: #f6f7f9;
  padding: 1.4em 1.8em;
  border-radius: 16px;
}
.inputInfoCC {
  background-color: white;
}
.titleCC {
  color: #1a202c;
  font-size: 1.1em;
  font-weight: 600;
  padding-left: .3em;
}
.logoCC {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.imgLogoCC {
  width: 3em;
}
.chBoxContainer {
  background-color: #f6f7f9;
  padding-bottom: 0;
  padding-top: 1.2em;
  padding-left: 2.5em;
  border-radius: 14px;
}
.rowBtnRN {
  margin-bottom: 2em;
  margin-top: 1.4em;
}
.btnRentNow {
  background-color: #3563e9;
  color: white;
  border-radius: 14px;
  padding: 1em 2em;
  font-weight: 600;
}
.imgSafety {
  width: 2em;
}
.safeTitle {
  color: #1a202c;
  margin-top: .8em;
  font-size: 1em;
  font-weight: 600;
  margin-bottom: .2em;
}
.safeDesc {
  color: #90a3bf;
  font-size: .8em;
  font-weight: 400;
}
.paymentOption {
  background-color: #f6f7f9;
  display: flex;
  flex-direction: row;
  margin-top: 1.6em;
  border-radius: 16px;
  justify-content: space-between;
  align-items: center;
  padding: .7em 2em;
}
.titlePaymentOp {
  padding-left: 1.4em;
  font-size: 1.2em;
  font-weight: 600;
  color: #1a202c;
}
.leftSide {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.imgPaymentOp {
  width: 6em;
}
.optionCircle {
  border-radius: 50%;
  background-color: white;
  border: 1px solid #90a3bf;
  width: 1.4em;
  height: 1.4em;
  color: white;
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}
</style>
