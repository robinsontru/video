function video(){
    var mivideo=document.getElementById('video')
    var source=document.createElement('source');
    source.setAttribute('src','./video/WhatsApp Video 2022-12-01 at 5.25.05 PM.mp4')
    source.setAttribute('type','video/mp4')
    mivideo.appendChild(source)
    mivideo.play()
 }function audio2(){

    var cancion=document.getElementById('id1')
    var source=document.createElement('audio');
    source.setAttribute('src','./audio/ORQUESTA-ARAGON-QUIEREME-SIEMPRE.mp3')
    source.setAttribute('controls','')
    source.setAttribute('autoplay','')
    cancion.appendChild(source)
    cancion.play()
 }