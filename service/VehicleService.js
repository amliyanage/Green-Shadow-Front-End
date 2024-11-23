import{getCookie} from "../service/ToeknService.js"

export function getAllVehicles() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "http://localhost:5055/greenshadow/api/v1/vehicle",
      type: "GET",
      contentType: "application/json",
      headers: {
        Authorization: "Bearer " + getCookie("authToken"),
      },
      success: function (result) {
        console.log(result);
        resolve(result); // resolving with the response result
      },
      error: function (xhr, status, error) {
        reject(error); // rejecting on error
      },
    });
  });
}
