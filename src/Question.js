import React from 'react';
import {useState, useEffect} from 'react';
import './index'



function Question (){
    const[age, setAge] = useState('');
    const[weight, setWeight] = useState('');
    const[height, setHeight] = useState('');
    const[goal, setGoal] = useState('');
    const[commit, setCommit] = useState('');
    const[dietType, setDietType] = useState('');
    const[hasSubmitted, SetHasSubmitted] = useState(false);

    const onSubmit= e =>{
        e.preventDefault();
        SetHasSubmitted(true);

        setAge('');
        setWeight('');
        setHeight('');
        setGoal('');
        setCommit('');
        setDietType('');
    }


    return(
        <div>
        <h1>Fitness Pro</h1>

        <div className='center-wrapper'>
            <form>
                <div className='ele'>
                    <label>
                        Enter Your Age:
                        <div>
                        <input id= 'age' className='style-in' type='text' value={age} onChange={(event)=> setAge(event.target.value)}/>
                        </div>
                    </label>
                </div>

                <div className='ele'>
                    <label>
                        Enter Your Weight in lbs:
                        <div>
                        <input id= 'weight' className='style-in' type='text' value={weight} onChange={(event) => setWeight(event.target.value)}/>
                        </div>
                    </label>
                </div>

                <div className='ele'>
                    <label>
                        Enter Your Height in ft:
                        <div>
                        <input id='height' className='style-in' type='text' value={height} onChange={(event) => setHeight(event.target.value)}/>
                        </div>
                    </label>
                </div>


                <div className='ele'>
                    <label>
                        What is your Fitness Goal:
                        <div>
                        <select name='goal' className='drop' value={goal} onChange={(event) => setGoal(event.target.value)}>
                            <option>
                                Sports
                            </option>

                            <option>
                                Get Laid
                            </option>

                            <option>
                                Stay Energetic
                            </option>

                            <option>
                                Boost Immunity
                            </option>
                        </select>
                        </div>
                    </label>
                </div>


                <div className='ele'>
                    <label>
                        How long can you commit everyday in hours:
                        <div>


                        <select name = 'commit' className='drop' value={commit} onChange={(e) => setCommit(e.target.value)}>
                            <option value = '0.5'>
                                Less than 1 hour
                            </option>

                            <option value = '1'>
                                1 hour
                            </option>

                            <option value = '3'>
                                3 hour
                            </option>

                            <option value = '3+'>
                                More than 3 hours
                            </option>
                        </select>

                        </div>
                    </label>
                </div>

                <div className='ele'>
                    <label>
                        Enter your Diet Type:
                        <div>
                        <select name = 'dietType' className='drop' value={dietType} onChange={(e) => setDietType(e.target.value)}>

                            <option value = 'omnivore'>
                                Omnivore
                            </option>

                            <option value = 'vegan'>
                                Vegan
                            </option>

                            <option value = 'keto'>
                                Keto
                            </option>

                        </select>
                        </div>
                    </label>
                </div>

                <div className='ele'>
                    <button type="submit" className="button" onClick={onSubmit}>Submit</button>
                </div>

            </form>
        </div>
        </div>


    )
}


export default Question;
