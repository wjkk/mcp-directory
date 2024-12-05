import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link";
import { Project } from "@/types/project";
import StarIcon from "../../assets/imgs/star.svg";
import moment from "moment";

export default ({ project }: { project: Project }) => {
  return (
    <Link href={project.url || ""} target={project.target || "_self"}>
      <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-[#7e7e7e] bg-white p-8">
        <div className="mb-4 flex flex-row">
          {project.avatar_url && (
            <LazyLoadImage
              src={project.avatar_url}
              placeholderSrc={`/logo.png`}
              alt=""
              className="mr-4 inline-block h-16 w-16 object-cover rounded-full"
            />
          )}
          <div className="flex flex-col">
            <p className="text-base font-semibold">{project.title}</p>
            <p className="text-sm text-[#636262]">{project.author_name}</p>
          </div>
        </div>
        <p className="mb-4 text-sm text-[#636262]">{project.description}</p>

        <div className="flex items-center">
          {true &&
            Array.from({ length: 5 }).map((_, idx: number) => (
              <img
                key={idx}
                src={StarIcon.src}
                alt=""
                className="mr-1.5 inline-block w-4 flex-none"
              />
            ))}
          <div className="flex-1"></div>

          <p className="text-slate-500 text-sm">
            {moment(project.created_at).fromNow()}
          </p>
        </div>
      </div>
    </Link>
  );
};