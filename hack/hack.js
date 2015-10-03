var hqinfo = 'FBI Headquarters\n935 Pennsylvania Ave. NW\nWashington, DC 20535-0001\n\nTarget security level: HIGH\n\nRecommend 7 proxies';
var inject = document.getElementById('hqinfo');
for (var i=0; i<hqinfo.length; i++) {
    var c = hqinfo.charAt(i);
    if (c == '\n') {
        var el = document.createElement('br');
    } else {
        var el = document.createElement('span');
        el.textContent = c;
    }
    inject.appendChild(el);
}
var animateFBI = function() {
    var nodes = inject.childNodes;
    var display = function(i) {
        setTimeout(function() {
            nodes[i].style.visibility = 'visible';
        }, i*15);
    }
    for (var i = 0; i < nodes.length; i++)
        display(i);
}

/* thanks http://cssdeck.com/labs/the-matrix */
var s = window.screen;
var width = q.width = s.width;
var height = q.height = s.height;
var letters = Array(256).join(1).split('');
var draw = function () {
  q.getContext('2d').fillStyle='rgba(0,0,0,.05)';
  q.getContext('2d').fillRect(0,0,width,height);
  q.getContext('2d').fillStyle='#0F0';
  letters.map(function(y_pos, index){
    text = String.fromCharCode(3e4+Math.random()*33);
    x_pos = index * 10;
    q.getContext('2d').fillText(text, x_pos, y_pos);
    letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
  });
};
setInterval(draw, 33);
/* --- */

var dickheads = [
    [
        'clapper.jpg',
        'James Clapper\nDirector of National Intelligence\n\nStatus: LIAR\n\nJames Clapper is a shifty slimeball. He should have been fired a long time ago.'
    ],
    [
        'pepper.jpg',
        'Sargeant Pepper\nPolice Officer\n\nEveryone loves a cooling orange mist. Pepper Spray Cop is happy to oblige.'
    ],
    [
        'feinstein.jpg',
        'Dianne Feinstein\nSenator from California\n\nStatus: Surveillance Cheerleader\n\nDianne Feinstein loves surveillance, unless it\'s the CIA spying on her. Then it\'s not okay.'
    ],
    [
        'torture.jpg',
        'Torture Victims\nProbably terrorists\n\nIndefinite detention with no due process is all the rage these days. These trendy gentlement are rocking the latest in detainee fashions.'
    ],
    [
        'mccain.jpg',
        'John McCain\nSenator from Arizona\n\nStatus: Maverick\n\nJohn McCain is a supports the PATRIOT Act, even though he can\'t articulate a single case of where mass surveillance protected America.'
    ],
    [
        'armore.jpg',
        'We need armored vehicles on every street corner. This will make sure no terrorists infiltrate our supermarkets and put ricin in your rice cakes.'
    ],
    [
        'mcconnell.jpg',
        'Mitch McConnell\nSenator from Kentucky\n\nStatus: Incompetent\n\nMitch McConnell can barely do his job as Senate Majority Leader. He should probably read the Fourth Amendment.'
    ],
    [
        'drone.jpg',
        'Sometimes we murder civilian children with flying robots, but this doesn\'t make *us* terrorists. Ask Obama. You\ve gotta break some eggs to make an omelette.'
    ],
    [
        'mikerogers.jpg',
        'Mike Rogers\nFBI dude\n\nStatus: Creeper\n\nRogers wants to put backdoors in everything. He has an unhealthy voyeurism fetish. Recommend keeping away from children.'
    ],
    [
        'sureveillance.jpg',
        'Mass surveillance is the pinnacle of human ingenuity. The NSA will help you find your lost car keys.'
    ],
    [
        'obama.jpg',
        'Barack Obama\nPresident of the U.S.\n\nStatus: Hypocrite\n\nWhen you pick up the phone, Obama is listening. Better make those words count.'
    ],
    [
        '911.jpg',
        'Spying on everyone\'s communications all the time will definitely stop the next 9/11. Just like it stopped the Boston Marathon Bombings and ISIS attacks in Texas.'
    ],
    [
        'tedcruz.jpg',
        'Ted Cruz\nSenator from Texas\n\nStatus: Canadian\n\nIf Obama announced he wanted to cure cancer for all children, Ted Cruz would probably announce a Republican effort to give all children cancer. And AIDS.'
    ]
];
for (var i = 0; i < dickheads.length; i++) {
    var div = document.createElement('div');
    div.style.visibility = 'hidden';
    var img = document.createElement('img');
    img.src = 'dickheads/'+dickheads[i][0];
    var div2 = document.createElement('div');
    div2.innerHTML = dickheads[i][1].replace(/\n/g, '<br/>');
    div.appendChild(img);
    div.appendChild(div2);
    document.getElementById('dickheads').appendChild(div);
}
var curDickhead = 0;
var animateDickheads = function() {
    var nodes = document.querySelectorAll('#dickheads > div');
    for (var i = 0; i < nodes.length; i++)
        nodes[i].style.visibility = 'hidden';

    nodes[curDickhead].style.visibility = 'visible';
    if (curDickhead < dickheads.length - 1)
        curDickhead++;
    else
        curDickhead = 0;
    
}

document.querySelector('#target input').disabled = false;
document.querySelector('#target input').value = '';
document.querySelector('#target input').focus();

document.querySelector('#target button').addEventListener('click', function(e) {
    e.preventDefault();
    console.log(document.querySelector('#target button'));
    document.querySelector('#target input').disabled = true;
    document.querySelector('#target button').style.display = 'none';
    document.querySelector('#spinner').style.display = 'inline-block';

    setTimeout(function() {
        document.querySelector('#map').className = 'zoom';
        
        setTimeout(function() {

            setTimeout(function() {
                document.querySelector('#target h2').textContent = "✔ target selected: fbi headquarters";
                document.querySelector('#target input').style.display = 'none';
                document.querySelector('#spinner').style.visibility = 'hidden';

                setTimeout(function() {
                    
                    document.querySelector('#data').style.display = 'block';
                    document.querySelector('#data').style.opacity = 0;

                    setTimeout(function() {
                        document.querySelector('#data').style.opacity = 1;
                        document.querySelector('#data input').value = '';
                        document.querySelector('#data input').focus();
                    }, 10);
                }, 2200);
            }, 1000);
        }, 10);
    }, 800);
    setTimeout(function() {
        document.querySelector('#dc').className = '';

        setTimeout(function() {
            document.querySelector('#dc').style.background = '#000 url(dc.jpg) top left no-repeat';
            document.querySelector('#dc').style.backgroundSize = '100% auto';
            setTimeout(function() {
                document.querySelector('#dc').className = 'big';
                setTimeout(function() {
                    document.querySelector('#fbi').className = '';
                    setTimeout(function() {
                        animateFBI();
                    }, 500);
                }, 00);
            }, 200);
        }, 1000);
    }, 400);
}, false);

document.querySelector('#data button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#data h2').textContent = "✔ hacking: all employee data";
    document.querySelector('#data input').style.display = 'none';
    document.querySelector('#data button').style.display = 'none';
    document.querySelector('#dc').className = 'huge';    
    setTimeout(function() {
        document.querySelector('canvas').className = '';
        document.querySelector('#cube').style.display = 'block';
        document.querySelector('#fbi').style.display = 'none';
        setInterval(animateDickheads, 75);
        setTimeout(function() {
            document.querySelector('#hacking').style.display = 'block';
            setTimeout(function() {
                document.querySelector('#hacking').style.opacity = 1;
                setTimeout(function() {
                    document.querySelector('#hacking > div').className = 'hacked';
                    setTimeout(function() {
                        document.querySelector('#scene1').className = 'hidden';
                        document.querySelector('#scene2').style.display = 'block';
                        setTimeout(function() {
                            document.querySelector('#scene2').className = '';
                        }, 10);
                    }, 5000);
                }, 500);
            }, 10);
        }, 500);
    }, 10);
}, false);