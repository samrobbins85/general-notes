import NavBar from "./components/navbar";
import Sidebar from "./components/sidebar";
import MainContent from "./components/main_content";
import { useState, useEffect, useRef } from "react";
import { getTree } from "./lib/tree";
import Head from "next/head";
function HomePage({ tree }) {
  const node = useRef();
  const node2 = useRef();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  function toggleSidebar() {
    setSidebarVisible(!sidebarVisible);
  }

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target) || node2.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setSidebarVisible(false);
  };

  return (
    <>
      <Head>
        <title>Sam's Notes</title>
      </Head>
      <NavBar toggleFunction={toggleSidebar} ref={node2} />
      <div className="sm:flex main-content">
        <Sidebar toggle={sidebarVisible} ref={node} tree={tree} />
        <MainContent toggle={sidebarVisible}>
          Welcome to Next.js! Here is some more content to check if it is
          properly underneath
        </MainContent>
      </div>
    </>
  );
}

export default HomePage;

export async function getStaticProps() {
  const tree = getTree();
  return {
    props: {
      tree,
    },
  };
}
