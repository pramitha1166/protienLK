import React from 'react'
import './style.css'

const Middle = ({product}) => {
    return (
        <div className="middle row">
            <div className="container">
                <ul class="nav nav-tabs">
                    <li class="nav-item active">
                        <a class="nav-link active" href="#overview" data-toggle="tab" area-expanded="true">Product Overview</a>
                    </li>
                    {/* <li class="nav-item">
                        <a class="nav-link" href="#suggest" data-toggle="tab" area-expanded="false">Suggest</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#suggest">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Disabled</a>
                    </li> */}
                </ul>
                <div className="tab-content tabArea">
                    <div className="tab-pane active" id="overview">
                        <div className="container">
                            <div dangerouslySetInnerHTML={{__html: product.description}}></div>
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
