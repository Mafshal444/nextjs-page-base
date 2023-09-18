import styles from '../styles/Home.module.css'
import Buttonc from '../component/btn'
import * as React from "react";
import { useEffect, useState } from 'react';
export default function Home () {
  // localStorage.setItem("hi", "hiiiiiii")
  // console.log(localStorage.getItem("hi"))
  useEffect(()=>{
    console.log("http://localhost:3000/api/hello")
    // var requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow'
    // };
    // fetch("http://localhost:3000/api/hello", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log('check response->',result))
    //   .catch(error => console.log('error', error));
    },[])
  // console.log('check props 1', from, result)
  return (
    <div className={styles.container}>
      {/* <h1>received: {result}</h1>
      <h1>from: {from}</h1> */}
      <Buttonc/>
    </div>
  )
}
export async function getServerSideProps(context) {
  // Call an external API endpoint to get posts
  // const res = await fetch("http://localhost:3001") 
  // console.log("res", res.json())
  // const res2 = await res.json()
  console.log("res from ap111 -----------")
  // const posts = null;
  // console.log("posts", posts)
  // const from = posts?.from
  // const result = posts?.result
  // console.log('check result', from, result)



  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      // from,
      "result": "ffff"
    }
  }
}