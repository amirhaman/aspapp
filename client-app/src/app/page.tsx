"use client";
import Image from "next/image";
import { Provider } from "react-redux";
import { Articles } from "@/components/Articles/Articles";
import store from "./store";

export default function Home() {
  return (
    <Provider store={store}>
      <Articles />
    </Provider>
  );
}
