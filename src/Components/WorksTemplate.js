
let WorksTemplate = (props) => {
    const showMoreDetails = (TSE) => {
        const currentDetails = TSE.target.parentNode.parentNode.lastElementChild;
        currentDetails.classList.toggle('more-details-active')
    }
    return (
        <div className="work shadowed-card" data-aos="fade-up">
            <img src={props.image} alt="work" />
            
            <div className="work-detail">
                <h3>{props.projectName}</h3>
                <span 
                    className="view-more-btn"
                    onClick={showMoreDetails}>more details 
                </span>
            </div>

            <div className="more-details">
                <p>{props.projectDetail}</p>
                
                <a href={props.projectLink} className="check-project st-btn">check</a>
            </div>
        </div>
    )
}
export default WorksTemplate
