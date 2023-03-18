import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Link = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);

  return <div></div>;
};

export default Link;
