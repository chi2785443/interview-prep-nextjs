import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const dummyInterview = [
  {
    id: "1",
    userId: "user1",
    role: "frontend developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["what is react?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00z",
  },
  {
    id: "2",
    userId: "user2",
    role: "frontend developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["what is react?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00z",
  },
];

const page = () => {
  return (
    <div>
      <section className=" card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice on interview questions & get instant feedback
          </p>
          <Button className=" btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className=" max-sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          <p>You haven't taken any interview yet</p>
          {dummyInterview.map((item) => (
            <InterviewCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          <p>There are no interviews avaliable</p>
          {dummyInterview.map((item) => (
            <InterviewCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
