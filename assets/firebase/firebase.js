import { initializeApp, getApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCG-lY7bHpayMGPHK7rHUhVfeUt5easbh4",
  authDomain: "radiance-glow-view-count-bb0e3.firebaseapp.com",
  projectId: "radiance-glow-view-count-bb0e3",
  storageBucket: "radiance-glow-view-count-bb0e3.appspot.com",
  messagingSenderId: "891272651270",
  appId: "1:891272651270:web:2c764107afe9ec14f69987",
};

let app;

// Initialize Firebase if not already initialized
try {
  app = getApp();
} catch (error) {
  app = initializeApp(firebaseConfig);
}

const db = getFirestore(app);

export const trackPageVisit = async (ipAddress) => {
  try {
    const visitQuery = query(
      collection(db, "visits"),
      where("ipAddress", "==", ipAddress)
    );
    const visitSnapshot = await getDocs(visitQuery);

    if (visitSnapshot.empty) {
      await addDoc(collection(db, "visits"), { ipAddress });
    }
  } catch (error) {
    console.error("Error tracking page visit:", error);
  }
};

export const getTotalPageVisits = async () => {
  try {
    const visitsSnapshot = await getDocs(collection(db, "visits"));
    const totalVisits = visitsSnapshot.size;
    console.log(`Total page visits: ${totalVisits}`);
  } catch (error) {
    console.error("Error retrieving total page visits:", error);
  }
};
