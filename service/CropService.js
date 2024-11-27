import { getCookie } from "./ToeknService.js";

export function getAllCrops(){
    return new Promise((resolve, reject) => {
        $.ajax({
            url : "http://localhost:5055/greenshadow/api/v1/crop",
            type : "GET",
            headers: {
                Authorization: "Bearer " + getCookie("authToken")
            },
            success: function(result){
                resolve(result);
            },
            error: function(xhr, status, error){
                reject(error);
            },
        })
    })
}

export function saveCrop(crop, field_code) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "http://localhost:5055/greenshadow/api/v1/crop?FieldCode="+field_code,
            type: "POST",
            headers: {
                Authorization: "Bearer " + getCookie("authToken"), // Include token if required
            },
            data: crop, // FormData object
            processData: false, // Prevent processing FormData
            contentType: false, // Let the browser set the correct Content-Type
            success: function (result) {
                resolve(result); // Resolve on success
            },
            error: function (xhr, status, error) {
                reject(xhr.responseText || error); // Provide error details
            },
        });
    });
}