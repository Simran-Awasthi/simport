interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  isExternal?: boolean;
}

const ProjectCard = ({
  title,
  description,
  link,
  isExternal = false,
}: ProjectCardProps) => {
  const content = (
    <div className="group cursor-pointer py-10 border-b border-gray-200 hover:bg-peach/20 transition-all duration-300 px-8 -mx-8 rounded-xl">
      <h3 className="text-2xl sm:text-3xl font-normal mb-5 group-hover:translate-x-1 transition-transform duration-300 leading-snug">
        {title}
      </h3>
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light">
        {description}
      </p>
    </div>
  );

  if (link) {
    if (isExternal) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    return <a href={link}>{content}</a>;
  }

  return content;
};

export default ProjectCard;
