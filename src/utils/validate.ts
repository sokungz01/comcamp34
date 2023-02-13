export const checkGrade = (str: any) => {
   const RegEx = /^(\d{1}\.)\d{1}(\d{1}|\s*$)/;
   if (RegEx.test(str) && parseFloat(str) <= 4 && str.length >= 3 && str.length <= 4) {
      return true;
   }
   return false;
};
export const checkEmail = (str: any) => {
   const RegEx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (RegEx.test(str)) {
      return true;
   }
   return false;
};
function isNumber(str: any) {
   if (str.trim() === "") {
      return false;
   }
   if (str.includes("E") === true || str.includes("e") === true) {
      return false;
   }
   return !isNaN(str);
}
export const isMobileNumber = (str: any) => {
   if (
      str.length == 10 &&
      isNumber(str) &&
      str[0] == "0" &&
      (str[1] == "8" || str[1] == "9" || str[1] == "6")
   ) {
      return true;
   }
   return false;
};
