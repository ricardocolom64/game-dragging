import React from 'react'
import './Main.css';
import { Container, Row, Col, Form } from 'react-bootstrap'
import GameItem from './components/GameItem';
import sample_box_art from './assets/Super_Mario_64_box_cover.jpg'
import sample_box_art2 from './assets/mario_odyssey.png'
import sample_box_art3 from './assets/mario_advance_3.png'

const myGames = [
    {
        name: "Super Mario 64",
        year: "1996",
        platform: "Nintendo 64",
        image: sample_box_art,
    },
    {
        name: "Super Mario Odyssey",
        year: "2017",
        platform: "Nintendo Switch",
        image: sample_box_art2,
    },
    {
        name: "Yoshi's Island: Super Mario Advance 3",
        year: "2002",
        platform: "Game Boy Advance",
        image: sample_box_art3,
    },
]

export default function Main() {
    return (
        <div className="Main">
            Main
            <div className='main-content'>
                <Container className='left-and-right d-flex flex-row border border-2 border-danger'>
                    <Container className='left m-3'>
                        <Container className='left-content d-flex flex-column justify-content-center'>
                            <Container className='searchbar p-0 my-3'>
                                <Form.Control type="search" placeholder="Search..." />
                            </Container>

                            <Container className='vertical-sorter p-0 m-0 mb-3 border border-1 rounded border-white d-flex flex-column justify-content-center'>
                                <ul className='all-games m-0 p-0'>
                                    {myGames.map(({ name, year, platform, image }, index) => {
                                        return (
                                            <GameItem name={name} image={image} year={year} platform={platform} index={index} />
                                        )
                                    })}
                                </ul>
                            </Container>

                        </Container>

                    </Container>
                    <Container className='right m-3 border border-1 rounded border-white'>
                        <Container className='right-content d-flex flex-column justify-content-center'>
                            <Container className='items-grid p-3 my-3'>
                                Items Grid
                            </Container>
                        </Container>
                    </Container>
                </Container>
                {/* <ul className='all-games'>
                    {myGames.map(({ name, year, platform, image }, index) => {
                        return (
                            <GameItem name={name} image={image} year={year} platform={platform} index={index} />
                        )
                    })}
                </ul> */}
            </div>
        </div>
    )
}
