import React from 'react'
import '../styles/GameItem.css'

export default function GameItem(props) {
    return (
        <div className='game-item' id={props.index > 0 ? "addTopBorder" : ""}>
            <div className='game-item-content'>
                <div className='game-image'>
                    <img src={props.image} alt="..." />
                </div>
                <div className='game-info'>
                    <div className='game-header'>
                        <h4 className='game-name'>
                            {props.name}
                        </h4>
                        <h5 className='game-year'>
                            {props.year}
                        </h5>
                    </div>
                    <div className='game-details'>
                        <div className='game-platform'>
                            {props.platform}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
