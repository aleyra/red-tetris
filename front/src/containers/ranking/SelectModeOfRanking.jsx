import React from 'react'
import { connect } from 'react-redux'

//redux actions
import { selectMode } from '../../redux/mode/modeActions'

//css
import '../../css/Ranking.css'

//const
import { 
    CyanColoredButton,
    BlueColoredButton,
    OrangeColoredButton,
    YellowColoredButton
} from "../../components/Buttons";
import { 
    SOLO_EASY,
    SOLO_HARD,
    SOLO_NORMAL,
    MULTI
} from '../../components/ConstString';

function SelectModeOfRanking(props) {
    return (
        <React.Fragment>
            {/* <h1>Ranking - {props.modeSelected}</h1> */}
            <h1>Ranking</h1>
            <div className="Ranking_select_mode">
                <div className="Ranking_button">
                    {/* <Link to="/Ranking/"> */}
                        <CyanColoredButton
                            variant="contained"
                            disableRipple
                            sx={{ color: 'black'}}
                            onClick={() => props.selectMode(SOLO_NORMAL)}
                        >
                            Solo Normal Mode
                        </CyanColoredButton>
                    {/* </Link> */}
                </div>
                <div className="Ranking_button">
                    {/* <Link to="/Ranking/"> */}
                        <OrangeColoredButton
                            variant="contained"
                            disableRipple
                            onClick={() => props.selectMode(SOLO_EASY)}
                            >
                            Solo Easy Mode
                        </OrangeColoredButton>
                    {/* </Link> */}
                </div>
                <div className="Ranking_button">
                    {/* <Link to="/Ranking/"> */}
                        <YellowColoredButton
                            variant="contained"
                            disableRipple
                            sx={{ color: 'black'}}
                            onClick={() => props.selectMode(SOLO_HARD)}
                        >
                            Solo Hard Mode
                        </YellowColoredButton>
                    {/* </Link> */}
                </div>
                <div className="Ranking_button">
                    {/* <Link to="/Ranking/"> */}
                        <BlueColoredButton
                            variant="contained"
                            disableRipple
                            onClick={() => props.selectMode(MULTI)}
                            >
                            Multiplayer Mode
                        </BlueColoredButton>
                    {/* </Link> */}
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        modeSelected: state.mode.modeSelected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectMode: mode => dispatch(selectMode(mode))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectModeOfRanking)