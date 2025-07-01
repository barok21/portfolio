import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import {
  ArrowBigLeft,
  Briefcase,
  ChevronRight,
  ContactRound,
  Database,
  Dumbbell,
  HandPlatter,
  Landmark,
  Languages,
  List,
  Newspaper,
  User,
  UserPenIcon,
  Wrench,
} from "lucide-react";
import { ChartRadialText } from "./chart";
import Image from "next/image";

const services = [
  { title: "ETL Design", status: "2 Developers", icon: UserPenIcon, src: "/images/11.png" , discription: 'Data models in SAP PowerDesigner ETL process design & implementation: Apache Airflow / AWS / Python.' },
  { title: "PostgreSQL", status: "80", icon: Dumbbell, src: "/images/22.png" },
  {
    title: "Microsoft Azure",
    status: "85",
    icon: HandPlatter,
    src: "/images/33.png",
  },
  { title: "Cloud: AWS", status: "75", icon: Briefcase, src: "/images/44.png" },
];

const technologies = [
  { title: "Python", status: "95", icon: UserPenIcon, src: "/images/11.png" },
  { title: "PostgreSQL", status: "80", icon: Dumbbell, src: "/images/22.png" },
  {
    title: "Microsoft Azure",
    status: "85",
    icon: HandPlatter,
    src: "/images/33.png",
  },
  { title: "Cloud: AWS", status: "75", icon: Briefcase, src: "/images/44.png" },
];

const engineeringPractices = [
  { title: "DWH & DB Concepts" },
  { title: "Data Analytics Engineering" },
  { title: "Data Preparation" },
  { title: "Data Integration" },
  { title: "Data Provisioning" },
  { title: "Data Solution Architecture" },
  { title: "ETL/ELT Solutions" },
];

const languages = [
  { title: "English", status: "90", icon: UserPenIcon, src: "/images/111.png" },
  { title: "Spanish", status: "60", icon: Dumbbell, src: "/images/222.png" },
  {
    title: "Italian",
    status: "30",
    icon: HandPlatter,
    src: "/images/333.png",
  },
  { title: "French", status: "70", icon: Briefcase, src: "/images/444.png" },
];

const toolStack = [
  { title: "Confluence", status: 75, icon: Landmark, src: "/images/1.png" },
  { title: "JIRA", status: 85, icon: Newspaper, src: "/images/2.png" },
  { title: "DBeaver", status: 95, icon: ContactRound, src: "/images/3.png" },
  {
    title: "Azure Synapse",
    status: 70,
    icon: HandPlatter,
    src: "/images/44.png",
  },
  { title: "GitLab", status: 86, icon: Briefcase, src: "/images/11.png" },
  { title: "ChatGPT", status: 90, icon: Landmark, src: "/images/3.png" },
  { title: "Ansible", status: 75, icon: Newspaper, src: "/images/22.png" },
  {
    title: "Visual Studio",
    status: 99,
    icon: ContactRound,
    src: "/images/33.png",
  },
];

const database = [
  { title: "Databricks", status: 90 },
  { title: "Oracle 12c", status: 75 },
  { title: "AWS Redshift", status: 85 },
  { title: "PostgreSQL", status: 95 },
];

const Technologies = ({
  title,
  Icon,
}: {
  title: string;
  Icon: React.ComponentType;
}) => (
  <div
    title={title}
    className="hover:text-green-500 hover:transition ease-in border-b-2  shadow p-2 rounded-full"
  >
    <Icon />
  </div>
);

const ToolStack = ({
  title,
  Icon,
}: {
  title: string;
  Icon: React.ComponentType;
}) => (
  <div
    title={title}
    className="hover:text-green-500 hover:transition ease-in border-b-2  shadow p-2 rounded-full"
  >
    <Icon />
  </div>
);

const Portifolio = () => {
  return (
    <section className="space-y-4">
      {/* <ChartRadialText /> */}
      <Card className="p-8 rounded-none rounded-tr-4xl ">
        <CardHeader>
          <CardTitle>
            Hello, I’m <span>{}</span>
          </CardTitle>
          <CardAction>
            <Button variant="link"></Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">
            Senior Data Engineer and{" "}
            <span className="inline-block bg-[#78cc6d] rounded-full p-1 -rotate-2 origin-bottom-left text-black font-bold">
              Data Scientist{" "}
            </span>
            Based in California, Los Angeles.
          </p>
        </CardContent>

        <p className="px-6 text-sm">
          Have worked in a variety of positions, including key developer,
          solution designer, and data architect. Strong engineering background
          combined with closely working with business customers.
        </p>

        <CardFooter className=" items-center justify-evenly flex gap-2 flex-wrap">
          <div className="flex gap-2 items-center">
            <p className="text-5xl">96</p>
            <p className="text-muted-foreground text-sm">
              Completed <br />
              Projects
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-5xl">8</p>
            <p className="text-muted-foreground text-sm">
              Year <br />
              of Experience
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-5xl">10+</p>
            <p className="text-muted-foreground text-sm">
              Awards <br />
              Winning
            </p>
          </div>
        </CardFooter>
      </Card>

      {/* Technical Skills */}
      <Card className="p-8 rounded-none ">
        <CardHeader>
          <CardTitle className="flex flex-col gap-4">
            <Badge
              variant={"outline"}
              className="p-2 rounded-full w-40 flex flex-row gap-3 hover:text-green-500 hover:duration-500"
            >
              <Dumbbell className="" />
              <p className="uppercase text-xs">Technical Skills</p>
            </Badge>
            <p className="text-4xl">Technologies</p>
          </CardTitle>
          <CardAction>
            <Button variant="link"></Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
            {technologies.map(({ title, status, icon: Icon, src }, index) => (
              <Card
                key={index}
                className="flex flex-row items-center justify-around p-6 shadow hover:shadow-lg transition rounded-xl"
              >
                <div className="text-green-500 mb-2">
                  <Image src={src} width={30} height={30} alt="" />
                </div>
                <p className="font-semibold">{title}</p>
                <Badge
                  variant={"outline"}
                  className="text-sm text-muted-foreground"
                >
                  {status}%
                </Badge>
              </Card>
            ))}
          </div>
        </CardContent>

        <CardFooter className=" items-center justify-evenly flex gap-10 flex-wrap"></CardFooter>

        <CardHeader>
          <CardTitle className="flex flex-col gap-4">
            <Badge
              variant={"outline"}
              className="p-2 rounded-full w-40 flex flex-row gap-3 hover:text-green-500"
            >
              <Wrench className="" />
              <p className="uppercase text-xs">Tool Skills</p>
            </Badge>
            <p className="text-4xl">Tool Stack</p>
          </CardTitle>
          <CardAction>
            <Button variant="link"></Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {toolStack.map(({ title, status, icon: Icon, src }, index) => (
              <Card
                key={index}
                className="flex flex-col items-center justify-center p-3 shadow hover:shadow-lg transition rounded-xl"
              >
                <div className="border-4 border-green-500 w-20 h-20 rounded-full flex flex-col items-center justify-center p-5">
                  <Image src={src} width={30} height={30} alt="" />
                  <p className="text-sm font-medium mt-1">{status}%</p>
                </div>
                <p className="font-semibold mt-">{title}</p>
              </Card>
            ))}
          </div>
        </CardContent>

        <CardHeader>
          <CardTitle className="flex flex-col gap-4 pt-4">
            <p className="text-4xl">General Skills </p>
            <Badge
              variant={"outline"}
              className="p-2 rounded-full w-40 flex flex-row gap-3 hover:text-green-500"
            >
              <Database className="" />
              <p className="uppercase text-xs">Database</p>
            </Badge>
          </CardTitle>
          <CardAction>
            <Button variant="link"></Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {database.map(({ title, status }, index) => (
              <Card
                key={index}
                className="flex flex-col items-center justify-center p-3 shadow hover:shadow-lg transition rounded-xl"
              >
                <div className="border-4 border-green-500 w-20 h-20 rounded-full flex flex-col items-center justify-center p-5">
                  <p className="text-sm font-medium mt-1">{status}%</p>
                </div>
                <p className="font-semibold mt-">{title}</p>
              </Card>
            ))}
          </div>
        </CardContent>
        <div className=" flex  grid-cols-2">
          <div>
            <CardHeader>
              <CardTitle className="flex flex-col gap-4 pt-4">
                <Badge
                  variant={"outline"}
                  className="p-2 rounded-full w-40 flex flex-row gap-3 hover:text-green-500"
                >
                  <Languages className="" />
                  <p className="uppercase text-xs">Languages</p>
                </Badge>
              </CardTitle>
              <CardAction>
                <Button variant="link"></Button>
              </CardAction>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2 items-center pt-2">
                {languages.map(({ title, status, icon: Icon, src }, index) => (
                  <Card
                    key={index}
                    className="flex flex-row items-center justify-center p-2 shadow hover:shadow-lg transition rounded-xl border-none"
                  >
                    <div className="text-green-500 mb-2 border-2 size-13 flex items-center justify-center rounded-2xl">
                      <Image src={src} width={30} height={30} alt="" />
                    </div>
                    <div className="">
                      <p className="font-semibold">{title}</p>
                      <p className="text-sm">
                        <span className="text-muted-foreground">
                          OOOOOOOOOOOO
                        </span>{" "}
                        {status}%
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </div>
          <div className="">
            <CardHeader>
              <CardTitle className="flex flex-col gap-4 pt-4">
                <Badge
                  variant={"outline"}
                  className="p-2 rounded-full w-60 flex flex-row gap-3 hover:text-green-500"
                >
                  <List className="" />
                  <p className="uppercase text-xs">Engineering practices</p>
                </Badge>
              </CardTitle>
              <CardAction>
                <Button variant="link"></Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2 items-center pt-2">
                {engineeringPractices.map(({ title }, index) => (
                  <Card
                    key={index}
                    className="flex flex-row p-2 shadow hover:shadow-lg transition rounded-xl border-none"
                  >
                    <div className="flex">
                      <ChevronRight className="text-green-500 font-bold" />
                      <p className="font-semibold text-sm">{title}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </div>
        </div>
      </Card>

      {/* Technical Skills */}
      <Card className="p-8 rounded-none ">
        <CardHeader>
          <CardTitle className="flex flex-col gap-4">
            <Badge
              variant={"outline"}
              className="p-2 rounded-full w-40 flex flex-row gap-3 hover:text-green-500 hover:duration-500"
            >
              <Wrench className="" />
              <p className="uppercase text-xs">SERVICES</p>
            </Badge>
            <p className="text-4xl">What Services I Provide ?</p>
          </CardTitle>
          <CardAction>
            <Button variant="link"></Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
            {technologies.map(({ title, status, icon: Icon, src }, index) => (
              <Card
                key={index}
                className="flex flex-row items-center justify-around p-6 shadow hover:shadow-lg transition rounded-xl"
              >
                <div className="text-green-500 mb-2">
                  <Image src={src} width={30} height={30} alt="" />
                </div>
                <p className="font-semibold">{title}</p>
                <Badge
                  variant={"outline"}
                  className="text-sm text-muted-foreground"
                >
                  {status}%
                </Badge>
              </Card>
            ))}
          </div>
        </CardContent>

        <CardFooter className=" items-center justify-evenly flex gap-10 flex-wrap"></CardFooter>

        <CardHeader>
          <CardTitle className="flex flex-col gap-4">
            <Badge
              variant={"outline"}
              className="p-2 rounded-full w-40 flex flex-row gap-3 hover:text-green-500"
            >
              <Wrench className="" />
              <p className="uppercase text-xs">Tool Skills</p>
            </Badge>
            <p className="text-4xl">Tool Stack</p>
          </CardTitle>
          <CardAction>
            <Button variant="link"></Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {toolStack.map(({ title, status, icon: Icon, src }, index) => (
              <Card
                key={index}
                className="flex flex-col items-center justify-center p-3 shadow hover:shadow-lg transition rounded-xl"
              >
                <div className="border-4 border-green-500 w-20 h-20 rounded-full flex flex-col items-center justify-center p-5">
                  <Image src={src} width={30} height={30} alt="" />
                  <p className="text-sm font-medium mt-1">{status}%</p>
                </div>
                <p className="font-semibold mt-">{title}</p>
              </Card>
            ))}
          </div>
        </CardContent>

        <CardHeader>
          <CardTitle className="flex flex-col gap-4 pt-4">
            <p className="text-4xl">General Skills </p>
            <Badge
              variant={"outline"}
              className="p-2 rounded-full w-40 flex flex-row gap-3 hover:text-green-500"
            >
              <Database className="" />
              <p className="uppercase text-xs">Database</p>
            </Badge>
          </CardTitle>
          <CardAction>
            <Button variant="link"></Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {database.map(({ title, status }, index) => (
              <Card
                key={index}
                className="flex flex-col items-center justify-center p-3 shadow hover:shadow-lg transition rounded-xl"
              >
                <div className="border-4 border-green-500 w-20 h-20 rounded-full flex flex-col items-center justify-center p-5">
                  <p className="text-sm font-medium mt-1">{status}%</p>
                </div>
                <p className="font-semibold mt-">{title}</p>
              </Card>
            ))}
          </div>
        </CardContent>
        <div className=" flex  grid-cols-2">
          <div>
            <CardHeader>
              <CardTitle className="flex flex-col gap-4 pt-4">
                <Badge
                  variant={"outline"}
                  className="p-2 rounded-full w-40 flex flex-row gap-3 hover:text-green-500"
                >
                  <Languages className="" />
                  <p className="uppercase text-xs">Languages</p>
                </Badge>
              </CardTitle>
              <CardAction>
                <Button variant="link"></Button>
              </CardAction>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2 items-center pt-2">
                {languages.map(({ title, status, icon: Icon, src }, index) => (
                  <Card
                    key={index}
                    className="flex flex-row items-center justify-center p-2 shadow hover:shadow-lg transition rounded-xl border-none"
                  >
                    <div className="text-green-500 mb-2 border-2 size-13 flex items-center justify-center rounded-2xl">
                      <Image src={src} width={30} height={30} alt="" />
                    </div>
                    <div className="">
                      <p className="font-semibold">{title}</p>
                      <p className="text-sm">
                        <span className="text-muted-foreground">
                          OOOOOOOOOOOO
                        </span>{" "}
                        {status}%
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </div>
          <div className="">
            <CardHeader>
              <CardTitle className="flex flex-col gap-4 pt-4">
                <Badge
                  variant={"outline"}
                  className="p-2 rounded-full w-60 flex flex-row gap-3 hover:text-green-500"
                >
                  <List className="" />
                  <p className="uppercase text-xs">Engineering practices</p>
                </Badge>
              </CardTitle>
              <CardAction>
                <Button variant="link"></Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2 items-center pt-2">
                {engineeringPractices.map(({ title }, index) => (
                  <Card
                    key={index}
                    className="flex flex-row p-2 shadow hover:shadow-lg transition rounded-xl border-none"
                  >
                    <div className="flex">
                      <ChevronRight className="text-green-500 font-bold" />
                      <p className="font-semibold text-sm">{title}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Portifolio;
