import { db } from '../firebase'
import { collection, onSnapshot, deleteDoc, doc, addDoc, updateDoc } from "firebase/firestore";
import { ref } from 'vue';

const usePosts = () => {
    const posts = ref([]);
    const postDataRef = collection(db, "posts");

    const myEditor = ref('')
    const snackbar = ref(false)

    const getPostsData = () => {
        onSnapshot(postDataRef, (snapshot) => {
            posts.value = snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            });
        })
    }
    const deletePost = async (id) => {
        await deleteDoc(doc(postDataRef, id));
    }


    let addPostInfo = ref({ description: null })

    const addPost = async (post) => {
        if (post.description) {
            await addDoc(postDataRef, {
                description: post.description
            }).then(() => {
                myEditor.value.setContents('');
                snackbar.value = true;

            })
        }
    }

    const updatePost = async (post) => {
        await updateDoc(doc(postDataRef, post.id), {
            title: post.title,
            description: post.description
        });
    };

    return {
        posts,
        myEditor,
        snackbar,
        getPostsData,
        deletePost,
        addPost,
        updatePost,
        addPostInfo

    }
}

export default usePosts