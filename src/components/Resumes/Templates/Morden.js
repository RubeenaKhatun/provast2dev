import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import { rename, months } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";
import Link from "next/link";

export const Morden = ({ componentRef, filter = null }) => {
  const { profile, objective, education, work, skills, languages,projects,certifications, social,layout,hobbies,awards } = useResumeContext();
  const { r, g, b, a } = layout?.color || { r: "0", g: "0", b: "0", a: "0" };
  const headingClass =
    "text-xl captialize font-bold text-gray-700 border-b-2 border-black mb-2 pb-1";
  return (
    <div ref={componentRef} className='my-5 w-a4W bg-white mx-auto h-a4H'>
      <div className='py-2 px-2 h-full relative' >
        {console.log("profile",social)}
            <div className="flex">
                        <div className="w-[35%] z-10 bg-slate-800 h-[100] p-5">
                            <div className="mt-44">
                            <h1 className="text-[16px]  tracking-[2px] text-white">
                                CONTACT
                            </h1>
                            <hr className="h-[2px] bg-black my-2" />
                            {profile && (
                                <>
                                <div className="flex">
                                <span>
                                <img
                                    src={profile.image}
                                    className="w-5 h-5"
                                />
                                </span>
                                <h1 className="mx-4  text-white text-[12px]">
                                {profile.phone}
                                </h1>
                            </div>
                            <div className="flex my-1 text-[12px]">
                                <span>
                                <img
                                    src="https://www.freeiconspng.com/uploads/icon-email-icon-clip-art-at-clker-com-vector-qafaq-e-mail-icon-trace--0.png"
                                    className="w-4 h-5"
                                />
                                </span>
                                <h1 className="mx-4 text-white   ">
                                {profile.email}
                                </h1>
                            </div>
                            </>
                            )}


                            {social && (
                                <div>
                                    {social.map((item) => (
                                <div className="my-3 flex text-[12px]" key={item.network}>
                                <span>
                                    <img
                                    src={
                                        "https://www." +
                                        item.network +
                                        ".com/favicon.ico"
                                    }
                                    alt=""
                                    srcset=""
                                    className="w-4 grayscale-[40%]   "
                                    />
                                </span>

                                <Link href={item.url}>
                                    <span className="mx-4 text-white">
                                    {item.username}
                                    </span>
                                </Link>
                                </div>
                            ))}
                                </div>
                            )}


                            <h1 className="text-[16px] mt-4 tracking-[2px] text-white">
                                SKILLS
                            </h1>
                            <hr className="h-[2px] bg-black my-2" />

                            {skills && (
                                <div className="">
                                    {skills.length != 0 && (
                                <div>
                                {skills.map((item) => (
                                    <div className="flex" key={item.name}>
                                    <p className="mx-1   text-white my-2 w-[70%] text-sm text-[12px]">
                                        {item.name}
                                    </p>
                                    {item.level == "Beginner" && (
                                        // <p className="text-white"></p>
                                        <div className="w-[40%] h-1 relative rounded-md left-0 bg-white   mt-5">
                                        <div className="w-[66%] absolute right-0 bg-black h-2"></div>
                                        </div>
                                    )}
                                    {item.level == "Intermediate" && (
                                        <div className="w-[40%] h-1 relative rounded-md left-0 bg-white  mt-5">
                                        <div className="w-[33%] absolute right-0 bg-black h-2"></div>
                                        </div>
                                    )}
                                    {
                                        item.level == "Expert" && (
                                        <div className="w-[40%] h-1 relative rounded-md  left-0 bg-white  mt-5">
                                            <div className="w-[1%] absolute right-0 bg-black h-2"></div>
                                        </div>
                                        )
                                        // <p className="text-white">exp</p>
                                    }
                                    </div>
                                ))}
                                </div>
                            )}

                                </div>
                            )}

                            {hobbies && (
                                <div>
                                     
                            {hobbies.length != 0 && (
                                <div className="mt-5">
                                <h1 className="text-[16px]  text-white  tracking-[2px]">
                                    HOBBIES
                                </h1>
                                <hr className="h-[2px] my-1" />
                                {hobbies.map((item) => (
                                    <p className="my-2 text-white text-[12px]" key={item.name}>
                                    {item.name}
                                    </p>
                                ))}
                                </div>
                            )}
                                </div>
                            )}

                            {languages && (
                                <div>
                                    {languages.length != 0 && (
                                <div className="mt-5">
                                <h1 className="text-[16px]  text-white  tracking-[2px]">
                                    LANGUAGES
                                </h1>
                                <hr className="h-[2px] my-1" />
                                {languages.map((item) => (
                                    <p className="my-2 text-white text-[12px]" key={item.name}>
                                    {item.name}
                                    </p>
                                ))}
                                </div>
                            )}
                                </div>
                            )}

                            {awards && (
                                <div>
                                    {awards.length != 0 && (
                                <>
                                {" "}
                                <h1 className="text-[16px]  tracking-[2px] text-white mt-5">
                                    AWARADS
                                </h1>
                                <hr className="h-[2px] bg-black mt-1 mb-4 " />
                                {awards.map((item) => (
                                    <div className="my-2 " key={item.name}>
                                    <span className="font-semibold text-[12px] text-white">
                                        {item.name}
                                    </span>

                                    <p className="mx-4 text-[12px] text-white opacity-60">
                                        {item.summary.data.slice(0, 38)}
                                    </p>
                                    </div>
                                ))}
                                </>
                            )}
                                </div>
                            )}
                            </div>
                        </div>

                        <div className="w-[65%] z-10 bg-slate-300 p-5">
                            {objective && (
                                <div>
                                    {objective.length != 0 && (
                            <div className="mt-48">
                                <div className="flex mb-2">
                                <h1 className="text-[16px] font-semibold tracking-[1px]">
                                    OBJECTIVE
                                </h1>
                                <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                                </div>
                                <p className="text-[12px]">
                                {objective}
                                </p>
                            </div>
                            )}
                                </div>
                            )}

                            {work && (
                                <div>
                                    {work.length != 0 && (
                            <div className="mt-5">
                                <div className="flex">
                                <h1 className="text-[16px] font-semibold tracking-[1px]">
                                    WORK
                                </h1>
                                <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                                </div>
                                {work.map((item) => (
                                <div className="mt-1 text-[12px]" key={item.company}>
                                    <h1 className="font-semibold">
                                    {item.company}{" "}
                                    <span className="font-medium">
                                        ({item.from.slice(0, 4)}-
                                        {item.to.slice(0, 4)})
                                    </span>{" "}
                                    </h1>

                                    <p className="ml-5">{item.website}</p>
                                    <p className="ml-5 my-1">{item.summary.data}</p>
                                </div>
                                ))}
                            </div>
                            )}
                                </div>
                            )}
                            
                            {education && (
                                <div>
                                    {education.length != 0 && (
                            <div className="mt-5">
                                <div className="flex">
                                <h1 className="text-[16px] font-semibold tracking-[1px]">
                                    EDUCATION
                                </h1>
                                <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                                </div>
                                {education.map((item) => (
                                <div className="mt-1 text-[12px]" key={item.institution}>
                                    <h1 className="font-semibold">
                                    {item.institution}{" "}
                                    <span className="font-medium">
                                        ({item.startDate.slice(0, 4)}-
                                        {item.endDate.slice(0, 4)})
                                    </span>{" "}
                                    </h1>

                                    <p className="ml-5">{item.typeOfDegree}</p>
                                    <p className="ml-5 my-1">{item.summary.data}</p>
                                    <p className="ml-5">GPA-{item.gpa}</p>
                                </div>
                                ))}
                            </div>
                            )}
                                </div>
                            )}

                            
                            {projects && (
                                <div>
                                    {projects.length != 0 && (
                            <div className="mt-5">
                                <div className="flex mb-2">
                                <h1 className="text-[16px] font-semibold tracking-[1px]">
                                    PROJECTS
                                </h1>
                                <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                                </div>
                                {projects.map((item) => (
                                <div className="mt-1 text-[12px]" key={item.name}>
                                    {/* <Link href={item.website}> */}
                                    <h1 className="font-semibold">
                                        {item.name}{" "}
                                        <span className="font-medium">
                                        ({item.from.slice(0, 4)}-
                                        {item.to.slice(0, 4)})
                                        </span>{" "}
                                    </h1>{" "}
                                    {/* </Link> */}

                                    <span className="ml-5  ">
                                    {item.summary.data}
                                    </span>
                                </div>
                                ))}
                            </div>
                            )}
                                </div>
                            )}

                            
                            {certifications && (
                                <div>
                                    {certifications.length != 0 && (
                            <div className="mt-2">
                                <div className="flex mb-2">
                                <h1 className="text-[16px] font-semibold tracking-[1px]">
                                    CERTIFICATIONS
                                </h1>
                                <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                                </div>
                                {certifications.map((item) => (
                                <p className="my-2 text-[12px]" key={item.title}>
                                    {item.title}
                                </p>
                                ))}
                            </div>
                            )}
                                </div>
                            )}
                        </div>
            </div>

                    <div className="absolute w-[80%] h-28 bg-cyan-800 z-20 top-9 flex">
                      {profile && (
                        <div>
                        {
                          <>
                            <h1 className="text-3xl mt-7 ml-24 font-semibold tracking-widest text-white ">
                              {profile.firstName.concat(
                                "  " + profile.lastName
                              )}
                            </h1>
                            <p className="mt-2 ml-36 tracking-widest text-white">
                              {profile.role}
                            </p>
                          </>
                        }
                      </div>
                      )}
                    </div>
                  {profile && (
                      <img
                      // src="https://randomuser.me/api/portraits/men/40.jpg"
                      src={profile.image}
                      alt=""
                      className=" absolute top-6 right-10 z-30 h-32 rounded-full border-white border-4  "
                    />
                  )}
          
      </div>
    </div>
  );
};
