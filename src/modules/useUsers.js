import { auth } from '../firebase'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { ref } from 'vue';

const useUsers = () => {
    const email = ref('');
    const password = ref('');
    const user = ref(null);

    const login = () => {
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                user.value = userCredential.user;
                console.log("userInfo: " + user.value.email);
                localStorage.setItem('userLoginInfoFireBase', user.value.email);
                console.log("userLoginInfoFireBase: " + localStorage.getItem('userLoginInfoFireBase'));
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    debugger
                    alert(errorMessage);
                }
            });
    }

    const logout = () => {
        signOut(auth).then(() => {
            user.value = null;
            console.log("Logged out: " + user.value);
            localStorage.removeItem('userLoginInfoFireBase');
        }).catch((error) => {
            console.log(error);
        });
    }



    const isLoggedIn = ref(false);
    const isLoggedInTest = () => {
        user.value = auth.currentUser
        onAuthStateChanged(auth, (user) => {
            if (user) {
                isLoggedIn.value = true;
                console.log("isLoggedIn: " + isLoggedIn.value);
            } else {
                isLoggedIn.value = false;
                console.log("isLoggedIn: " + isLoggedIn.value);
            }
        });
    }

    return {
        login,
        logout,
        isLoggedIn,
        isLoggedInTest,
        email,
        password,
        user
    }
}

export default useUsers