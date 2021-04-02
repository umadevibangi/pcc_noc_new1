export default isVehicleNumber =>
  !/^[A-Z]{0,3}[ ]{0,1}[0-9]{0,2}[ ]{0,1}[A-Z]{0,2}[ ]{0,1}[0-9]{0,4}$/.test(
    isVehicleNumber
  );
