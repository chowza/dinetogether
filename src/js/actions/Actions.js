import ActionTypes from 'js/constants/Constants';
// import fetch from 'isomorphic-fetch';



// export function createMeal(details){
//   $.ajax({
//       method:"post",
//       url: Global.host + "/data/mockData.json",
//       dataType: 'json',
//       cache: false,
//       success: data => {
//         return {
//           type: ActionTypes.CREATE_MEAL,
//           details: details,
//         };
//       },
//       error: (xhr, status, err) => {
//         console.error(status, err.toString());
//       }
//     });
// }

// export function receiveUserData(details){
//   $.ajax({
//         url: Global.host + "/data/userData.json",
//         dataType: 'json',
//         cache: false,
//         success: data => {
//           return {
//             type: ActionTypes.RECEIVE_USER_DATA,
//             details:details
//           }
//         },
//         error: (xhr, status, err) => {
//         console.error(status, err.toString());
//         }
//     });
  
// }

// export function receiveMessage(details){
//   $.ajax({
//       method:"post",
//       url: Global.host + "/data/messagesData.json",
//       data:data,
//       dataType: 'json',
//       cache: false,
//       success: data => {
//         return {
//           type: ActionTypes.RECEIVE_MESSAGE,
//           details:details
//         }
//       },
//       error: (xhr, status, err) => {
//       console.error(status, err.toString());
//       }
//   });
// }

// export function receiveMyMeals(details){
//   $.ajax({
//       url: Global.host + "/data/myMeals.json",
//       dataType: 'json',
//       cache: false,
//       success: data => {
//         return {
//           type: ActionTypes.RECEIVE_MY_MEALS,
//           details:details
//         }
//       },
//       error: (xhr, status, err) => {
//       console.error(status, err.toString());
//       }
//   });
// }

// export function cancelMeal(details){
//   return {
//     type: ActionTypes.CANCEL_MEAL,
//     details:details
//   }
// }

// export function createMessage(details) {
//   return {
//     type: ActionTypes.CREATE_MESSAGE,
//     details: details,
//   };
// }

// export function joinMeal(details) {
//   return {
//     type: ActionTypes.JOIN_MEAL,
//     details: details,
//   };
// }