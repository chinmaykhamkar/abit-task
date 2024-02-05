import React from 'react'
import './HeroImg.css'
import userpic from '../../assets/userpic.jpg'
import heroimg from '../../assets/heroimg.png'
import Card from '../Card/Card'
import { FaPlus } from "react-icons/fa6";
import profilepic from '../../assets/profilepic.png'
const HeroImg = () => {
    return (
        <div className='container'>
            <div className='top'>
                <img className='topimg' src={heroimg}></img>
                <div className='herotext'>
                    John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now
                </div>
            </div>
            <Card />
            {/* <div className='middle'>

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
            </div> */}
            <div className='bottom'>
                <div className='release-div'>
                    <div className='releases'>
                        Releases
                    </div>
                    <div className='release-info'>
                        Videos that you upload in collaboration with aBit appear here.
                    </div>
                </div>
                <div className='video-stat'>
                    <div className='shared-video'>
                        <div className='stat'>
                            1
                        </div>
                        <div className='stat-info'>
                            Shared <br></br>videos
                        </div>
                    </div>
                    <div className='funds'>
                        <div className='stat'>
                            $9510
                        </div>
                        <div className='stat-info'>
                            Funds <br></br>Raised
                        </div>
                    </div>
                    <div className='community'>
                        <div className='stat'>
                            317
                        </div>
                        <div className='stat-info'>
                            Co-owner <br></br> community
                        </div>
                    </div>
                    <div className='earnings'>
                        <div className='stat'>
                            $3804
                        </div>
                        <div className='stat-info'>
                            Co-owner <br></br> Earnings
                        </div>
                    </div>
                </div>
            </div>

            <br></br>
            <br></br>
            <div className='addvideo-section'>
                <div className='card-section'>
                    <div className='add-card'>
                        <div className='card-space'></div>
                        <div className='card-add'>
                            <FaPlus />
                        </div>
                        <div className='card-space'>
                            <div className='card-text'>
                                You haven't uploaded any videos with aBit yet. Add now!
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#1c2125' }} className='add-card profilee'>
                        <img style={{ objectFit: 'none', height: '100%', borderRadius: '1.5rem' }} src={profilepic}></img>
                        <div className='profile-text'>
                            <p style={{ marginLeft: '0.5rem' }}>The Sound of Silence</p>
                        </div>
                        <div className='split'>
                            <div className='split-div'>
                                <div className='split-sec'>
                                    <div className='split-name'>Shares</div>
                                    <div className='split-value'>317</div>
                                </div>
                                <div className='split-sec'>
                                    <div className='split-name'>Offered</div>
                                    <div className='split-value'>75%</div>
                                </div>
                                <div className='split-sec'>
                                    <div className='split-name'>Raised</div>
                                    <div className='split-value'>$9510</div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <br></br>
            <div className='space-div'>

            </div>

            <div className='footer'>
                <div className='footer-div'>
                    <div className='footer-left'>
                        <div className='footer-top'>
                            aBit
                        </div>
                        <div className='footer-bottom'>
                            Changing The Way In Which
                            <br></br>
                            Creators And Fans Interact
                        </div>
                    </div>
                    <div className='footer-links'>
                        <div className='footer-link'>Home</div>
                        <div className='footer-link'>Are you a Creator?</div>
                        <div className='footer-link'>Support</div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default HeroImg