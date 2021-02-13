import React from 'react'
import './style.css'

const Middle = () => {
    return (
        <div className="middle row">
            <div className="container">
                <ul class="nav nav-tabs">
                    <li class="nav-item active">
                        <a class="nav-link active" href="#overview" data-toggle="tab" area-expanded="true">Product Overview</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#suggest" data-toggle="tab" area-expanded="false">Suggest</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#suggest">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Disabled</a>
                    </li>
                </ul>
                <div className="tab-content tabArea">
                    <div className="tab-pane active" id="overview">
                        <div className="container">
                            <p>
                            *Nutritional information will vary depending on flavour.<br />

                            Premium whey packed with 21g of protein per serving, for the everyday protein you need from a quality source.

                            And where does this whey come from? The same cows that produce your milk and cheese — simply filtered, evaporated, and spray-dried to produce all-natural nutritionals.

                            Ranked Grade A by independent tester Labdoor for both quality and value, Impact Whey Protein is officially certified as one of the best protein powders on the market.

                            Get yours in over 40 flavours, with delicious favourites including Chocolate, Vanilla, and Strawberry Cream.
                            <br />
                            <br />
                            What are the benefits of Impact Whey Protein?
                            It provides your body with convenient, high-quality protein, which contributes to the growth and maintenance of muscle mass — making sure you’re getting the protein you need, each and every day.

                            It also includes 3.6g of glutamine and all the essential amino acids, including 4.5g of BCAAs — these naturally occur in protein which helps to build and repair new muscle — so you’re always ready for the next session.

                            With just 1.9g of fat, 1g of carbs, and at just 103 calories per serving, Impact Whey Protein is perfect for everyone, whatever your fitness goals.
                            <br />
                            And it comes in a range of indulgent, mouth-watering flavours, too!
                            </p>
                        </div>                        
                    </div>
                    <div className="tab-pane" id="suggest">
                        <div className="container">
                            <ol className="orderList">
                                <li>
                                    <h6>When to take Impact Whey Protein?</h6>
                                    <p>It’s fast-absorbing, so we recommend adding 1 large scoop (25g) to 150-250ml of water or milk 30-60 minutes post-workout — but it’s ideal any time for a convenient way to get the protein you need.</p>
                                </li>
                                <li>
                                    <h6>What does Impact Whey Protein work well with?</h6>
                                    <p>Get some extra help to power through that difficult last set — add a scoop of Creatine Monohydrate to your shake — it’s proven to increase physical performance in successive bursts of short-term, high-intensity exercise.2</p>
                                </li>
                            </ol>
                        </div>                           
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Middle
