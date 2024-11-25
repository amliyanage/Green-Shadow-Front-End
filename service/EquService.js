import {getCookie} from "./ToeknService.js";

export function getAllEqu(){
    return new Promise((resolve, reject) => {
        $.ajax({
            url : "http://localhost:5055/greenshadow/api/v1/equipment",
            type : "GET",
            headers: {
                Authorization: "Bearer " + getCookie("authToken"),
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