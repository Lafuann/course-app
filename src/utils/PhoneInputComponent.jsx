/*eslint-disable*/
import React from "react";
import PhoneInput from "react-phone-input-2";

const PhoneInputComponent = ({ phoneNumber, setPhoneNumber }) => {
  return (
    <>
      <div className="input-phone-group">
        <PhoneInput
          // country={"id"}
          onlyCountries={['my','id']}
          value={phoneNumber}
          addInternationalOption={false}
          placeholder="Enter your phone number"
          onChange={(phone) => setPhoneNumber(phone)}
          maxLength={12}
          // onlyCountries={["id", "my"]}
          // onlyCountries={["my"]}
        />
      </div>
    </>
  );
};

export default PhoneInputComponent;
