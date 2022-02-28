import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import Navbar from "../components/layout/Navbar.jsx";
import Head from "next/head";

const DUMMY_MEETUPS = [
  {
    id: "i1",
    title: "t1",
    image: "img1",
    address: "ad1",
    description: "des1",
  },
  {
    id: "i2",
    title: "t2",
    image: "img2",
    address: "ad2",
    description: "des2",
  },
];

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <MeetupList meetups={DUMMY_MEETUPS} />
    </>
  );
};

export default HomePage;
