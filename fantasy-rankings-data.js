// Fallback player rankings for fantasy-trade-calculator.html.
// The calculator loads the latest rankings from the published Google Sheet when the page opens;
// this snapshot of that sheet is used only if the sheet can't be reached.
// Dynasty mirrors rest-of-season until dedicated dynasty rankings are added.
const redraftLists = {
    "QB": "Josh Allen|Brock Purdy|Patrick Mahomes|Joe Burrow|Dak Prescott|Lamar Jackson|Trevor Lawrence|Tyler Shough|Jared Goff|Caleb Williams|Bryce Young|Jalen Hurts|Drake Maye|Jayden Daniels|Sam Darnold|Bo Nix|Matthew Stafford|Kirk Cousins|Jordan Love|C.J. Stroud|Justin Herbert|Jacoby Brissett|Aaron Rodgers|Daniel Jones|Michael Penix Jr.|Kyler Murray|Jameis Winston|Deshaun Watson|Geno Smith|Malik Willis|Cam Ward",
    "RB": "Jahmyr Gibbs|Bijan Robinson|Kenneth Walker III|Jonathan Taylor|Derrick Henry|Christian McCaffrey|Chase Brown|Kyren Williams|Javonte Williams|James Cook|Breece Hall|Chuba Hubbard|Ashton Jeanty|Jeremiyah Love|Bhayshul Tuten|Jaylen Warren|D'Andre Swift|Quinshon Judkins|Cam Skattebo|Kyle Monangai|David Montgomery|Jordan Mason|Rhamondre Stevenson|TreVeyon Henderson|Omarion Hampton|Travis Etienne Jr.|RJ Harvey|Keaton Mitchell|Zach Charbonnet|Tony Pollard",
    "WR": "Jaxon Smith-Njigba|Puka Nacua|CeeDee Lamb|Amon-Ra St. Brown|Ja'Marr Chase|Chris Olave|Nico Collins|Zay Flowers|Tetairoa McMillan|Justin Jefferson|Garrett Wilson|Drake London|Parker Washington|Christian Watson|Davante Adams|Rashee Rice|Tee Higgins|A.J. Brown|Jalen Coker|Michael Wilson|Matthew Golden|George Pickens|DeVonta Smith|Jaylen Waddle|Carnell Tate|D.J. Moore|Terry Mclaurin|Denzel Boston|Deebo Samuel|Malik Nabers|D.K. Metcalf|Stefon Diggs|Luther Burden III|KC Concepcion|Emeka Egbuka|Jameson Williams|Malik Washington|Tre Tucker|Mike Evans",
    "TE": "Brock Bowers|Trey McBride|Tyler Warren|George Kittle|Tucker Kraft|Juwan Johnson|Harold Fannin Jr.|Sam LaPorta|Dalton Kincaid|Isaiah Likely|Kenyon Sadiq|Colston Loveland|Jake Ferguson|Dalton Schultz|Travis Kelce|Dallas Goedert|T.J. Hockenson|Mark Andrews"
};

// Base values from the sheet's Value(1000) column (before league-setting adjustments).
// Positions without values are scored by rank.
const redraftValues = {
    "QB": "817|755|726|709|687|684|653|641|613|600|583|572|555|550|538|527|524|504|492|477|468|456|438|426|403|386|368|363|340|325|304",
    "RB": "1000|989|952|924|907|889|876|871|858|837|796|793|785|763|752|732|716|700|679|653|635|612|594|576|563|550|489|467|435|400",
    "WR": "987|982|972|964|959|937|923|889|875|868|857|849|835|829|812|803|783|770|768|756|755|745|733|722|706|687|665|653|648|634|618|604|600|588|574|573|543|534|526"
};

window.fantasyRankingSnapshot = {
    lists: {
        redraft: redraftLists,
        dynasty: { ...redraftLists }
    },
    values: {
        redraft: redraftValues,
        dynasty: { ...redraftValues }
    },
    sourceNotes: {
        redraft: "Rest-of-season rankings and values from the Fantasy Football ROS Rankings sheet. TE values are scored by rank until the sheet provides them.",
        dynasty: "Dynasty rankings are not available yet, so rest-of-season rankings are shown."
    }
};
