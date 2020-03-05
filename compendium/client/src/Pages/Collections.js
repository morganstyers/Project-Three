<<<<<<< HEAD
import React from 'react';
import './collect.css';
function collections() {
=======
import React from "react";
import Typography from '@material-ui/core/Typography';
import AddMineral from "../components/Modal/addMineralModal";
import RocksModal from "../components/Modal/RocksModal";
import CoinsModal from "../components/Modal/CoinsModal";
import AddCoinModal from '../components/Modal/addCoinModal';
import AddRock from '../components/Modal/AddRock';
>>>>>>> bdae2d4f8f2031144e49052fc42ac16051efaaa9

    return (
        <div class="container">
            <div class="cardContainer inactive">
                <div class="card">
                    <div class="side front">
                        <div class="img img1"></div>
                        <div class="info">
                            <h2>Super S</h2>
                            <p>A stand-on with an exceptional compact stance. Great for tight spaces and trailering.</p>
                        </div>
                    </div>
                    <div class="side back">
                        <div class="info">
                            <h2>At a glance</h2>
                            <div class="reviews">
                                <svg fill="#FFC324" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                                <svg fill="#FFC324" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                                <svg fill="#FFC324" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                                <svg fill="#FFC324" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                                <svg fill="#FFC324" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" >
            <defs><path d="M0 0h24v24H0V0z" id="a" /></defs><clipPath id="b"><use overflow="visible" href="#a"/></clipPath><path clip-path="url(#b)" d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
          </svg>
                            <p>23 Reviews</p>
                        </div>
                        <ul>
                            <li>Manage backyard gates with ease with the 36" deck option</li>
                            <li>Your choice of deck sizes ranging from 36", 48", 52" and 60"</li>
                            <li>Updated hip bolstering offers superior operator comfort and positioning</li>
                        </ul>
                        <div class="btn">
                            <h4>Learn More</h4>
                            <svg fill="#333" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" /><path d="M0-.25h24v24H0z" fill="none" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="cardContainer inactive">
            <div class="card">
                <div class="side front">
                    <div class="img img2"></div>
                    <div class="info">
                        <h2>Super Z HyperDrive</h2>
                        <p>A high-performance zero-turn with unsurpassed strength, speed &amp; reliability with a warranty to match.</p>
                    </div>
                </div>
                <div class="side back">
                    <div class="info">
                        <h2>At a glance</h2>
                        <div class="reviews">
                            <svg fill="#FFC324" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                            <svg fill="#FFC324" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                            <svg fill="#FFC324" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                            <svg fill="#FFC324" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                            <svg fill="#FFC324" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                            <p>39 Reviews</p>
                        </div>
                        <ul>
                            <li>Your choice of VX4 decks ranging from 60 to 72 inches</li>
                            <li>The 37hp Vanguard BigBlock EFI makes short work out of big jobs enabling speeds up to 16mph</li>
                            <li>Massive 24" drive tires and 13" front caster tires</li>
                        </ul>
                        <div class="btn">
                            <h4>Learn More</h4>
                            <svg fill="#333" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" /><path d="M0-.25h24v24H0z" fill="none" /></svg>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
            </div>
=======
            </nav>
            <br />
            <h2>Your Collections</h2>
            <span>
                <CardGroup>
                    <Card>
                        <CardImg top width="100%" src="../images/limestone.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Rocks</CardTitle>
                            <CardSubtitle>Here's all my rocks</CardSubtitle>
                            <CardText>These are some really cool rocks.</CardText>
                            <ButtonToolbar>
                                <AddRock id="rocks" buttonLabel="Add Rock" />
                                <RocksModal buttonLabel="Gallery"></RocksModal></ButtonToolbar>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="../images/rocks3.jpg" alt="Card image cap" />
                        <CardBody>
                        <CardTitle>
Minerals                        </CardTitle>
                            <CardSubtitle>Here's all my minerals</CardSubtitle>
                            <CardText>Here's all my minerals.  What are minerals anyway?</CardText>
                            <ButtonToolbar>
                            <AddMineral id="mineral" buttonLabel="Add Mineral" />
                            <br />
                            <RocksModal buttonLabel="Gallery"></RocksModal>
                            </ButtonToolbar>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="../images/2centfront.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle> 
Coins                            </CardTitle>
                            <CardSubtitle>Here's all my coins</CardSubtitle>
                            <CardText>Here's some old money.  I don't know if it still works.</CardText>
                            <ButtonToolbar>
                                <AddCoinModal id="coins" buttonLabel="Add Coin" />
                                <CoinsModal buttonLabel="Gallery"></CoinsModal></ButtonToolbar>
                        </CardBody>
                    </Card>
                </CardGroup>
             
            </span>
            <br />
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit">
                    Compendium
      </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
>>>>>>> bdae2d4f8f2031144e49052fc42ac16051efaaa9
        </div>

        <div class="cardContainer inactive">
            <div class="card">
                <div class="side front">
                    <div class="img img3"></div>
                    <div class="info">
                        <h2>Vanguard Power</h2>
                        <p>If you need a tough, commercial grade engine that makes you more productive, look to Vanguard.</p>
                    </div>
                </div>
                <div class="side back">
                    <div class="info">
                        <h2>At a glance</h2>
                        <div class="reviews">
                            <svg fill="#FFC324" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                            <svg fill="#FFC324" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                            <svg fill="#FFC324" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                            <svg fill="#FFC324" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                            <svg fill="#FFC324" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                            <p>26 Reviews</p>
                        </div>
                        <ul>
                            <li>V-Twin OHV Technology provides superior balance, low vibration, lower emissions, better fuel economy and higher HP/Weight</li>
                            <li>Advanced Debris Management keeps engine clean and cool for enhanced durability and performance</li>
                        </ul>
                        <div class="btn">
                            <h4>Learn More</h4>
                            <svg fill="#333" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" /><path d="M0-.25h24v24H0z" fill="none" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}
export default collections;