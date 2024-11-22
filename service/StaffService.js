import { getCookie } from "./ToeknService.js";

export function getAllStaff() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "http://localhost:5055/greenshadow/api/v1/staff",
      type: "GET",
      contentType: "application/json",
      headers :{
        'Authorization': 'Bearer ' + getCookie('authToken')
      },
      success: function (result) {
        console.log(result);
        resolve(result);
      },
      error: function (xhr, status, error) {
        reject(error);
      },
    });
  });
}
