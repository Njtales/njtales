import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { images } from '../../constants';
import './About.scss';


const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  useEffect(() => {
    const experienceQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    async function getSkillsAndExp() {
      const experienceData = await client.fetch(experienceQuery);
      const skillsData = await client.fetch(skillsQuery);

      experienceData.sort((a,b) => (a.year > b.year ? 1 : -1));
      setSkills(skillsData);
      setExperiences(experienceData)
    }
    getSkillsAndExp();

  }, []);

  return (
    <>
        <div className="app__about">
          <div className="app__profilestory">
            <h2 className="head-text">Cultivating data into <span> insights, </span> <br />engineering the <span>future.</span></h2>
          </div>
          <div className="about-container">
            <div className="about-left-column">
              <div className="about-storytitle">My Story</div>
                <div className='about-storytext'>
                My journey in data engineering began in 2017, and it has been an exciting experience. Over the past four years, I have played a significant role in the digital realm, delivering impactful software solutions that have made a difference. I take pride in maintaining a 99% data pipeline uptime, demonstrating my commitment to smooth data flow. Additionally, I have achieved a 22% increase in efficiency KPIs, highlighting my skills in streamlining processes.<br/><br/>

                However, my journey is not limited to professional achievements. Outside of work, I have worked on personal projects that push boundaries. I developed a real-time sign language recognition system and created a data pipeline for processing S&P 500 data. These achievements have earned me two "Employee of the Month" awards, reflecting my pursuit of excellence. I have completed multiple data science and machine learning courses to further my knowledge and stay up-to-date with industry trends.<br/><br/>

                I possess technical expertise in Python, R, PostgreSQL, MS-SQL, MongoDB, TSQL, and various data-related tools. I proficiently handle data warehousing, integration, modelling, visualization, and analysis. Moreover, I am skilled in Apache Spark, PySpark, Kafka, Airflow, Git, GitHub, EC2, Redshift, IAM, S3, Glue, Kinesis, Docker, Tableau, Power BI, and various DevOps tools, making me a versatile data engineer.<br/><br/>

                Currently, I am based in London and am actively seeking data engineering opportunities across the UK. In addition to data engineering, I am passionate about analyzing market data, enjoy sketching, and find solace in reading books. These interests enrich my journey as a data enthusiast.<br/><br/>
                  </div>
          
            </div>

            <div className="about-right-column">
              <div className='about-work'>
              <span>Where I've Worked</span>
                <div className="app__skills-exp">
                  {experiences.map((experience) => (
                    <motion.div
                      className="app__skills-exp-item"
                      key={experience.year}
                    >
                      <div className="app__skills-exp-year">
                        <p className="year-text">{experience.year}</p>
                      </div>
                      <motion.div className="app__skills-exp-works">
                        {experience.works.map((work) => (
                          <>
                            <motion.div
                              whileInView={{ opacity: [0, 1] }}
                              transition={{ duration: 0.5 }}
                              className="app__skills-exp-work"
                              data-tip
                              data-for={work.name}
                              key={work.name}
                            >
                              <h4 className="work-text">{work.name}</h4>
                              <p className="ptext">{work.company}</p>
                            </motion.div>
                            {/* <ReactTooltip
                            
                              id={work.name}
                              effect="solid"
                              arrowColor="#053F5E"
                              className="skills-tooltip"
                              >
                              {work.desc}
                            </ReactTooltip> */}
                          </>
                        ))}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="app__profiles">
            {abouts.map((about, index) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="app__profile-item"
                key={about.title + index}
              >
                <img src={urlFor(about.imgUrl)} alt={about.title} />
                <h2 className="title-text" style={{ marginTop: 20 }}>{about.title}</h2>
                <p className="work_card-text" style={{ marginTop: 10 }}>{about.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="app__skills-list">
            {skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
