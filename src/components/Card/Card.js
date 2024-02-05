import React from 'react'
import userpic from '../../assets/userpic.jpg'

const Card = () => {
    return (
        <div className='middle'>

            <div className='profilepic'>
                <img className='userimg' src={userpic}></img>
            </div>
            <div className='profile-info'>
                <div className='name-prof'>
                    <div className='name'>
                        DAN MACE
                    </div>
                    <div className='prof'>
                        /Johny_Flims/
                    </div>
                </div>
                <div className='bio'>
                    Bio
                </div>
                <div className='bio-content'>
                    Bio Simply a film fan creating original content for YouTube. Let’s Collaborate.
                </div>
                <div className='creator-div'>
                    <div className='creator-btn'>
                        Creator
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card