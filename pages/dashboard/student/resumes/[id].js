import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Left } from "../../../../src/components/Resumes/Editor/Left";
import { Right } from "../../../../src/components/Resumes/Editor/Right/index";
import { Core } from "../../../../src/components/Resumes/Templates/Core";
import { Diamond } from "../../../../src/components/Resumes/Templates/Diamond";
import { Dynamic } from "../../../../src/components/Resumes/Templates/Dynamic";
import { Gengar } from "../../../../src/components/Resumes/Templates/Gengar";
import { Harvard } from "../../../../src/components/Resumes/Templates/Harvard";
import { Moscow } from "../../../../src/components/Resumes/Templates/Moscow";
import { NonCore } from "../../../../src/components/Resumes/Templates/NonCore";
import { Onyx } from "../../../../src/components/Resumes/Templates/Onyx";
import { Refined } from "../../../../src/components/Resumes/Templates/Refined";
import { Ruby } from "../../../../src/components/Resumes/Templates/Ruby";
import { Stockholm } from "../../../../src/components/Resumes/Templates/Stockholm";
import { TAdigital } from "../../../../src/components/Resumes/Templates/TAdigital";
import { useModelContext } from "../../../../src/context/ModalContext";
import { useResumes } from "../../../../src/hooks/useResumes";
import { getLoginSession } from "../../../../src/lib/auth";
import { findUser } from "../../../../src/lib/user";
<<<<<<< HEAD
import {Amsterdam} from "../../../../src/components/Resumes/Templates/Amsterdam";
import {Blue} from "../../../../src/components/Resumes/Templates/Blue";
import {Casual} from "../../../../src/components/Resumes/Templates/Casual";
import { Modren } from "../../../../src/components/Resumes/Templates/Modren";
=======
import { Amsterdam } from "../../../../src/components/Resumes/Templates/Amsterdam";
import { Berlin } from "../../../../src/components/Resumes/Templates/Berlin";
import { Tokyo } from "../../../../src/components/Resumes/Templates/Tokyo";
import { Premium } from "../../../../src/components/Resumes/Templates/Premium";
import { Red } from "../../../../src/components/Resumes/Templates/Red";
import { Dynamo } from "../../../../src/components/Resumes/Templates/dynamo";
import { Madrid } from "../../../../src/components/Resumes/Templates/Madrid";
import { Amsterdam } from "../../../../src/components/Resumes/Templates/Amsterdam";
import { Blue } from "../../../../src/components/Resumes/Templates/Blue";
import { Casual } from "../../../../src/components/Resumes/Templates/Casual";
import { Morden } from "../../../../src/components/Resumes/Templates/Morden";
import { Classic } from "../../../../src/components/Resumes/Templates/Classic";
import { Retro } from "../../../../src/components/Resumes/Templates/Retro";
import { Chrono } from "../../../../src/components/Resumes/Templates/Chrono";
import { Vertical } from "../../../../src/components/Resumes/Templates/Vertical";


>>>>>>> 9f23a7f22e539706a1463c562867aabf15ecdbfd

const Templates = {
  noncore: NonCore,
  core: Core,
  onyx: Onyx,
  refined: Refined,
  tadigital: TAdigital,
  dynamic: Dynamic,
  moscow: Moscow,
  gengar: Gengar,
  stockholm: Stockholm,
  ruby: Ruby,
  harvard: Harvard,
  diamond: Diamond,
<<<<<<< HEAD
  amsterdam:Amsterdam,
  blue:Blue,
  casual:Casual,
  modren:Modren
=======
  berlin: Berlin,
  tokyo: Tokyo,
  premium: Premium,
  red: Red,
  dynamo: Dynamo,
  madrid: Madrid,
  amsterdam: Amsterdam,
  blue: Blue,
  casual: Casual,
  morden: Morden,
  classic: Classic,
  retro: Retro,
  chrono:Chrono,
  vertical:Vertical,
>>>>>>> 9f23a7f22e539706a1463c562867aabf15ecdbfd
};

const ResumeSlug = ({ user, id }) => {
  const componentRef = useRef();
  const { resumes } = useResumes(user);
  const [resume, setResume] = useState(null);
  const router = useRouter();
  const { setLoading } = useModelContext();

  const Template = Templates[resume?.layout?.template];
  console.log("res", resume);

  useEffect(() => {
    if (!resumes) return;
    setLoading(false);
    const currentResume = resumes.find((x) => x._id === id);
    if (!currentResume) {
      router.push("/dashboard/student/resumes");
      return;
    }
    setResume(currentResume);
  }, [resumes]);
  if (!resume) return <div></div>;
  if (resume)
    return (
      <div className="mt-[-10vh]">
        <Left resumeDetails={resume} />
        <main className="lg:ml-[30%] flex-1 mt-[10vh]">
          <div className="flex justify-between bg-gray-800 overflow-auto">
            <section className="mx-auto h-screen overflow-auto py-5 w-full">
              <Template componentRef={componentRef} />
            </section>
            <section className="w-[25%] h-screen overflow-auto">
              <Right componentRef={componentRef} />
            </section>
          </div>
        </main>
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Amatic+SC&family=Handlee&family=Lavishly+Yours&family=Lobster&family=Lora:ital@1&family=Merienda&family=Padauk&family=Patrick+Hand&family=Roboto&family=Sacramento&family=Satisfy&family=Shadows+Into+Light&family=Yellowtail&display=swap");
        `}</style>
      </div>
    );
};

export const getServerSideProps = async (context) => {
  const session = await getLoginSession(context.req);
  const user = (session?._doc && (await findUser(session._doc))) ?? null;
  if (!user) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  if (!user.detailsAvailable) {
    return {
      redirect: {
        destination: "/auth/user/details",
        permanent: false,
      },
    };
  }
  if (user.category !== "student") {
    return {
      redirect: {
        destination: `/dashboard/${user.category}`,
        permanent: false,
      },
    };
  }
  if (user.category === "student" && !user.academicsAvailable) {
    return {
      redirect: {
        destination: "/auth/user/academics",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
      id: context.query.id,
    },
  };
};

export default ResumeSlug;
