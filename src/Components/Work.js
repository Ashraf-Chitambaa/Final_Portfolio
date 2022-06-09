import WorkData from './WorkData';
import WorksTemplate from './WorksTemplate';
import './Work.css'

export default function Work() {

    const works = WorkData.map(work => {
        return (
            <WorksTemplate 
                key={work.projectName}
                image={work.image}
                projectName={work.projectName}
                projectDetail={work.projectDetail}
                projectLink={work.projectLink}
            />
        )
    })

  return (
    <div className="work-container component" id="work-page">
        <h2 className="main-heading bott-line" data-aos='fade-up'>Work</h2>
        <div className="works cards">
            {works}
        </div>
    </div>
  )
}
