let googleUsers = [
   {
      name: "Pol",
      lastName: "Tarres",
      id: 111111,
   },
   {
      name: "Billy",
      lastName: "Bolt",
      id: 222222,
   },
   {
      name: "Suuf",
      lastName: "Sela",
      id: 333333,
   },
];

function callGoogleUsers(idNumber, callback1, callback2) {
   googleUsers.forEach((user) => {
      if (idNumber == user.id) {
         callback1(user.id, user.name);
      } else {
         callback2();
      }
   });
}

function onSuccess(userId, userName) {
   console.log(
      "The user information for id " +
         userId +
         " " +
         userName +
         " has been retrived"
   );
}

function onFailure() {
   console.log("failure ID");
}
callGoogleUsers(111111, onSuccess, onFailure);
