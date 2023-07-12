let rec = document.getElementById('val')
let glow = document.getElementsByClassName('glow')[0]
let c_rec = document.getElementsByClassName('reactor')[0]
let tc = document.getElementsByClassName('text-change')[0]
let idc = document.getElementById('i1')
let time_v = document.getElementById('time_id')
let contact_v = document.getElementById('c_id')
rec.addEventListener('click', () => {
    if (rec.innerText === 'OFF') {
        c_rec.style.animationDuration = "0.4s"
        c_rec.style.backgroundColor = "white"
        c_rec.style.boxShadow = "var(--a_glow)"
        glow.style.color = "white"
        glow.style.textShadow = "var(--a_glow)"
        tc.style.color = "white"
        tc.style.textShadow = "var(--a_glow)"
        idc.style.color = "white"
        idc.style.textShadow = "var(--a_glow)"
        time_v.style.color = "white"
        time_v.style.textShadow = "var(--a_glow)"
        contact_v.style.color = "white"
        contact_v.style.textShadow = "var(--a_glow)"
        rec.style.color = "white"
        rec.style.textShadow = "var(--a_glow)"
        rec.innerText = "ON"
    }
    else if (rec.innerText === 'ON') {
        c_rec.style.animationDuration = "2s"
        c_rec.style.backgroundColor = "var(--sig)"
        c_rec.style.boxShadow = "var(--b_glow)"
        glow.style.color = "var(--sig)"
        glow.style.textShadow = "var(--b_glow)"
        tc.style.color = "var(--sig)"
        tc.style.textShadow = "var(--b_glow)"
        idc.style.color = "var(--sig)"
        idc.style.textShadow = "var(--b_glow)"
        time_v.style.color = "var(--sig)"
        time_v.style.textShadow = "var(--b_glow)"
        contact_v.style.color = "var(--sig)"
        contact_v.style.textShadow = "var(--b_glow)"
        rec.style.color = "var(--sig)"
        rec.style.textShadow = "var(--b_glow)"
        rec.innerText = "OFF"
    }

})