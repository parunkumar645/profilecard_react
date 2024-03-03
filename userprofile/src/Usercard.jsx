import PropTypes from "prop-types";
const userData = [
  {
    name: "ARUNKUMAR PATHANABAN",
    city: "Coimbatore",
    description: "Full-Stack Developer",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "React",
      "Node",
      "UI/UXS",
    ],
    online: true,
    profile: "images/arunimg.jpeg",
  },
  {
    name: "ARUNKUMAR PATHANABAN",
    city: "Coimbatore",
    description: "Full-Stack Developer",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "React",
      "Node",
      "UI/UXS",
    ],
    online: false,
    profile: "images/arun me.jpeg",
  },
  {
    name: "ARUNKUMAR PATHANABAN",
    city: "Coimbatore",
    description: "Full-Stack Developer",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "React",
      "Node",
      "UI/UXS",
    ],
    online: true,
    profile: "images/Photograph.jpg",
  },
];

function User(props) {
  return (
    <div className="card-container">
      <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}
      </span>
      <img
        src={props.profile}
        className="img"
        alt="user"
        // style={{ width: "180px", height: "180px" }}
      />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export const Usercard = () => {
  return (
    <>
      {userData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          description={user.description}
          online={user.online}
          profile={user.profile}
          skills={user.skills}
        />
      ))}
    </>
  );
  // <User
  //   name="ARUNKUMAR PATHMANABAN"
  //   city="Coimbatore"
  //   description="Full-Stack Developer"
  //   skills={[
  //     "HTML",
  //     "CSS",
  //     "Bootstrap",
  //     "JavaScript",
  //     "React",
  //     "Node",
  //     "UI/UXS",
  //   ]}
  //   online={true}
  //   profile="images/arunimg.jpeg"
  // />
};
User.prototype = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  online: PropTypes.bool.isRequired,
  prototype: PropTypes.string.isRequired,
};
