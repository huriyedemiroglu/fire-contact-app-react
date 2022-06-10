//! push info to Database
//! add info to Database
//! delete info in the Database

import firebase from "./firebase";

import { getDatabase, onValue, push, ref, remove, set, update } from "firebase/database";
import { useEffect, useState } from "react";


export const addInfoToDatabase = (info) => {
  const db = getDatabase();
  const userRef = ref(db,"/ContactInfoDB");
  const newUserRef = push(userRef);
  // set(newUserRef,{
  //   username: info.username,
  //   phoneNumber: info.phoneNumber,
  //   gender:info.gender
  // })
  set(newUserRef,info)
}

export const useFetch = () =>{
  const [isLoading, setIsLoading] = useState();
  const [contactList, setContactList] = useState();
  
  useEffect(() => {
    setIsLoading(true);

    const db = getDatabase();
    const userRef = ref(db,"/ContactInfoDB");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const arrayData = [];
      for (let id in data) {
        arrayData.push({id, ...data[id]})
      }
      setContactList(arrayData);
      setIsLoading(false);
    });
  }, []);
  
  return {isLoading, contactList};
}

export const deleteInfoInDatabase = (id) => {
  const db = getDatabase();
  const userRef = ref(db,"/ContactInfoDB");
  // userRef.child(id).remove();
  remove(ref(db,`/ContactInfoDB/${id}`))
}

export const editInfoInDatabase = (info) => {
  const db = getDatabase();
  const updates = {};
  updates[`/ContactInfoDB/${info.id}`] = info;
  return update(ref(db),updates);
}

