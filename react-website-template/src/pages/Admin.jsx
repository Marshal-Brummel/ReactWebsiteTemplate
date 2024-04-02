import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA4EnTbw40XnyYjHRHYjvWAxJ42STDF3cA",
    authDomain: "st-patricks-curriculum.firebaseapp.com",
    projectId: "st-patricks-curriculum",
    storageBucket: "st-patricks-curriculum.appspot.com",
    messagingSenderId: "820214037926",
    appId: "1:820214037926:web:fa3a5cf67f8daf598d6367",
    measurementId: "G-8FMZBW4FT4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getUsers(db) {
  const usersCol = collection(db, 'users');
  const userSnapshot = await getDocs(usersCol);
  const userList = userSnapshot.docs.map(doc => doc.data());
  return userList;
}

const users = await getUsers(db);

const Admin = () => {
    return (
        <>
        <h1>Admin</h1>
        {users.map((user) => (
            <div key={user.username}>
                <p>{user.username}</p>
                <p>{user.age}</p>
                <p>{user.sex}</p>
                <input type="checkbox" defaultChecked={user.isAdmin}/>
            </div>
        ))}
        </>
    )
}

export default Admin