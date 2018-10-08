'use strict';

angular.module('Core').factory('dataService', [
    function () {
        // Initialize Firebase

        var config = {
          apiKey: "AIzaSyAjoNbn9JeUPcoErpk35J9QAFz40vfno3c",
          authDomain: "apn-dev-95587.firebaseapp.com",
          databaseURL: "https://apn-dev-95587.firebaseio.com",
          projectId: "apn-dev-95587",
          storageBucket: "apn-dev-95587.appspot.com",
          messagingSenderId: "645309354612"
        };
        firebase.initializeApp(config);

        return {
            getData: function(referenceName, callback, param){
                var dataRef = firebase.database().ref(referenceName);
                dataRef.on('value', function(snapshot) {
                    var data = snapshot.val();
                    callback(data, param);
                });
            },
            saveObject:function(referenceName, object, onCompleted){
                if(object.id==null)
                {
                    object.id = firebase.database().ref().child(referenceName).push().key;
                }

                firebase.database().ref(referenceName+'/' + object.id ).set(object, onCompleted);
            },
            update:function(referenceName, value){
                firebase.database().ref(referenceName).update(value);
            },
            deleteObject:function(referenceName, object){
                firebase.database().ref(referenceName+'/' + object.id ).remove();
            },
            deleteItemOfAnObject:function(referenceName){
                firebase.database().ref(referenceName).remove();
            }
        };
    }
]);
