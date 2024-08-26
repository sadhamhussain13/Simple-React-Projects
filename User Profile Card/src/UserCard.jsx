import React from 'react';

const userData = [
    {
        name: 'John Doe',
        city: 'Salem',
        descr: "Hi I'm a Frontend Developer",
        online: false,
        profile: 'Images/team1.jpg',
        skill: ['React', 'html','css','bootstrap','javascript'],
    },
    {
        name: 'Jarvis',
        city: 'Chennai',
        descr: "Hi I'm a Backend Developer",
        online: false,
        profile: 'Images/team2.jpg',
        skill: ['Python','Java','django','Mysql'],
    },
    {
        name: 'Samraj',
        city: 'Vellore',
        descr: "Hi I'm a UI/UX Developer",
        online: true,
        profile: 'Images/team3.jpg',
        skill: ['adobe','figma','canva'],
    },
    {
        name: 'Vijay',
        city: 'Chennai',
        descr: "Hi I'm a Frontend Developer",
        online: false,
        profile: 'Images/team1.jpg',
        skill: ['React', 'Angular', 'Vue'],
    },
];

function User(props) {
    return (
        <div className='card-container'>
            <span className={props.online ? 'pro online' : 'pro offline'}>
                {props.online ? 'online' : 'offline'}
            </span>
            <img src={props.profile} className='image' alt='user'></img>
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.descr}</p>
            <div className='buttons'>
                <button className='primary'>Message</button>
                <button className='primary outline'>Follow</button>
            </div>
            <div className='skills'>
                <h5>Skills</h5>
                <ul>
                    {props.skill.map((skill, index) => {
                        return <li key={index}>{skill}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}

export const UserCard = () => {
    return (
        <>
            {userData.map((user, index) => {
                return (
                    <User
                        key={index}
                        name={user.name}
                        city={user.city}
                        descr={user.descr}
                        online={user.online}
                        profile={user.profile}
                        skill={user.skill}
                    />
                );
            })}
        </>
    );
};


// User.propTypes = {
//     name: propTypes.string.isRequired
// }


{/* <User name='Ramesh' city='Chennai' descr="Hi I'm a Frontend Developer" skills={['ui/ux','html','css','python','js','react js']} online={true} profile='Images/team2.jpg' /> */}