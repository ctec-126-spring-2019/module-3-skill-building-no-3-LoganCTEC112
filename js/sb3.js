// sb3.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.

const verse1 = () => {
    let output = ""
    output = "<p>Yeah, ha-ha</p><p>Finally, someone let me out of my cage</p><p>Now time for me is nothing 'cause I'm counting no age</p><p>Now I couldn't be there</p><p>Now you shouldn't be scared</p><p>I'm good at repairs</p><p>And I'm under each snare</p><p>Intangible</p><p>Bet you didn't think so I command you to</p><p>Panoramic view</p><p>Look, I'll make it all manageable</p><p>Pick and choose</p><p>Sit and lose</p><p>All you different crews</p><p>Chicks and dudes</p><p>Who you think is really kickin' tunes?</p><p>Picture you gettin' down in a picture tube</p><p>Like you lit the use</p><p>You think it's fictional?</p><p>Mystical? Maybe</p><p>Spiritual</p><p>Hero who appears in you to clear your view when you're too crazy</p><p>Lifeless</p><p>To those the definition for what life is</p><p>Priceless</p><p>To you because I put you on the hype shit</p><p>You like it?</p><p>Gun smokin' righteous with one toke</p><p>You're psychic amoung those</p><p>Possess you with one go</p><br>"

    return output
}

const verse2 = () => {
    let output = ""
    output = "<p>The essence, the basics</p><p>Without, did you make it?</p><p>Allow me to make this</p><p>Child-like in nature</p><p>Rhythm</p><p>You have it or you don't, that's a fallacy</p><p>I'm in them</p><p>Every sprouting tree</p><p>Every child of peace</p><p>Every cloud and sea</p><p>You see with your eyes</p><p>I see destruction and demise (that's right)</p><p>Corruption in disguise</p><p>From this fuckin' enterprise</p><p>Now I'm sucked into your lies</p><p>Through Russel, not his muscles put percussion her provides</p><p>For me as a guide</p><p>Y'all can see me now 'cause you don't see with your eye</p><p>You perceive with your mind</p><p>That's the inner</p><p>So I'ma stick around with Russ' and be a mentor</p><p>But a few rhymes so motherfuckers remember where the thought is</p><p>I brought all this</p><p>So you can survive when law is lawless (right here)</p><p>Feelings, sensations that you thought was dead</p><p>No sqeualing, remember that it's all in your head</p><br>"

    return output
}

const chorus1 = () => {
    let output = ""
    output = "<p>I ain't happy, I'm feeling glad</p><p>I got sunshine in a bag</p><p>I'm useless but not for long</p><p>The future is coming on</p><p>I ain't happy, I'm feeling glad</p><p>I got sunshine in a bag</p><p>I'm useless but not for long</p><p>The future is coming on</p><p>It's coming on</p><p>It's coming on</p><p>It's coming on</p><br>"
    return output
}

const chorus2 = () => {
    let output = ""
    output = "<p>I ain't happy, I'm feeling glad</p><p>I got sunshine in a bag</p><p>I'm useless but not for long</p><p>The future is coming on</p><p>I ain't happy, I'm feeling glad</p><p>I got sunshine in a bag</p><p>I'm useless but not for long</p><p>The future is coming on</p><p>It's coming on</p><p>It's coming on</p><p>It's coming on</p><p>It's coming on</p><br>"
    return output
}

const chorus3 = () => {
    let output = ""
    output = "<p>I ain't happy, I'm feeling glad</p><p>I got sunshine in a bag</p><p>I'm useless but not for long</p><p>The future is coming on</p><p>I ain't happy, I'm feeling glad</p><p>I got sunshine in a bag</p><p>I'm useless but not for long</p><p>The future is coming on</p><p>It's coming on</p><p>It's coming on</p><p>It's coming on</p><p>It's coming on</p><p>The future is coming on</p><p>It's coming on</p><p>It's coming on</p><p>It's coming on</p><p>It's coming on</p><p>The future is coming on</p><p>It's coming on</p><p>It's coming on</p><p>The future is coming on</p><p>It's coming on</p><p>It's coming on</p><p>My future</p>"
    return output
}

const songName = () => {
    let output = ""
    output = "<h2>Clint Eastwood by Gorrilaz</h2>"
    return output
}



const main = () => {
    let finalOutput = "" // used to build lyrics string
    finalOutput = songName() + chorus1() + verse1() + chorus2() + verse2() + chorus3()
    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput
}

window.onload = function () {
    main()
}