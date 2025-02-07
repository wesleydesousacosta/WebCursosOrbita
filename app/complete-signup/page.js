"use client";

import { useState, useEffect } from "react";
import { auth } from "@/config/firebaseConfig"; // Importação corrigida
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";

export default function VerifyEmailPage() {
  const [emailVerified, setEmailVerified] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkEmailVerification = async () => {
      if (auth.currentUser) {
        await auth.currentUser.reload();
        if (auth.currentUser.emailVerified) {
          setEmailVerified(true);
          router.push("/dashboard");
        }
      }
    };

    checkEmailVerification();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Navbar />
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-semibold">Verify Your Email</h1>
        <p className="text-gray-600 mt-2">
          Please check your email for a verification link.
        </p>
        {!emailVerified ? (
          <p className="mt-4 text-red-500">Waiting for verification...</p>
        ) : (
          <p className="mt-4 text-green-500">Email verified! Redirecting...</p>
        )}
      </div>
    </div>
  );
}
