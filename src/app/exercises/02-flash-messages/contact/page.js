"use client";
import React from "react";
import { ToastContext } from "../../../../components/ToastProvider";
import { useRouter } from "next/navigation";
function ContactPage() {
  const { createToast } = React.useContext(ToastContext);
  const router = useRouter();
  function handleSubmit(event) {
    event.preventDefault();
    // todo send data to server
    router.push("/exercises/02-flash-messages");
    createToast(
      "Your message was received.\nWe will get back to you shortly",
      "success"
    );
  }
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
