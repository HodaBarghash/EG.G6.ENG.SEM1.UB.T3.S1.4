function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6RWcOKgTsuH":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbz5TzbdgUekQ8_0J8V74HpRevX4Ly_mVGqZe54ICfe5FXvXMyWv09smGrDIWnO_9pda/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v39q1attempts:player.GetVar("v39q1attempts"),v39q1answeredcorrect:player.GetVar("v39q1answeredcorrect"),v39q2attempts:player.GetVar("v39q2attempts"),v39q2answeredcorrect:player.GetVar("v39q2answeredcorrect")})
	}
	)
}

