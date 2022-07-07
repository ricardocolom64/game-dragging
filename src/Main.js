import React, { useState } from 'react'
import './Main.css';
import { Row, Col, Form, Dropdown } from 'react-bootstrap'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import GameItem from './components/GameItem';
import sample_box_art from './assets/Super_Mario_64_box_cover.jpg'
import sample_box_art2 from './assets/mario_odyssey.png'
import sample_box_art3 from './assets/mario_advance_3.png'

const myGames = [
    {
        id: "0",
        name: "Super Mario 64",
        year: "1996",
        platform: "Nintendo 64",
        image: sample_box_art,
    },
    {
        id: "1",
        name: "Super Mario Odyssey",
        year: "2017",
        platform: "Nintendo Switch",
        image: sample_box_art2,
    },
    {
        id: "2",
        name: "Yoshi's Island: Super Mario Advance 3",
        year: "2002",
        platform: "Game Boy Advance",
        image: sample_box_art3,
    },
]

const getItemStyle = (isDragging, draggableStyle) => ({
    filter: isDragging ? "opacity(75%)" : "",
    ...draggableStyle
});

export default function Main() {
    const [games, updateGames] = useState(myGames)
    const [search, setSearch] = useState("")
    const [showResults, setShowResults] = useState(false);

    const handleSearchbarFocus = () => {
        setShowResults(true);
    }

    const handleSearchbarBlur = () => {
        setShowResults(false);
    }

    function handleOnDragStart(provided){
        setShowResults(false);
    }

    function handleOnDragEnd(result) {
        if (!result.destination) return;
        const items = Array.from(games);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateGames(items);
    }

    return (
        <div className="Main">
            Main
            <div className='main-content'>
                <div className='left-and-right d-flex flex-row border border-2 border-danger'>
                    <div className='left m-3'>
                        <div className='left-content d-flex flex-column justify-content-center'>
                            <div className='searchbar p-0 mb-3'>
                                <Form.Control type="search" placeholder="Search..." onFocus={handleSearchbarFocus} onBlur={handleSearchbarBlur} onChange={handleSearchbarFocus}/>
                                <Dropdown.Menu show={showResults} className="search-dropdown p-0">
                                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </div>
                            <div className='vertical-sorter p-0 m-0 border border-1 rounded border-white d-flex flex-column justify-content-center'>
                                <DragDropContext onDragEnd={handleOnDragEnd} onDragStart={handleOnDragStart}>
                                    <Droppable droppableId='all-games'>
                                        {(provided) => (<ul className='all-games m-0 p-0' {...provided.droppableProps} ref={provided.innerRef}>
                                            {games.map(({ id, name, year, platform, image }, index) => {
                                                return (
                                                    <Draggable key={id} draggableId={id} index={index}>
                                                        {(provided, snapshot) => {
                                                            return (
                                                                <div key={id} index={index} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
                                                                    <GameItem name={name} image={image} year={year} platform={platform} index={index} id={id} />
                                                                </div>
                                                            )
                                                        }}
                                                    </Draggable>
                                                )
                                            })}
                                            {provided.placeholder}
                                        </ul>
                                        )}
                                    </Droppable>
                                </DragDropContext>
                            </div>

                        </div>

                    </div>
                    <div className='right m-3 border border-1 rounded border-white'>
                        <div className='right-content d-flex flex-column justify-content-center'>
                            <div className='items-grid p-3 my-3'>
                                Items Grid
                            </div>
                        </div>
                    </div>
                </div>
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
