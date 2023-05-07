
import Card from "@/components/home/card";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import Modal from "@/components/shared/modal";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Note from "models/note.model";
import Greeting from './greeting';
import Notes from "./notes";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const { email, image, name } = session?.user || {};

  // if (!session || !name) {
  //   return (
  //     <>
  //       <h1 className="animate-fade-up bg-gradient-to-br from-black to-red-900 bg-clip-text text-center font-display text-xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]">
  //         You have been logged out
  //       </h1>
  //     </>
  //   );
  // }

  return (
    <>
      <Greeting name={name || "Sameer"} />
      <Notes />
    </>
  );
}