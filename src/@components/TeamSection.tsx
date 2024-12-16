import React from 'react';
import teams from '@lib/json/team.json';

interface IProps {
  className?: string;
}
const TeamSection: React.FC<IProps> = ({ className = '' }) => {
  return (
    <section className={`team_section ${className}`}>
      <div className="container">
        <div className="section_meta text-center mb-12">
          <h1 className="section_title has_line">Our Team</h1>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {teams?.map((item) => (
            <div key={item.name} className="team_member">
              <div className="person_img">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="person_info">
                <h4>{item.name}</h4>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TeamSection;
