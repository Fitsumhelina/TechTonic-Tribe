// import { doc, getDoc } from "firebase/firestore";
// import { create } from "zustand";
// import { db } from "./firebase";

// export const useUserStore = create((set) => ({
//   currentUser: null,
//   isLoading: true,
//   fetchUserInfo: async (uid) => {
//     if (!uid) return set({ currentUser: null, isLoading: false });

//     try {
//       const docRef = doc(db, "users", uid);
//       const docSnap = await getDoc(docRef);

//       if (docSnap.exists()) {
//         set({ currentUser: docSnap.data(), isLoading: false });
//       } else {
//         set({ currentUser: null, isLoading: false });
//       }
//     } catch (err) {
//       console.log(err);
//       return set({ currentUser: null, isLoading: false });
//     }
//   },
// }));



import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";

// Load user state from local storage
const loadUserStateFromLocalStorage = () => {
  const storedUser = localStorage.getItem("currentUser");
  return storedUser ? JSON.parse(storedUser) : null;
};

export const useUserStore = create((set) => ({
  currentUser: loadUserStateFromLocalStorage(),
  isLoading: true,
  fetchUserInfo: async (uid) => {
    if (!uid) {
      localStorage.removeItem("currentUser");
      return set({ currentUser: null, isLoading: false });
    }

    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        localStorage.setItem("currentUser", JSON.stringify(userData));
        set({ currentUser: userData, isLoading: false });
      } else {
        localStorage.removeItem("currentUser");
        set({ currentUser: null, isLoading: false });
      }
    } catch (err) {
      console.log(err);
      localStorage.removeItem("currentUser");
      set({ currentUser: null, isLoading: false });
    }
  },
  logout: () => {
    localStorage.removeItem("currentUser");
    set({ currentUser: null });
  }
}));


