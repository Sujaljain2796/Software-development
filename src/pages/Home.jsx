import HeroSection from "../components/HeroSection";
import SkillChip from "../components/SkillChip";
import skills from "../data/skillsData";

export default function Home() {
  return (
    <>
      <HeroSection />

      <div className="container text-center mt-5">
        <h2 className="mb-4">My Skills</h2>

        <div className="d-flex flex-wrap justify-content-center gap-3">
          {skills.map((skill, index) => (
            <SkillChip key={index} label={skill} />
          ))}
        </div>
      </div>
    </>
  );
}
