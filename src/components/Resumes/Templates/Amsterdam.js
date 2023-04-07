import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import { months, rename } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";
import Link from "next/link";

export const Amsterdam = ({ componentRef }) => {
  const {
    profile,
    objective,
    education,
    projects,
    work,
    skills,
    hobbies,
    languages,
    certifications,
    social,
    awards,
    layout,
  } = useResumeContext();
  console.log(profile);
  return (
    <>
      <div
        ref={componentRef}
        style={{ fontFamily: layout?.font }}
        className={`w-a4W bg-white mx-auto h-a4H my-5 relative`}
      >
        <div className="absolute left-44 top-5 border-[3px] border-gray-500 h-40 w-96 bg-white text-center">
          {profile && (
            <>
              <h1 className="mt-8 font-extrabold text-2xl tracking-[3px]">
                {profile.firstName} {profile.lastName}
              </h1>
              <h1 className="mt-3">{profile.role}</h1>
            </>
          )}
          {social && (
            <div className="mt-5 mb-4 flex  justify-center align-middle">
              {social.length != 0 && (
                <>
                  {social.map((item) => (
                    <div className="mx-5 mt-1 text-[12px]" key={item.network}>
                      <span className="">
                        <Link href={item.url}>
                          <img
                            src={
                              "https://www." + item.network + ".com/favicon.ico"
                            }
                            className="w-5 grayscale-[40%] "
                          />
                        </Link>
                      </span>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>

        <div className="flex">
          <div className="w-[40%] h-auto bg-gray-200">
            <div className="mt-56 mx-10 flex flex-col">
              <div>
                <h4 className="font-bold tracking-[4px] text-[16px] heading">
                  CONTACTS
                </h4>
                <hr className="w-[100%] h-1 bg-black my-2" />
                {profile && (
                  <div className="text-[12px]">
                    <p className="font-semibold my-2 ">{profile.email}</p>
                    <p className="font-semibold my-2">{profile.phone}</p>
                  </div>
                )}
              </div>
              {education && (
                <div>
                  {education.length != 0 && (
                    <>
                      <h4 className="font-bold tracking-[4px] text-[16px]  mt-4 heading">
                        EDUCATION
                      </h4>
                      <hr className="w-[100%] h-1 bg-black my-2" />

                      {education.map((item) => (
                        <div
                          className="flex flex-col text-[12px] "
                          key={item.institution}
                        >
                          <span className="text-black font-semibold mt-4">
                            {item.institution}
                          </span>
                          <span className="mb-2 font-semibold">
                            ({item.startDate.slice(0, 4)} -{" "}
                            {item.endDate.slice(0, 4)})
                          </span>

                          <span className="font-semibold">
                            {item.typeOfDegree}
                          </span>
                          <span className="">{item.fieldOfStudy}</span>

                          <span className="">
                            <b>GPA - </b> {item.gpa}
                          </span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              )}
            </div>
            {skills && (
              <div className="mx-10 flex flex-col mt-4">
                {skills.length != 0 && (
                  <>
                    <h4 className="font-bold text-[16px]  tracking-[4px] heading">
                      SKILLS
                    </h4>
                    <hr className="w-[100%] h-1 bg-black my-2" />
                    {skills.map((item) => (
                      <>
                        <div className="flex justify-between text-[12px] ">
                          <span className="font-semibold mt-1" key={item.name}>
                            {item.name}
                          </span>
                          <span className=" mt-1 mb-3 ">{item.level}</span>
                        </div>
                      </>
                    ))}
                  </>
                )}
              </div>
            )}
            {awards && (
              <div className="mx-10 flex flex-col mt-4 ">
                {awards.length != 0 && (
                  <>
                    <h4 className="font-bold tracking-[4px] heading text-[16px] ">
                      AWARDS
                    </h4>
                    <hr className="w-[100%] h-1 bg-black my-2" />
                    {awards.map((item) => (
                      <div className="text-[12px] ">
                        <p className="font-semibold mt-1 " key={item.name}>
                          {item.name}({item.date.slice(0, 4)})
                        </p>
                        <span className="mb-3">{item.awarder}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}

            {hobbies && (
              <div className="mx-10 flex flex-col mt-4 ">
                {hobbies.length != 0 && (
                  <>
                    <h4 className="font-bold tracking-[4px] text-[16px]  heading">
                      HOBBIES
                    </h4>
                    <hr className="w-[100%] h-1 bg-black my-2" />
                    {hobbies.map((item) => (
                      <div className="text-[12px] ">
                        <span className="font-semibold mt-1">{item.name}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}

            {languages && (
              <div className="mx-10 flex flex-col mt-4">
                {languages.length != 0 && (
                  <>
                    <h4 className="font-bold tracking-[4px] text-[16px]  heading">
                      LANGUAGES
                    </h4>
                    <hr className="w-[100%] h-1 bg-black my-2" />
                    {languages.map((item) => (
                      <div className="text-[12px] ">
                        <span className="font-semibold mt-1" key={item.name}>
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}
          </div>
          <div className="w-[60%] h-auto mt-52 mx-10">
            {objective && (
              <div>
                {objective.length != 0 && (
                  <>
                    <h2 className="font-bold tracking-[4px] heading">
                      OBJECTIVE
                    </h2>
                    <hr className="w-[100%] h-1 bg-black my-1" />
                    <p className="my-4">{objective}</p>
                  </>
                )}
              </div>
            )}

            {projects && (
              <div>
                {projects.length != 0 && (
                  <>
                    <h2 className="font-bold tracking-[4px] text-[16px]  heading">
                      PROJECTS
                    </h2>
                    <hr className="w-[100%] h-1 bg-black my-1" />

                    {projects.map((item) => (
                      <div className="text-[12px] ">
                        <div className="my-4">
                          <span className="text-black text-[16px]  font-bold mt-3">
                            {item.name} ({" "}
                            <span className="text-black font-semibold">
                              {item.from.slice(0, 4)} to {item.to.slice(0, 4)}
                            </span>{" "}
                            ){" "}
                          </span>

                          <p className="ml-4 mt-2">{item.summary.data}</p>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}

            {work && (
              <div>
                {work.length != 0 && (
                  <>
                    <h2 className="font-bold text-[16px]  tracking-[4px] heading">
                      WORK
                    </h2>
                    <hr className="w-[100%] h-1 bg-black my-1" />
                    {work.map((item) => (
                      <div className="text-[12px] ">
                        <div className="flex flex-col" key={item.company}>
                          {/* <span className="text-black font-bold mt-3" >{item.name}</span> */}

                          <span className="text-black text-[16px]  font-bold mt-3">
                            {item.company}{" "}
                            <span className="font-semibold">
                              ({item.from.slice(0, 4)} to {item.to.slice(0, 4)})
                            </span>
                          </span>
                          <span className="text-black font-semibold mx-4">
                            {item.designation}
                          </span>
                          <p className="ml-4">{item.summary.data}</p>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}

            {certifications && (
              <div>
                {certifications.length != 0 && (
                  <>
                    <h2 className="font-bold tracking-[4px] text-[16px] mt-4 heading">
                      CERTIFICATIONS
                    </h2>
                    <hr className="w-[100%] h-1 bg-black my-1" />
                    {certifications.map((item) => (
                      <div className="text-[12px] ">
                        <div className="flex flex-col" key={item.title}>
                          {/* <span className="text-black font-bold mt-3" >{item.name}</span> */}

                          <span className="text-black font-bold mt-3">
                            {item.title}
                            <span className="font-semibold">{item.date}</span>
                          </span>
                          <span className="text-black font-semibold mx-4">
                            {item.issuer}
                          </span>
                          {/* <p className="ml-4">{item.summary.data}</p> */}
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};
